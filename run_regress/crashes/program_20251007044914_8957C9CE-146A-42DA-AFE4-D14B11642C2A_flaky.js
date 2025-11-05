[...""];
[];
var str = "ott";
["o","t","t"];
[...str];
const v10 = {};
str[Symbol.iterator] = v10;
var iterator = str[Symbol.iterator]();
const v16 = () => {
    return { value: undefined, done: true };
};
const t11 = iterator.__proto__;
t11.next = v16;
[];
[...str];
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
// #FailureMessage Object: 0x7fa53ec3c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560c6d0fba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560c6d0fa2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560c6d0ee546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560c6d0edd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560c6ec0713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560c6efd27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x560c6eb643eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560c6eb12150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560c6eb0efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x560c6e8655d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x560c6e85c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560c6d2dacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560c6e85f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560c6d0ff14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560c6d10a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560c6d0f7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa54dfffac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa54e091850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 128ms
