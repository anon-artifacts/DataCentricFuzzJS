var global = this;
function __createIterableObject(a3, a4) {
    a4 = a4 || {};
    if ((typeof Symbol !== "function") || !Symbol.iterator) {
        return {};
    }
    let v15 = a3.length;
    v15++;
    function f17() {
        const v18 = a3.shift();
        const v21 = a3.length <= 0;
        return { value: v18, done: v21 };
    }
    const v24 = a4["return"];
    const v26 = a4["throw"];
    var iterator = { next: f17, return: v24, throw: v26 };
    var iterable = {};
    function f31() {
        return iterator;
    }
    iterable[Symbol.iterator] = f31;
    return iterable;
}
function test() {
    var closed = false;
    const v39 = [1,2,3];
    function f40() {
        closed = true;
        return {};
    }
    var iter = global.__createIterableObject(v39, { return: f40 });
    try {
        new WeakMap(iter);
    } catch(e48) {
    }
    return closed;
}
if (!test()) {
    const v53 = new Error("Test failed");
    throw v53;
}
