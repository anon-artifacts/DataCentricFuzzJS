import Foundation

// Data class to hold parameters for different mutators
public class FuzzEngineParams {

    public var executionOutcome: ExecutionOutcome?
    public var fuzzState: String?
    public var uptime: String?
    public var currentTime: String?
    public var totalSamples: Int?
    public var interestingSamples: Int?
    public var lastInterestingSample: String?
    public var validSamples: Int?
    public var corpusSize: Int?
    public var avgCorpusSize: String?
    public var correctnessRate: Double?
    public var overallCorrectnessRate: Double?
    public var timeoutRate: Double?
    public var overallTimeoutRate: Double?
    public var crashesFound: Int?
    public var differentialsFound: Int?
    public var sparkplugExecutions: Int?
    public var maglevExecutions: Int?
    public var turbofanExecutions: Int?
    public var relationsPerformed: Int?
    public var bugOracleUsageRate: Double?
    public var jitUsageRate: Double?
    public var timeoutsHit: Int?
    public var coverage: Double?
    public var avgProgramSize: Double?
    public var avgCorpusProgramSize: Double?
    public var avgProgramExecutionTime: Int?
    public var avgBugOracleExecutionTime: Int?
    public var avgDumpSizeOpt: Double?
    public var avgDumpSizeUnOpt: Double?
    public var connectedNodes: Int?
    public var execsPerSecond: Double?
    public var fuzzerOverhead: Double?
    public var minimizationOverhead: Double?
    public var totalExecs: Int?
    public var mutator:Mutator?
    public var weight:Int?
    
    // Method to convert the parameters to a CSV string
    public func toCSV() -> String {
        let outcomeColumns: [String] = {
            guard let outcome = executionOutcome else {
                return ["false", "false", "false", "false", "false"]
            }
            return [
                outcome == .succeeded ? "true" : "false",
                {
                    if case .crashed(let termsig) = outcome {
                        return "true:\(termsig)"
                    } else {
                        return "false"
                    }
                }(),
                {
                    if case .failed(_) = outcome {
                        return "true"
                    } else {
                        return "false"
                    }
                }(),
                outcome == .timedOut ? "true" : "false",
                //outcome == .differential ? "true" : "false"
            ]
        }()

        let parameterColumnsPart1: [String?] = [
            mutator?.name,
            weight?.description,
            fuzzState,
            uptime?.description,
            currentTime,
            totalSamples?.description,
            interestingSamples?.description,
            lastInterestingSample?.description,
            validSamples?.description,
            corpusSize?.description,
            avgCorpusSize,
            correctnessRate?.description,
            overallCorrectnessRate?.description,
            timeoutRate?.description
        ]

        let parameterColumnsPart2: [String?] = [
            overallTimeoutRate?.description,
            crashesFound?.description,
            differentialsFound?.description,
            sparkplugExecutions?.description,
            maglevExecutions?.description,
            turbofanExecutions?.description,
            relationsPerformed?.description,
            bugOracleUsageRate?.description,
            jitUsageRate?.description,
            timeoutsHit?.description,
            coverage?.description,
            avgProgramSize?.description,
            avgCorpusProgramSize?.description,
            avgProgramExecutionTime?.description,
            avgBugOracleExecutionTime?.description,
            avgDumpSizeOpt?.description,
            avgDumpSizeUnOpt?.description,
            connectedNodes?.description,
            execsPerSecond?.description,
            fuzzerOverhead?.description,
            minimizationOverhead?.description,
            totalExecs?.description
        ]

        let parameterColumns = (parameterColumnsPart1 + parameterColumnsPart2).map { $0 ?? "" }

        return (parameterColumns + outcomeColumns).joined(separator: ",")
    }

    // Method to convert the parameters to a CSV string
    public func toSimpleCSV() -> String {
        let outcomeColumns: [String] = {
            guard let outcome = executionOutcome else {
                return ["0", "0", "0", "0", "0"]
            }
            return [
                outcome == .succeeded ? "1" : "0",
                {
                    if case .crashed(let termsig) = outcome {
                        return "1"
                    } else {
                        return "0"
                    }
                }(),
                {
                    if case .failed(_) = outcome {
                        return "1"
                    } else {
                        return "0"
                    }
                }(),
                outcome == .timedOut ? "1" : "0",
                //outcome == .differential ? "true" : "false"
            ]
        }()

        let parameterColumnsPart1: [String?] = [
            mutator?.name,
            weight?.description,
            fuzzState,
            uptime?.description,
            currentTime,
            totalSamples?.description,
            interestingSamples?.description,
            lastInterestingSample?.description,
            validSamples?.description,
            corpusSize?.description,
            avgCorpusSize,
            correctnessRate?.description,
            overallCorrectnessRate?.description,
            timeoutRate?.description
        ]

        let parameterColumnsPart2: [String?] = [
            overallTimeoutRate?.description,
            crashesFound?.description,
            differentialsFound?.description,
            sparkplugExecutions?.description,
            maglevExecutions?.description,
            turbofanExecutions?.description,
            relationsPerformed?.description,
            bugOracleUsageRate?.description,
            jitUsageRate?.description,
            timeoutsHit?.description,
            coverage?.description,
            avgProgramSize?.description,
            avgCorpusProgramSize?.description,
            avgProgramExecutionTime?.description,
            avgBugOracleExecutionTime?.description,
            avgDumpSizeOpt?.description,
            avgDumpSizeUnOpt?.description,
            connectedNodes?.description,
            execsPerSecond?.description,
            fuzzerOverhead?.description,
            minimizationOverhead?.description,
            totalExecs?.description
        ]

        let parameterColumns = (parameterColumnsPart1 + parameterColumnsPart2).map { $0 ?? "" }

        return (parameterColumns + outcomeColumns).joined(separator: ",")
    }
    
}
