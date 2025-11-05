console.log("This test checks that toLowerCase and toUpperCase handle certain non-trivial cases correctly.");
String("A𐐀").toLowerCase();
String("a𐐨").toUpperCase();
String("ΚΟΣΜΟΣ ΚΟΣΜΟΣ").toLowerCase();
String("ß").toUpperCase();
String("ŉ").toUpperCase();
String("ǰ").toUpperCase();
String("ﬃ").toUpperCase();
String("FFI").toLowerCase();
String("Ĳ").toLowerCase();
function createExpected() {
    expected = {};
    for (let i35 = 0; i35 < arguments.length; i35++) {
        var s = String.fromCharCode(arguments[i35]);
        expected[s] = true;
    }
    return expected;
}
var expected = createExpected(42893, 613);
expected[String.fromCharCode(42893).toLowerCase()];
expected[String.fromCharCode(613).toUpperCase()];
var expected = createExpected(4295, 11559);
expected[String.fromCharCode(4295).toLowerCase()];
expected[String.fromCharCode(11559).toUpperCase()];
var expected = createExpected(4301, 11565);
expected[String.fromCharCode(11565).toLowerCase()];
expected[String.fromCharCode(4301).toUpperCase()];
var expected = createExpected(11506, 11507);
expected[String.fromCharCode(11506).toLowerCase()];
expected[String.fromCharCode(11507).toUpperCase()];
var expected = createExpected(42898, 42899);
expected[String.fromCharCode(42898).toLowerCase()];
expected[String.fromCharCode(42899).toUpperCase()];
var expected = createExpected(42922, 614);
expected[String.fromCharCode(42922).toLowerCase()];
expected[String.fromCharCode(614).toUpperCase()];
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
// #FailureMessage Object: 0x7f12402b4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x564c646d7a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x564c646d62a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x564c646ca546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x564c646c9d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564c661e313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564c665ae7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564c661403eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564c660ee150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564c660eafd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564c65e415d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564c65e387e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564c648b6cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564c65e3b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x564c646db14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564c646e6925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564c646d3650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f124966bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f12496fd850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 122ms
