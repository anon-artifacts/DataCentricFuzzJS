function f0() {
}
if ("entries" in Object) {
    Object.entries.length;
    var o;
    var entries;
    o = { a: 3, b: 2 };
    entries = Object.entries(o);
    [["a",3],["b",2]];
    const v25 = {
        get a() {
            return 17;
        },
        b: 2,
    };
    o = v25;
    entries = Object.entries(o);
    [["a",17],["b",2]];
    function f34() {
        let v37;
        try { v37 = new Error("non-standard __iterator__ called?"); } catch (e) {}
        throw v37;
    }
    o = { __iterator__: f34 };
    entries = Object.entries(o);
    [["__iterator__",o.__iterator__]];
    o = { a: 1, b: 2 };
    delete o.a;
    o.a = 3;
    entries = Object.entries(o);
    [["b",2],["a",3]];
    o = [0,1,2];
    entries = Object.entries(o);
    [["0",0],["1",1],["2",2]];
    o = /./.exec("abc");
    entries = Object.entries(o);
    [["0","a"],["index",0],["input","abc"]];
    o = { a: 1, b: 2, c: 3 };
    delete o.b;
    o.b = 5;
    entries = Object.entries(o);
    [["a",1],["c",3],["b",5]];
    function f() {
    }
    const t44 = f.prototype;
    t44.p = 1;
    const v106 = new f();
    o = v106;
    o.g = 1;
    entries = Object.entries(o);
    [["g",1]];
    const v118 = {
        get a() {
            delete this.b;
            return 1;
        },
        b: 2,
        c: 3,
    };
    var o = v118;
    entries = Object.entries(o);
    [["a",1],["c",3]];
    const v128 = () => {
        let v129;
        try { v129 = Object.entries(); } catch (e) {}
        return v129;
    };
    v128();
    const v132 = () => {
        let v134;
        try { v134 = Object.entries(undefined); } catch (e) {}
        return v134;
    };
    v132();
    const v136 = () => {
        let v138;
        try { v138 = Object.entries(null); } catch (e) {}
        return v138;
    };
    v136();
    Object.entries(1);
    [];
    Object.entries(true);
    [];
    if (typeof Symbol === "function") {
        Object.entries(Symbol("foo"));
        [];
    }
    Object.entries("foo");
    [["0","f"],["1","o"],["2","o"]];
    const v173 = {
        get a() {
            Object.defineProperty(this, "b", { enumerable: false });
            return "A";
        },
        b: "B",
    };
    entries = Object.entries(v173);
    [["a","A"]];
    let ownKeysCallCount = 0;
    let getOwnPropertyDescriptorCalls = [];
    let target = { a: 1, b: 2, c: 3 };
    const v199 = {
        ownKeys() {
            ownKeysCallCount++;
            return ["c","a"];
        },
        getOwnPropertyDescriptor(a195, a196) {
            getOwnPropertyDescriptorCalls.push(a196);
            return Object.getOwnPropertyDescriptor(a195, a196);
        },
    };
    const v200 = new Proxy(target, v199);
    entries = Object.entries(o = v200);
    [["c",3],["a",1]];
    ["c","a"];
}
if (typeof f0 === "function") {
    f0(true, true);
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// v8/out/fuzzbuild/d8(+0xbd5650) [0x55aa86ff8650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fbe42e8aac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fbe42f1c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 131ms
