/z(x)(x)(x)\2/mgds;
const v1 = /(?<a>)/vygs;
/O3a\sGa$/vygdi;
class C3 {
    o(a5) {
        class C6 {
            f;
        }
    }
}
const v7 = [4096,9007199254740992];
[v7,v1,C3,v7,[13,1073741825,-54185,-11,-4294967296,-4096,-16934,2120604500,3,-12]];
const v10 = {};
const v13 = {
    mSloppy() {
        super[v10] = 15;
        return v10;
    },
};
try {
    for (let v14 = 0; v14 < 5; v14++) {
        v14.y();
    }
} catch(e16) {
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
// #FailureMessage Object: 0x7fbc2af0c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d72c1dda82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d72c1dc2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d72c1d0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d72c1cfd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d72dce913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d72e0b47a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d72dc463eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d72dbf4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d72dbf0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d72d9475d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d72d93e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d72c3bccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d72d941588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d72c1e114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d72c1ec925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d72c1d9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fbc33ac2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fbc33b54850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 137ms
