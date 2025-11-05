const v0 = {};
var p = { a: v0 };
var flag = 0;
var data = [];
var copy = [];
const v10 = {};
function f11() {
    if (flag == 2) {
        data[0] = { x: "I changed" };
    }
    if (flag == 1) {
        flag = 2;
    }
    return { a: 1, b: 2 };
}
const v23 = new Proxy(v10, { getPrototypeOf: f11 });
var z = v23;
p.__proto__ = z;
function reset() {
    flag = 0;
    data = [1.1,2.2,3.3];
    copy = [];
}
function runTest(a33) {
    reset();
    for (let i36 = 0; i36 < 65536; i36++) {
        a33();
    }
    flag = 1;
    try { a33(); } catch (e) {}
    if (copy?.[0]?.x != "I changed") {
    }
}
function testWithoutFTL() {
    function f() {
        data[0] = 2.2;
        for (const v52 in p) {
            copy[0] = data?.[0];
            copy[1] = data?.[1];
            copy[2] = data?.[2];
        }
    }
    try { noFTL(f); } catch (e) {}
    try { runTest(f); } catch (e) {}
}
function testWithFTL() {
    function f() {
        data[0] = 2.2;
        for (const v62 in p) {
            copy[0] = data[0];
            copy[1] = data[1];
            copy[2] = data[2];
        }
    }
    try { runTest(f); } catch (e) {}
}
try { testWithoutFTL(); } catch (e) {}
try { testWithFTL(); } catch (e) {}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_0 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f87d2754700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x562de62cea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x562de62cd2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x562de62c1546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x562de62c0d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x562de7dda13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x562de81a57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x562de7d373eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x562de7ce5150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x562de7ce1fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x562de7a385d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x562de7a2f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x562de64adcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x562de7a32588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x562de62d214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x562de62dd925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x562de62ca650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f87dd30eac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f87dd3a0850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: FixupMutator
// EXECUTION TIME: 205ms
