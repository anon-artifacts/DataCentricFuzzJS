// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif
public class FuzzEngine: ComponentBase {
    private var postProcessor: FuzzingPostProcessor? = nil

    public var allowExploration: Bool = true
    public var added: Bool = false

    override init(name: String) {
        super.init(name: name)
    }

    // Install a post-processor that is executed for every generated program and can modify it (by returning a different program).
    public func registerPostProcessor(_ postProcessor: FuzzingPostProcessor) {
        assert(self.postProcessor == nil)
        self.postProcessor = postProcessor
    }

    // Performs a single round of fuzzing using the engine.
    public func fuzzOne(_ group: DispatchGroup) {
        fatalError("Must be implemented by child classes")
    }

    func predictedRetained(_ parent: Program, _ mutated: Program) -> Bool {
        let options = LiftingOptions.includeComments
        let parentCode = self.fuzzer.lifter.lift(parent, withOptions: options)
        let mutatedCode = self.fuzzer.lifter.lift(mutated, withOptions: options)

        // Construct JSON payload
        let payload: [String: Any] = [
            "parent_code": parentCode,
            "mutated_code": mutatedCode,
            "parent_id": parent.id.uuidString,
            "mutated_id": mutated.id.uuidString,
            "flags": "" // Optional
        ]

        guard let url = URL(string: "http://127.0.0.1:5001/predict") else {
            logger.warning("Invalid Flask endpoint URL")
            return false
        }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        do {
            request.httpBody = try JSONSerialization.data(withJSONObject: payload, options: [])
        } catch {
            logger.warning("Failed to serialize JSON payload: \(error)")
            return false
        }

        let semaphore = DispatchSemaphore(value: 0)
        var retained: Bool = false

        let task = URLSession.shared.dataTask(with: request) { [weak self] data, response, error in
            // capture self weakly to avoid retain cycles
            defer { semaphore.signal() }

            guard let self = self else { return } // make self explicit inside closure

            if let error = error {
                self.logger.warning("Flask request failed: \(error)")
                return
            }

            guard let data = data else {
                self.logger.warning("Flask response has no data")
                return
            }
            do {
                if let json = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any],
                let retainedValue = json["retained"] as? Bool {
                    retained = retainedValue
                } else {
                    self.logger.warning("Unexpected Flask response: \(String(data: data, encoding: .utf8) ?? "")")
                }
            } catch {
                self.logger.warning("Failed to parse Flask JSON response: \(error)")
            }
        }

        task.resume()
        _ = semaphore.wait(timeout: .now() + 10) // wait up to 10 seconds
        return retained
    }

    final func execute(_ program: Program, withTimeout timeout: UInt32? = nil, parent: Program? = nil) -> ExecutionOutcome {
        let program = postProcessor?.process(program, for: fuzzer) ?? program
        added = false
        fuzzer.dispatchEvent(fuzzer.events.ProgramGenerated, data: program)

        let execution = fuzzer.execute(program, withTimeout: timeout, purpose: .fuzzing)

        switch execution.outcome {
            case .crashed(let termsig):
                fuzzer.processCrash(program, withSignal: termsig, withStderr: execution.stderr, withStdout: execution.stdout, origin: .local, withExectime: execution.execTime)
                program.contributors.generatedCrashingSample()

            case .succeeded:
                fuzzer.dispatchEvent(fuzzer.events.ValidProgramFound, data: program)
                if !allowExploration{
                    if let parent = parent {
                        let retained = predictedRetained(parent, program)
                        added = retained
                        print(retained)
                        if retained{
                        //var fuzzEngineParams: FuzzEngineParams = FuzzEngineParams()
                        //fuzzEngineParams.executionOutcome = outcome
                            fuzzer.dispatchEvent(fuzzer.events.InterestingProgramFound, data: (program, .local))
                            program.contributors.generatedInterestingSample()
                        }
                    }
                }
                else{
                    var isInteresting = false
                    
                    if let aspects = fuzzer.evaluator.evaluate(execution) {
                        if fuzzer.config.enableInspection {
                            program.comments.add("Program may be interesting due to \(aspects)", at: .footer)
                            program.comments.add("RUNNER ARGS: \(fuzzer.runner.processArguments.joined(separator: " "))", at: .header)
                        }
                        isInteresting = fuzzer.processMaybeInteresting(program, havingAspects: aspects, origin: .local)
                    }
                    
                    if isInteresting {
                        program.contributors.generatedInterestingSample()
                        added=true

                    } else {
                        program.contributors.generatedValidSample()
                    }
                }

            case .failed(_):
                if fuzzer.config.enableDiagnostics {
                    program.comments.add("Stdout:\n" + execution.stdout, at: .footer)
                }
                fuzzer.dispatchEvent(fuzzer.events.InvalidProgramFound, data: program)
                program.contributors.generatedInvalidSample()

            case .timedOut:
                fuzzer.dispatchEvent(fuzzer.events.TimeOutFound, data: program)
                program.contributors.generatedTimeOutSample()
        }

        if fuzzer.config.enableDiagnostics {
            // Ensure deterministic execution behaviour. This can for example help detect and debug REPRL issues.
            ensureDeterministicExecutionOutcomeForDiagnostic(of: program)
        }

        return execution.outcome
    }

    private final func ensureDeterministicExecutionOutcomeForDiagnostic(of program: Program) {
        let execution1 = fuzzer.execute(program, purpose: .other)
        let stdout1 = execution1.stdout, stderr1 = execution1.stderr
        let execution2 = fuzzer.execute(program, purpose: .other)
        switch (execution1.outcome, execution2.outcome) {
        case (.succeeded, .failed(_)),
             (.failed(_), .succeeded):
            let stdout2 = execution2.stdout, stderr2 = execution2.stderr
            logger.warning("""
                Non-deterministic execution detected for program
                \(fuzzer.lifter.lift(program))
                // Stdout of first execution
                \(stdout1)
                // Stderr of first execution
                \(stderr1)
                // Stdout of second execution
                \(stdout2)
                // Stderr of second execution
                \(stderr2)
                """)
        default:
            break
        }
    }
}
