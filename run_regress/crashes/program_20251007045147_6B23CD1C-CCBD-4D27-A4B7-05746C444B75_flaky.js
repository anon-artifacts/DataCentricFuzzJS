function test0() {
    var GiantPrintArray = [];
    function makeArrayLength() {
        return 100;
    }
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    function f11(a12) {
        function v0(a14) {
            for (let i16 = 0; i16 < 8; i16++) {
                function v2() {
                }
                var v3 = v2();
                GiantPrintArray.push(a12);
                GiantPrintArray.push(v3);
                a14[0] = 0;
            }
        }
        v0(arrObj0);
    }
    var func1 = f11;
    obj0.method0 = func1;
    obj1.method1 = obj0.method0;
    method0 = obj1.method1;
    const v34 = -246;
    arrObj0[arrObj0.length] = v34;
    const v36 = makeArrayLength();
    const t28 = Object.prototype;
    t28.length = v36;
    method0();
    print(GiantPrintArray);
}
test0();
test0();
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
// #FailureMessage Object: 0x7f738603b700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d1ee70ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d1ee70b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d1ee6ff546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d1ee6fed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d1f021813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d1f05e37a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d1f01753eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d1f0123150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d1f011ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d1efe765d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d1efe6d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d1ee8ebcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d1efe70588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d1ee71014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d1ee71b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d1ee708650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f73943fcac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f739448e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 165ms
