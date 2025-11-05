// Copyright 2019 Google LLC
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

/// The core fuzzer responsible for generating and executing programs.
public class MutationEngine: FuzzEngine {
    // The number of consecutive mutations to apply to a sample.
    private let numConsecutiveMutations: Int
    private let randomMode: Bool = false
    private static var mutatorScores: [String: Double] = [:]   // cumulative reward
    private static var mutatorCounts: [String: Int] = [:]      // number of times used
    private static let mutatorLock = DispatchQueue(label: "MutationEngine.mutatorScoresLock")
    public init(numConsecutiveMutations: Int) {
        self.numConsecutiveMutations = numConsecutiveMutations
        super.init(name: "MutationEngine")
    }
        /// Compute reward for a mutator based on outcome and retention
    func reward(for mutator: Mutator, outcome: ExecutionOutcome, retained: Bool) -> Double {
        let key = mutator.name
        var r = 0.0

        switch outcome {
            case .crashed(_):
                r += 1.0          // max importance
            case .timedOut:
                r -= 0.5          // penalize timeouts
            case .failed(_):
                r -= 0.3          // penalize failed programs
            case .succeeded:
                if retained {
                    r += 0.7      // retained programs are important, but less than crash
                } else {
                    r += 0.2      // successful execution, low reward
                }
        }

        // Ensure reward is bounded between 0 and 1
        return max(0.0, min(r, 1.0))
    }

    func ucbScore(for mutator: Mutator, totalUses: Int) -> Double {
        let key = mutator.name
      
        return MutationEngine.mutatorLock.sync {
            print(MutationEngine.mutatorScores)
            let mean = MutationEngine.mutatorScores[key, default: 0.0] /
                    Double(max(MutationEngine.mutatorCounts[key, default: 1], 1))
            let exploration = sqrt(2.0 * log(Double(max(totalUses, 1))) /
                                Double(max(MutationEngine.mutatorCounts[key, default: 1], 1)))
            print(MutationEngine.mutatorScores)
            return mean + exploration
        }
    }

    /// Select a mutator probabilistically based on UCB scores
func selectMutatorProbabilistically(from mutators: [Mutator]) -> Mutator {
    // Compute total uses across all mutators
    let totalUses = MutationEngine.mutatorLock.sync {
        mutators.reduce(0) { $0 + MutationEngine.mutatorCounts[$1.name, default: 0] }
    }

    // Compute UCB scores for each mutator
    let scores = mutators.map { ucbScore(for: $0, totalUses: totalUses) }

    // Convert UCB scores to probabilities using softmax
    let expScores = scores.map { exp($0) }
    let sumExp = expScores.reduce(0, +)
    let probabilities = expScores.map { $0 / sumExp }

    // Randomly select a mutator based on probabilities
    let r = Double.random(in: 0..<1)
    var cumulative = 0.0
    for (i, p) in probabilities.enumerated() {
        cumulative += p
        if r < cumulative {
            return mutators[i]
        }
    }

    // Fallback (shouldn’t happen)
    return mutators.last!
}

    /// Perform one round of fuzzing.
    ///
    /// High-level fuzzing algorithm:
    ///
    ///     let parent = pickSampleFromCorpus()
    ///     repeat N times:
    ///         let current = mutate(parent)
    ///         execute(current)
    ///         if current produced crashed:
    ///             output current
    ///         elif current resulted in a runtime exception or a time out:
    ///             // do nothing
    ///         elif current produced new, interesting behaviour:
    ///             minimize and add to corpus
    ///         else
    ///             parent = current
    ///
    ///
    /// This ensures that samples will be mutated multiple times as long
    /// as the intermediate results do not cause a runtime exception.


