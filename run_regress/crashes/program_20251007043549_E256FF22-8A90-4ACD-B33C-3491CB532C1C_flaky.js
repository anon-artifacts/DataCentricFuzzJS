function def_prop_array() {
    var array = [];
    function f4() {
        print("array[0]");
    }
    Object.defineProperty(array, 0, { get: f4 });
    var sum = 0;
    for (let i14 = 0; i14 < 3; i14++) {
        sum += array[0];
    }
}
function def_prop_object() {
    var object = {};
    function f25() {
        print("sum");
    }
    Object.defineProperty(object, "sum", { get: f25 });
    var sum = 0;
    for (let i35 = 0; i35 < 3; i35++) {
        sum += object.sum;
    }
}
function def_props_array() {
    var array = [];
    function f45() {
        print("array[0]");
    }
    const v49 = { get: f45 };
    function f50() {
        print("array[1]");
    }
    const v54 = { get: f50 };
    Object.defineProperties(array, { 0: v49, 1: v54 });
    var sum = 0;
    for (let i61 = 0; i61 < 3; i61++) {
        sum += array[0];
    }
}
function def_props_object() {
    var object = {};
    function f71() {
        print("sum1");
    }
    const v75 = { get: f71 };
    function f76() {
        print("sum2");
    }
    const v80 = { get: f76 };
    Object.defineProperties(object, { sum1: v75, sum2: v80 });
    var sum = 0;
    for (let i87 = 0; i87 < 3; i87++) {
        sum += object.sum1;
    }
}
function def_props_number() {
    function diag() {
        print("Type: " + typeof this);
        print("  Is Object: " + (this instanceof Object));
        print("  Is Number: " + (this instanceof Number));
    }
    const v115 = Number.prototype;
    Object.defineProperty(v115, "foo", { set: diag });
    const v120 = Number.prototype;
    Object.defineProperty(v120, "42", { set: diag });
    function f124(a125) {
        print("** Testing property 'foo'");
        a125.foo = {};
        print("");
        print("** Testing property 42");
        a125[42] = {};
        print("");
    }
    var runTests = f124;
    var i = 3;
    runTests(i);
    var d = 3.14;
    runTests(d);
}
function main() {
    def_prop_array();
    def_prop_object();
    def_props_array();
    def_props_object();
    def_props_number();
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
// #FailureMessage Object: 0x7fb475378700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561d8325ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561d8325d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561d83251546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561d83250d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561d84d6a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561d851357a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561d84cc73eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561d84c75150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561d84c71fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561d849c85d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561d849bf7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561d8343dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561d849c2588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561d8326214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561d8326d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561d8325a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb481735ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb4817c7850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
