function f1(a2) {
    var x = 0;
    var n = 1000000;
    for (let i8 = 0; i8 < n; ++i8) {
        var y = a2;
        y++;
        x += y;
    }
    if (x != (n * 2)) {
        throw "Error: bad result: " + x;
    }
}
f1(true);
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
// #FailureMessage Object: 0x7fb972d93700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55eff9a0da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55eff9a0c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55eff9a00546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55eff99ffd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55effb51913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55effb8e47a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55effb4763eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55effb424150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55effb420fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55effb1775d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55effb16e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55eff9beccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55effb171588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55eff9a1114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55eff9a1c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55eff9a09650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb97e94fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb97e9e1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 152ms
