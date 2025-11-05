function testBitOrInconvertibleObjectInconvertibleObject() {
    var count1 = 0;
    function toString1() {
        ++count1;
        if (count1 == 95) {
            return {};
        }
        return count1;
    }
    var o1 = { valueOf: undefined, toString: toString1 };
    var count2 = 0;
    function toString2() {
        ++count2;
        if (count2 == 95) {
            return {};
        }
        return count2;
    }
    var o2 = { valueOf: undefined, toString: toString2 };
    var threw = false;
    try {
        for (let i24 = 0; i24 < 100; i24++) {
            var q = o1 | o2;
        }
    } catch(e32) {
        threw = true;
        if (i !== 94) {
            return "expected i === 94, got " + i;
        }
        if (q !== 94) {
            return "expected q === 94, got " + q;
        }
        if (count1 !== 95) {
            return "expected count1 === 95, got " + count1;
        }
        if (count2 !== 94) {
            return "expected count2 === 94, got " + count2;
        }
    }
    if (!threw) {
        return "expected throw with o1 | o2";
    }
    return "pass";
}
try { testBitOrInconvertibleObjectInconvertibleObject(); } catch (e) {}
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
// #FailureMessage Object: 0x7f1578049700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55583fae9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55583fae82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55583fadc546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55583fadbd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5558415f513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5558419c07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5558415523eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x555841500150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5558414fcfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5558412535d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55584124a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55583fcc8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55584124d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55583faed14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55583faf8925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55583fae5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f158e41aac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f158e4ac850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
