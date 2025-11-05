var aaa;
function f() {
    function g(a4) {
        if (a4) {
            aaa = 22;
        }
    }
    g(10);
    function h() {
        aaa = 22;
    }
    for (let i11 = 0; i11 < 70; i11++) {
        h();
    }
}
f();
x = 0;
function setX(a23) {
    x = a23;
}
for (let i26 = 0; i26 < 70; i26++) {
    setX(i26);
}
y = 3.14;
y = true;
y = [];
function setY(a42) {
    y = a42;
}
for (let i45 = 0; i45 < 70; i45++) {
    setY([1]);
}
setY([1,2,3]);
y.length;
var z = 10;
function testNonWritable() {
    function g() {
        z = 11;
    }
    for (let i68 = 0; i68 < 70; i68++) {
        g();
    }
    Object.defineProperty(this, "z", { value: 1234, writable: false });
    g();
}
testNonWritable();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// 
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 138ms
