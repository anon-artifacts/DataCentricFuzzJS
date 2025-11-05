class C1 extends Function {
}
const v4 = new C1("x", "return this.bar + x");
let inst = v4;
let bound = inst.bind({ bar: 3 }, 4);
bound instanceof C1;
bound();
Object.setPrototypeOf(inst, null);
const v19 = { bar: 1 };
Object.getPrototypeOf(bound = Function.prototype.bind.call(inst, v19, 3));
bound();
function toBind() {
}
var boundArgs = [];
for (let i32 = 0; i32 < 5; i32++) {
    boundArgs.push(i32);
    let bound = toBind.bind(undefined, ...boundArgs);
    bound.prototype = {};
    class C43 extends bound {
    }
    let passedArgs = [];
    for (let i47 = 0; i47 < 15; i47++) {
        passedArgs.push(i47);
        const v54 = new C43(...passedArgs);
        Object.getPrototypeOf(v54);
        C43.prototype;
    }
}
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
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
// EXECUTION TIME: 136ms
