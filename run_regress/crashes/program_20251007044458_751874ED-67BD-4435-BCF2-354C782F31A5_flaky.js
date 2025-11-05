function test0() {
    function leaf() {
        return 100;
    }
    var obj1 = {};
    var arrObj0 = {};
    function f7(a8, a9, a10) {
        var __loopvar16 = 0;
        while (1 && (__loopvar16 < 3)) {
            __loopvar16++;
            let v18 = obj1.prop0;
            const v19 = --v18;
            a9[((leaf.call(a10) % (0 ? 2147483647 : -7335274600096260096)) >= 0 ? leaf.call(a10) % (0 ? 2147483647 : -7335274600096260096) : 0) & 15] = v19;
            obj1.length *= a9[16];
        }
    }
    var func0 = f7;
    const v44 = new Uint16Array(256);
    var ui16 = v44;
    var intary = [4,66,767,-100,0,1213,34,42,55,-123,567,77,-234,88,11,-66];
    var __loopvar1 = 0;
    for (const v70 in ui16) {
        if (v70.indexOf("method") != -1) {
            continue;
        }
        if (__loopvar1++ > 3) {
            break;
        }
        obj1.prop0 = 1;
        var __loopvar3 = 0;
        do {
            __loopvar3++;
            obj1.prop0 = func0.call(obj1, 1, intary, 1);
        } while (1 && (__loopvar3 < 3))
        let v90 = arrObj0.length;
        intary[18] = v90--;
    }
}
test0();
test0();
test0();
runningJITtedCode = true;
test0();
test0();
test0();
print("pass");
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
// #FailureMessage Object: 0x7f3771fe9700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56485b165a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56485b1642a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56485b158546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56485b157d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56485cc7113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56485d03c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56485cbce3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56485cb7c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56485cb78fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56485c8cf5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56485c8c67e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56485b344cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56485c8c9588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56485b16914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56485b174925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56485b161650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f37832c3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f3783355850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 200ms
