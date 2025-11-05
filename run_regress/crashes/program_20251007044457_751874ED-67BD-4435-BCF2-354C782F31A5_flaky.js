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
// #FailureMessage Object: 0x7f706f7f4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5568754c1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5568754c02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5568754b4546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5568754b3d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x556876fcd13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5568773987a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x556876f2a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x556876ed8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x556876ed4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556876c2b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556876c227e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5568756a0cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556876c25588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5568754c514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5568754d0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5568754bd650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f707e1b9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f707e24b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 223ms
