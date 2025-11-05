[2147483648,-1,-43149,8,9007199254740992,268435439];
    function f3(a4, a5) {
        const v8 = new Int8Array(16);
        "g" + "s foo s bar s foo s bar s";
        const v12 = typeof a5;
        const v14 = v12 === "object";
        const v15 = ("2").padEnd(a5);
        let v16;
        try { v16 = v8.find(f3, v15); } catch (e) {}
        v16 >>= Int8Array;
        if (v14) {
        }
        return v12;
    }
    for (let v20 = 0; v20 < 25; v20++) {
        f3();
    }
    // CRASH INFO
    // ==========
    // INSTANCE TAG: 3614307c979a6d37d452ae82b38ff361e64a2089
    // TERMSIG: 6
    // STDERR:
    // #
    // # Fatal error in ../../src/heap/scavenger-inl.h, line 421
    // # Debug check failed: Heap::InFromPage(object).
    // #
    // #
    // #
    // #FailureMessage Object: 0x7fff1c062530
    // ==== C stack trace ===============================
    //
    //     v8/v8/out/fuzzbuild/d8(v8::base::debug::StackTrace::StackTrace()+0x22) [0x587cd60fbe62]
    //     v8/v8/out/fuzzbuild/d8(+0x1055987) [0x587cd60fa987]
    //     v8/v8/out/fuzzbuild/d8(V8_Fatal(char const*, int, char const*, ...)+0x16f) [0x587cd60ec1bf]
    //     v8/v8/out/fuzzbuild/d8(+0x1046b05) [0x587cd60ebb05]
    //     v8/v8/out/fuzzbuild/d8(heap::base::SlotCallbackResult v8::internal::Scavenger::ScavengeObject<v8::internal::FullHeapObjectSlot>(v8::internal::FullHeapObjectSlot, v8::internal::HeapObject)+0x19a) [0x587cd6a3c9aa]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::RootScavengeVisitor::VisitRootPointers(v8::internal::Root, char const*, v8::internal::FullObjectSlot, v8::internal::FullObjectSlot)+0x3b) [0x587cd6a3c7cb]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::CommonFrame::IterateTurbofanOptimizedFrame(v8::internal::RootVisitor*) const+0x1cc) [0x587cd66a9c1c]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Isolate::Iterate(v8::internal::RootVisitor*, v8::internal::ThreadLocalTop*)+0x35d) [0x587cd66c817d]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::IterateRoots(v8::internal::RootVisitor*, v8::base::EnumSet<v8::internal::SkipRoot, int>, v8::internal::Heap::IterateRootsMode)+0x21c) [0x587cd688392c]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::ScavengerCollector::CollectGarbage()+0xaac) [0x587cd6a3769c]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::Scavenge()+0x398) [0x587cd68716c8]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::internal::GarbageCollectionReason, char const*)+0x83a) [0x587cd686cf2a]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags)+0x672) [0x587cd68694f2]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment)+0x14a) [0x587cd682432a]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment)+0x42) [0x587cd6824412]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin)+0xd3) [0x587cd67d19a3]
    //     v8/v8/out/fuzzbuild/d8(+0x24d3be7) [0x587cd7578be7]
    //     v8/v8/out/fuzzbuild/d8(v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*)+0xf8) [0x587cd7578538]
    //     v8/v8/out/fuzzbuild/d8(+0x3e29cf6) [0x587cd8ececf6]
    // Received signal 6
    // STDOUT:
    //
    // ARGS: v8/v8/out/fuzzbuild/d8 --expose-gc --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --harmony-struct --shared-string-table --no-turbofan --expose-externalize-string --thread-pool-size=3
    // EXECUTION TIME: 100ms