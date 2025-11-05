function f0() {
}
var BUGNUMBER = 226078;
var summary = "Do not Crash @ js_Interpret 3127f864";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function SetLangHead(a12) {
    with (p) {
        for (const v15 in x) {
            const v17 = "TxtH" + v15;
            let v19;
            try { v19 = getElementById(v17); } catch (e) {}
            if (v19 != undefined) {
                try { f0("huh"); } catch (e) {}
            }
        }
    }
}
x = [0,1,2,3];
function f30(a31) {
    let v34;
    try { v34 = uneval(this); } catch (e) {}
    try { f0(v34, a31); } catch (e) {}
    return undefined;
}
p = { getElementById: f30 };
SetLangHead(1);
f0(expect, actual, summary);
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
// #FailureMessage Object: 0x7f52d5fdf700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561dec00ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561dec00d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561dec001546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561dec000d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561dedb1a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561dedee57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561deda773eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561deda25150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561deda21fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561ded7785d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561ded76f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561dec1edcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561ded772588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561dec01214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561dec01d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561dec00a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f52eac4dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f52eacdf850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 137ms
