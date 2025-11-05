function fooMaker(a1) {
    var x = a1;
    var x2 = a1 + 1;
    function f6(a7) {
        for (let i9 = 0; i9 < 1000; ++i9) {
            a7 += x + x2;
        }
        return a7;
    }
    return f6;
}
let v17;
try { v17 = fooMaker(42); } catch (e) {}
var foo = v17;
try { noInline(foo); } catch (e) {}
for (let i22 = 0; i22 < 10000; ++i22) {
    let v29;
    try { v29 = foo(5); } catch (e) {}
    var result = v29;
    if (result != (((42 + 43) * 1000) + 5)) {
        throw "Error: bad result: " + result;
    }
}
let v43;
try { v43 = fooMaker(23); } catch (e) {}
let v44;
try { v44 = v43(5); } catch (e) {}
var result = v44;
if (result != (((23 + 24) * 1000) + 5)) {
    throw "Error: bad result: " + result;
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
// #FailureMessage Object: 0x7f5df201d700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560819f38a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560819f372a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560819f2b546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560819f2ad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56081ba4413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56081be0f7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56081b9a13eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56081b94f150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56081b94bfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56081b6a25d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56081b6997e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56081a117cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56081b69c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560819f3c14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560819f47925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560819f34650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5dfdbd9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5dfdc6b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 143ms
