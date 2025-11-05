var limit = false ? 10000 : 10000000;
function f() {
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    var a6;
    var a7;
    var a8;
    var a9;
    var a10;
    var a11;
    var a12;
    var a13;
    var a14;
    var a15;
    var a16;
    var a17;
    var a18;
    var a19;
    var a20;
    var a21;
    var a22;
    var a23;
    var a24;
    var a25;
    var a26;
    var a27;
    var a28;
    var a29;
    var a30;
    var a31;
    var a32;
    var a33;
    var a34;
    var a35;
    var a36;
    var a37;
    var a38;
    var a39;
    var a40;
    var a41;
    var a42;
    var a43;
    var a44;
    var a45;
    var a46;
    var a47;
    var a48;
    var a49;
    var a50;
    var a51;
    var a52;
    var a53;
    var a54;
    var a55;
    var a56;
    var a57;
    var a58;
    var a59;
    var a60;
    var a61;
    var a62;
    var a63;
    var a64;
    for ((() => {
            a1 = 0;
        })();
        a1 < limit;
        a1++) {
        a2 = 23;
    }
}
f();
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
// #FailureMessage Object: 0x7fe3b9cc7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x565083ff9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x565083ff82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x565083fec546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x565083febd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x565085b0513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x565085ed07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x565085a623eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x565085a10150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x565085a0cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5650857635d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56508575a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5650841d8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56508575d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x565083ffd14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x565084008925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x565083ff5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe3c207cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe3c210e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 112ms
