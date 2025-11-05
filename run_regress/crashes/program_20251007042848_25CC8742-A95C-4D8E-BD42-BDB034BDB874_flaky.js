console.log("Test to ensure correct behaviour of Object.defineProperties");
try {
    Object.defineProperties();
} catch(e5) {
}
try {
    Object.defineProperties("a string");
} catch(e9) {
}
try {
    Object.defineProperties({}, "a string");
} catch(e14) {
}
const v15 = {};
const v18 = { value: "foo", enumerable: true };
const v21 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v15, { property: v18, property2: v21 }));
const v27 = {};
const v29 = { value: "foo" };
const v32 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v27, { property: v29, property2: v32 }));
const v37 = { property: "foo" };
const v40 = { value: "foo", enumerable: true };
const v43 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v37, { property: v40, property2: v43 }));
const v48 = { property: "foo" };
const v51 = { value: "foo", enumerable: false };
const v54 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v48, { property: v51, property2: v54 }));
const v59 = { property: "foo" };
const v61 = { value: "foo" };
const v64 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v59, { property: v61, property2: v64 }));
emptyObject = {};
try {
    const v72 = { value: true };
    function f73() {
    }
    const v75 = { get: f73, writable: true };
    Object.defineProperties(emptyObject, { foo: v72, bar: v75 });
} catch(e78) {
}
"foo" in emptyObject;
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
// #FailureMessage Object: 0x7febd5050700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563d373fca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563d373fb2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563d373ef546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563d373eed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563d38f0813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563d392d37a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563d38e653eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563d38e13150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563d38e0ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563d38b665d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563d38b5d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563d375dbcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563d38b60588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563d3740014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563d3740b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563d373f8650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7febdd405ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7febdd497850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 141ms
