function write(a1) {
    print(a1);
}
write("Scenario 1");
var sl = "hello";
for (let i9 = 0; i9 < 8; i9++) {
    write(sl.propertyIsEnumerable(i9));
    write(sl.hasOwnProperty(i9));
    write(sl[i9]);
}
write("Scenario 2");
const v25 = new String("hello");
var so = v25;
so[1] = 10;
so[4] = 20;
so[7] = 30;
so.x = 20;
for (let i32 = 0; i32 < 8; i32++) {
    write(so.propertyIsEnumerable(1));
    write(so.hasOwnProperty(i32));
    write(so[i32]);
}
write(so.propertyIsEnumerable("x"));
write(so.hasOwnProperty("x"));
write(so["x"]);
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
// #FailureMessage Object: 0x7f9427d12700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c8abb3da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c8abb3c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c8abb30546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c8abb2fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c8ad64913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c8ada147a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c8ad5a63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c8ad554150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c8ad550fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c8ad2a75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c8ad29e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c8abd1ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c8ad2a1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c8abb4114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c8abb4c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c8abb39650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f94300c7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f9430159850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 147ms
