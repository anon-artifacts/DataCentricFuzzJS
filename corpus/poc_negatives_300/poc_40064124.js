 function f0() {
    }
    const v1 = [f0];
    const v2 = [f0];
    const v3 = [v2,v2];
    function f4(a5, a6) {
        Symbol.search;
        function f9(a10, a11, a12) {
            function f13(a14) {
                return a5;
            }
            for (let v17 = 0; v17 < 100; v17++) {
                Array(53009);
            }
        }
        const v21 = [a5,"function"];
        const o22 = {
            "arguments": v21,
            "type": "function",
        };
        new Worker(f9, o22);
    }
    const v24 = f4(v3);
    f4(v2, v1);
    const v28 = v24 ** 16;
    Math.abs();
    const v32 = Symbol.search;
    try { f4(v3, v32, v24, v28); } catch (e) {}
    // CRASH INFO
    // ==========
    // TERMSIG: 6
    // STDERR:
    // #
    // # Fatal error in ../../src/heap/gc-tracer.cc, line 584
    // # Debug check failed: IsSweepingInProgress().
    // #
    // #
    // #
    // #FailureMessage Object: 0x7ffebbab4a70
    // ==== C stack trace ===============================
    //
    //     v8/v8/out/fuzzbuild/d8(v8::base::debug::StackTrace::StackTrace()+0x22) [0x557e7125a422]
    //     v8/v8/out/fuzzbuild/d8(+0x1047f47) [0x557e71258f47]
    //     v8/v8/out/fuzzbuild/d8(V8_Fatal(char const*, int, char const*, ...)+0x16f) [0x557e7124a64f]
    //     v8/v8/out/fuzzbuild/d8(+0x1038f95) [0x557e71249f95]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::GCTracer::NotifyYoungSweepingCompleted()+0x1c6) [0x557e719a9466]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::GCTracer::NotifyFullSweepingCompleted()+0xba) [0x557e719a8f2a]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::EnsureSweepingCompleted(v8::internal::Heap::SweepingForcedFinalizationMode)+0x594) [0x557e719cb814]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::MakeHeapIterable()+0x3a) [0x557e719da06a]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::MarkCompactCollector::MarkObjectsFromClientHeap(v8::internal::Isolate*)+0x85) [0x557e71a8ac75]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::MarkCompactCollector::MarkLiveObjects()+0x843) [0x557e71a81f13]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::MarkCompactCollector::CollectGarbage()+0x32) [0x557e71a81652]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::MarkCompact()+0x176) [0x557e719cd3c6]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::internal::GarbageCollectionReason, char const*)+0x7ff) [0x557e719c946f]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags)+0x672) [0x557e719c6732]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::FinalizeIncrementalMarkingIfComplete(v8::internal::GarbageCollectionReason)+0x57) [0x557e719db8f7]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::IncrementalMarkingJob::Task::RunInternal()+0x1ea) [0x557e71a65e6a]
    //     v8/v8/out/fuzzbuild/d8(v8::platform::DefaultPlatform::PumpMessageLoop(v8::Isolate*, v8::platform::MessageLoopBehavior)+0x1c4) [0x557e71257874]
    //     v8/v8/out/fuzzbuild/d8(+0xf8e9eb) [0x557e7119f9eb]
    //     v8/v8/out/fuzzbuild/d8(v8::Shell::RunMainIsolate(v8::Isolate*, bool)+0x194) [0x557e7119eed4]
    //     v8/v8/out/fuzzbuild/d8(v8::Shell::RunMain(v8::Isolate*, bool)+0x198) [0x557e7119e848]
    //     v8/v8/out/fuzzbuild/d8(v8::Shell::Main(int, char**)+0xed9) [0x557e711a1649]
    //     /lib/x86_64-linux-gnu/libc.so.6(+0x29d90) [0x7fae1e3cfd90]
    //     /lib/x86_64-linux-gnu/libc.so.6(__libc_start_main+0x80) [0x7fae1e3cfe40]
    //     v8/v8/out/fuzzbuild/d8(_start+0x2a) [0x557e7114802a]
    // Received signal 6
    // STDOUT:
    //
    // ARGS: v8/v8/out/fuzzbuild/d8 --expose-gc --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --minor-mc --shared-string-table --expose-externalize-string --single-threaded
    // CONTRIBUTORS: IntegerGenerator, RegExpGenerator, WellKnownPropertyLoadGenerator, TurbofanVerifyTypeGenerator, BinaryOperationGenerator, CodeGenMutator, CombineMutator, ArrayGenerator, ProbingMutator, ExplorationMutator, NumberComputationGenerator, ObjectLiteralSetterGenerator, ObjectBuilderFunctionGenerator, TrivialFunctionGenerator, ConstructorCallWithSpreadGenerator, SubroutineReturnGenerator, WorkerGenerator
    // EXECUTION TIME: 229ms