    public override func fuzzOne(_ group: DispatchGroup) {
        //// Run crash-predictor script and return score
       
        var parent = fuzzer.corpus.randomElementForMutating()
        var unprocessed_parent = parent
        parent = prepareForMutating(parent)
        var sortedMutators: WeightedList<Mutator> = fuzzer.mutators
        var mutatorWeights: [Mutator : Int] = [:]
        if randomMode{
            let randomWeights : [Int] = (0...fuzzer.mutators.count).map { _ in Int.random(in: 0...fuzzer.mutators.count) }.sorted(by: <)
            var sortedMutators: WeightedList<IndexingIterator<Array<Mutator>>.Element> = WeightedList(zip(fuzzer.mutators, randomWeights).map {($0, $1)})
            let mutatorWeights: [IndexingIterator<Array<Mutator>>.Element : Int] = Dictionary(uniqueKeysWithValues: zip(fuzzer.mutators, randomWeights))
        }

        // Load Python module
        //let sys = Python.import("sys")
        //sys.path.append("/home/kkganguly/ALFuzz") // directory containing valid_mutation_marker.py
        //let predictor = Python.import("valid_mutation_marker")

        for _ in 0..<numConsecutiveMutations {
            // TODO: factor out code shared with the HybridEngine?
            //var mutator = sortedMutators.randomElement()
            var mutator = selectMutatorProbabilistically(from: Array(fuzzer.mutators))
            print(mutator.name)
            //let (score_parent, features_parent) = predictedCrashScore(parent)
            //if score_parent <= 0.5 {
            //    break
            //}
            let maxAttempts = 10
            var mutatedPrograms: [Program] = []
            for _ in 0..<maxAttempts {
                if let result = mutator.mutate(parent, for: fuzzer) {
                    // Success!
                    result.contributors.formUnion(parent.contributors)
                    mutator.addedInstructions(result.size - parent.size)
                    mutatedPrograms.append(result)
                    break
                    // Continue trying for more successful mutations
                } else {
                    // Try a different mutator.
                    mutator.failedToGenerate()
                    mutator = fuzzer.mutators.randomElement()
                }
            }
            // Use the last successful mutated program, if any
            let mutatedProgram = mutatedPrograms.last
           
            guard let program = mutatedProgram else {
                logger.warning("Could not mutate sample, giving up. Sample:\n\(FuzzILLifter().lift(parent))")
                continue
            }
            let explorationChance = 0.1// 10% chance to allow non-preserving mutation

            if Double.random(in: 0.0...1.0) < explorationChance {
                assert(program !== parent)
                    //var fuzzEngineParams = FuzzEngineParams()
                allowExploration = true
               
                    //fuzzEngineParams.executionOutcome = outcome

                    // Optional logging
                    // fuzzer.dispatchEvent(fuzzer.events.mutationComplete, data: fuzzEngineParams)

                    //if outcome == .succeeded {
                    //    parent = program
                    //}
            }
            else {
                assert(program !== parent)
                allowExploration = false
                // Call Python function directly
                // let startTime = Date()
                // let options = LiftingOptions.includeComments
                // let parent_code = fuzzer.lifter.lift(unprocessed_parent, withOptions: options)
                // let mutated_code = fuzzer.lifter.lift(program, withOptions: options)
                // let retainedPython = predictor.predict(
                //     Python.str(parent_code),
                //     Python.str(mutated_code),
                //     Python.str(unprocessed_parent.id.uuidString),
                //     Python.str(program.id.uuidString),
                //     Python.str("") // optional flags
                // )
                // let retained = Bool(retainedPython) ?? false
                // let elapsed = Date().timeIntervalSince(startTime)
                // print("predictedRetained call took \(elapsed) seconds, retained: \(retained)")
                
                

                    //trigger event to log
                    //fuzzer.dispatchEvent(fuzzer.events.mutationComplete, data: fuzzEngineParams)
                    // Mutate the program further if it succeeded.
                    //if .succeeded == outcome {
                    //    parent = program
                    //}
                    //print("Mutation preserved critical features")
               
            }
            let outcome = execute(program, parent: unprocessed_parent)
            let key = mutator.name
            let r = reward(for: mutator, outcome: outcome, retained: added)
            print(r)
            MutationEngine.mutatorLock.sync {
                MutationEngine.mutatorScores[key, default: 0.0] += r
                MutationEngine.mutatorCounts[key, default: 0] += 1
            }

            if added == true {
                if .succeeded == outcome {
                        parent = program
                }
            }
        }
    }

    /// Pre-processing of programs to facilitate mutations on them.
    private func prepareForMutating(_ program: Program) -> Program {
        let b = fuzzer.makeBuilder()
        b.buildPrefix()
        b.append(program)
        return b.finalize()
    }
}
