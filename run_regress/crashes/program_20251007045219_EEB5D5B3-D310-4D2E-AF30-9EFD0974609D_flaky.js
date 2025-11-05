function fieldhoist1() {
    var object = {};
    var sum = 0;
    for (let i6 = 0; i6 < 3; i6++) {
        sum += object.sum;
        function f14() {
            print("sum");
        }
        Object.defineProperty(object, "sum", { get: f14, configurable: true });
        sum += object.sum;
    }
}
function fieldhoist2() {
    var object = {};
    var sum = 0;
    for (let i29 = 0; i29 < 3; i29++) {
        sum += object.sum;
        function f37() {
            print("x");
        }
        Object.defineProperty(object, "x", { get: f37, configurable: true });
        sum += object.sum;
    }
}
function fieldhoist3(a47) {
    var object = { sum: 1 };
    function f51(a52) {
        print(a52);
    }
    Object.defineProperty(object, a47, { set: f51, configurable: true });
    var sum = 0;
    for (let i62 = 0; i62 < 3; i62++) {
        sum += object.sum;
        object[a47] = object.sum;
        sum += object.sum;
    }
}
function main() {
    fieldhoist1();
    fieldhoist2();
    fieldhoist3("x");
}
main();
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
// #FailureMessage Object: 0x7f66d3c15700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d048267a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d0482662a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d04825a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d048259d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d049d7313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d04a13e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d049cd03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d049c7e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d049c7afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d0499d15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d0499c87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d048446cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d0499cb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d04826b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d048276925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d048263650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f66e1fd6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f66e2068850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
