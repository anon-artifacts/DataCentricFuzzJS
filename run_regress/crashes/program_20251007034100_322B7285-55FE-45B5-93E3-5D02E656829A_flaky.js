try {
    var global = this;
    function __createIterableObject(a3, a4) {
        a4 = a4 || {};
        if ((typeof Symbol !== "function") || !Symbol?.iterator) {
            return {};
        }
        let v15 = a3?.length;
        v15++;
        function f17() {
            let v18;
            try { v18 = a3.shift(); } catch (e) {}
            const v21 = a3?.length <= 0;
            return { value: v18, done: v21 };
        }
        const v24 = a4?.["return"];
        const v26 = a4?.["throw"];
        var iterator = { next: f17, return: v24, throw: v26 };
        var iterable = {};
        function f31() {
            return iterator;
        }
        iterable[Symbol?.iterator] = f31;
        return iterable;
    }
    function test() {
        var result = "";
        const v39 = [1,2,3];
        let v40;
        try { v40 = global.__createIterableObject(v39); } catch (e) {}
        var iterable = v40;
        for (const v42 of iterable) {
            result += v42;
        }
        return result === "123";
    }
    let v45;
    try { v45 = test(); } catch (e) {}
    if (!v45) {
        let v49;
        try { v49 = new Error("Test failed"); } catch (e) {}
        throw v49;
    }
} catch(e50) {
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
// EXECUTION TIME: 151ms
