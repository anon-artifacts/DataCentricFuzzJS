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

/// Corpus for mutation-based fuzzing.
///
/// The corpus contains FuzzIL programs that can be used as input for mutations.
/// Any newly found interesting program is added to the corpus.
/// Programs are evicted from the copus for two reasons:
///
///  - if the corpus grows too large (larger than maxCorpusSize), in which
///    case the oldest programs are removed.
///  - if a program has been mutated often enough (at least
///    minMutationsPerSample times).
///
/// However, once reached, the corpus will never shrink below minCorpusSize again.
/// Further, once initialized, the corpus is guaranteed to always contain at least one program.
public class BasicCorpus: ComponentBase, Collection, Corpus {
    /// The minimum number of samples that should be kept in the corpus.
    private let minSize: Int

    /// The minimum number of times that a sample from the corpus was used
    /// for mutation before it can be discarded from the active set.
    private let minMutationsPerSample: Int

    /// The current set of interesting programs used for mutations.
    private var programs: RingBuffer<Program>
    private var ages: RingBuffer<Int>

    /// Counts the total number of entries in the corpus.
    private var totalEntryCounter = 0

    public init(minSize: Int, maxSize: Int, minMutationsPerSample: Int) {
        // The corpus must never be empty. Other components, such as the ProgramBuilder, rely on this
        assert(minSize >= 1)
        assert(maxSize >= minSize)

        self.minSize = minSize
        self.minMutationsPerSample = minMutationsPerSample

        self.programs = RingBuffer(maxSize: maxSize)
        self.ages = RingBuffer(maxSize: maxSize)

        super.init(name: "Corpus")
    }

    override func initialize() {
        // Schedule a timer to perform cleanup regularly, but only if we're not running as static corpus.
        if !fuzzer.config.staticCorpus {
            fuzzer.timers.scheduleTask(every: 30 * Minutes, cleanup)
        }
    }

    public var size: Int {
        return programs.count
    }

    public var isEmpty: Bool {
        return size == 0
    }

    public var supportsFastStateSynchronization: Bool {
        return true
    }

    public func add(_ program: Program, _ : ProgramAspects) {
        addInternal(program)
    }

    public func addInternal(_ program: Program) {
        if program.size > 0 {
            prepareProgramForInclusion(program, index: totalEntryCounter)
            programs.append(program)
            ages.append(0)

            totalEntryCounter += 1
        }
    }

    /// Returns a random program from this corpus for use in splicing to another program
    public func randomElementForSplicing() -> Program {
        // Dump all program IDs
    
        let idx = Int.random(in: 0..<programs.count)
        let program = programs[idx]
        assert(!program.isEmpty)
        return program
    }
    /*
    /// Returns a random program from this corpus and increases its age by one.
    public func randomElementForMutating() -> Program {
        //let idx = Int.random(in: 0..<programs.count)
        //ages[idx] += 1
        //let program = programs[idx]
        
        //assert(!program.isEmpty)

        //return program
        let selectionProbability = 0.8 // 30% crash-predictor guided, 70% random fallback

        // ⚠️ Only do crash-guided selection some of the time
        if Double.random(in: 0..<1) < selectionProbability {
            let candidates = (0..<programs.count).shuffled().prefix(Swift.min(100, programs.count))
            var idMap = [String: Int]()
            let ids = candidates.map { i in idMap[programs[i].id.uuidString] = i; return programs[i].id.uuidString }
            //let corpusDir = fuzzer.storage.corpusDir
            if let storage = Storage.instance(for: fuzzer) {
                let task = Process()
                let pipe = Pipe()
                task.standardOutput = pipe
                task.executableURL = URL(fileURLWithPath: "/usr/bin/python3.13")
                task.arguments = ["live_crash_prediction_cli.py",
                                "--corpus_dir", storage.corpusPath,
                                "--program_ids", ids.joined(separator: ",")]

                do {
                    try task.run()
                    let out = String(decoding: pipe.fileHandleForReading.readDataToEndOfFile(), as: UTF8.self).trimmingCharacters(in: .whitespacesAndNewlines)
                    let pattern = #"'([^']+)'"#
                    if let match = out.range(of: pattern, options: .regularExpression) {
                        let selectedID = String(out[match]).trimmingCharacters(in: CharacterSet(charactersIn: "'"))
                        if let i = idMap[selectedID] {
                            ages[i] += 1
                            let p = programs[i]
                            assert(!p.isEmpty)
                            return p
                        }
                        else {
                            print("❌ ID \(selectedID) not found")
                        }
                    }
                } catch {
                    logger.error("⚠️ Roulette selection failed: \(error)")
                }
            }
        }
        let fallback = Int.random(in: 0..<programs.count)
        ages[fallback] += 1
        let p = programs[fallback]
        assert(!p.isEmpty)
        return p
    }
    */
    /// Returns a random program from this corpus and increases its age by one.
    public func randomElementForMutating() -> Program {
        let idx = Int.random(in: 0..<programs.count)
        ages[idx] += 1
        let program = programs[idx]
        assert(!program.isEmpty)
        return program
    }

    
    public func allPrograms() -> [Program] {
        return Array(programs)
    }

    public func exportState() throws -> Data {
        let res = try encodeProtobufCorpus(programs)
        logger.info("Successfully serialized \(programs.count) programs")
        return res
    }

    public func importState(_ buffer: Data) throws {
        let newPrograms = try decodeProtobufCorpus(buffer)
        programs.removeAll()
        ages.removeAll()
        newPrograms.forEach(addInternal)
    }

    private func cleanup() {
        assert(!fuzzer.config.staticCorpus)
        var newPrograms = RingBuffer<Program>(maxSize: programs.maxSize)
        var newAges = RingBuffer<Int>(maxSize: ages.maxSize)

        for i in 0..<programs.count {
            let remaining = programs.count - i
            if ages[i] < minMutationsPerSample || remaining <= (minSize - newPrograms.count) {
                newPrograms.append(programs[i])
                newAges.append(ages[i])
            }
        }

        logger.info("Corpus cleanup finished: \(self.programs.count) -> \(newPrograms.count)")
        programs = newPrograms
        ages = newAges
    }

    public var startIndex: Int {
        return programs.startIndex
    }

    public var endIndex: Int {
        return programs.endIndex
    }

    public subscript(index: Int) -> Program {
        return programs[index]
    }

    public func index(after i: Int) -> Int {
        return i + 1
    }
}
