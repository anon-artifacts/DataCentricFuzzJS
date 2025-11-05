-4294967295 | -4294967295;
function f7(a8, a9, a10, a11) {
    a10--;
    a11--;
    const v30 = {
        [a8](a15, a16, a17) {
            super[-65536] = -4294967295;
            this[-2];
            const v20 = Symbol.iterator;
            const v29 = {
                [v20]() {
                    let v22 = 10;
                    const v28 = {
                        next() {
                            v22--;
                            const v26 = v22 == 0;
                            return { done: v26, value: v22 };
                        },
                    };
                    return v28;
                },
            };
            return -65536;
        },
    };
    v30.h = v30;
    return v30;
}
f7(-65536, 0, 4294967295, 4294967295);
f7(4294967295, -4, 4294967295, -4)[4294967295];
function foo() {
    var i = 0;
    if (i) {
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
        i = 0;
    }
    var j = 200;
}
foo();
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
// EXECUTION TIME: 97ms
