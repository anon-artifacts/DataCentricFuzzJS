function testFunction() {
    if (arguments.length !== 10) {
        throw "wrong number of arguments expected 10 was " + arguments.length;
    }
    for (const v10 in arguments) {
        if ((arguments[v10] | 0) !== (v10 | 0)) {
            throw (((("argument " + v10) + " expected ") + v10) + " was ") + arguments[v10];
        }
    }
}
function testEmpty() {
    if (arguments.length !== 0) {
        throw "wrong length expected 0 was " + arguments.length;
    }
}
iter = Array.prototype.values;
function makeObject(a42, a43) {
    const v45 = Symbol.iterator;
    const v46 = a42.length;
    let obj = { [v45]: a43, length: v46 };
    for (const v49 in a42) {
        obj[v49] = a42[v49];
    }
    return obj;
}
function otherIterator() {
    function f53() {
        if (this.count < 10) {
            let v59 = this.count;
            const v60 = v59++;
            return { value: v60, done: false };
        }
        return { done: true };
    }
    return { count: 6, next: f53 };
}
count = 0;
function* totalIter() {
    for (let i70 = count; i70 < (count + 5); i70++) {
        yield i70;
    }
    count += 5;
}
function throwingIter() {
    function f83() {
        if (this.count < 10) {
            let v89 = this.count;
            const v90 = v89++;
            return { value: v90, done: false };
        }
        const v95 = new Error("this should have been caught");
        throw v95;
    }
    return { count: 0, next: f83 };
}
object1 = makeObject([1,2,3], iter);
object2 = makeObject([0,1,2,3,4,5,6,7,8,9], iter);
object3 = makeObject([], otherIterator);
object4 = makeObject([], totalIter);
objectThrow = makeObject([0,1,2,3,4,5,6,7,8,9], throwingIter);
for (let i137 = 0; i137 < 3000; i137++) {
    count = 0;
    testFunction(0, ...[1,2,3], ...[4], 5, 6, ...[7,8,9]);
    testFunction(...[0,1], 2, 3, ...[4,5,6,7,8], 9);
    testFunction(...[0,1,2,3,4,5,6,7,8,9]);
    testFunction(0, ...object1, 4, 5, ...[6,7,8,9]);
    testFunction(...object2);
    testFunction(0, ...object1, 4, 5, ...object3);
    testFunction(0, ..."12345", ...object3);
    testEmpty(...[]);
    testFunction(...object4, ...object4);
    testFunction.call(null, 0, ...[1,2,3], 4, 5, 6, 7, 8, 9);
    testFunction.apply(null, [0,...[1,2,3],4,5,6,7,8,9]);
    let failed = false;
    try {
        testFunction(...objectThrow);
        failed = true;
    } catch(e240) {
        if (!e240 instanceof Error) {
            failed = true;
        }
    }
    if (failed) {
        throw "did not throw an exeption even though it should have";
    }
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f5b8eb51700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55dde6de4a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55dde6de32a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55dde6dd7546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55dde6dd6d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55dde88f013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55dde8cbb7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55dde884d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55dde87fb150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55dde87f7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55dde854e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55dde85457e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55dde6fc3cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55dde8548588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55dde6de814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55dde6df3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55dde6de0650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5b9a70dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5b9a79f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 146ms
