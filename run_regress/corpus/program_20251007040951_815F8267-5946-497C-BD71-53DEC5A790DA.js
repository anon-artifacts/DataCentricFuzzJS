function TestArrayIteratorPrototypeConfusion() {
    var iter = ([])[Symbol.iterator]();
    try {
        const v7 = Object.getPrototypeOf(iter);
        iter.next.call(v7);
        const v12 = new Error("Call did not throw");
        throw v12;
    } catch(e13) {
        e13 instanceof TypeError;
        e13.message;
    }
}
TestArrayIteratorPrototypeConfusion();
function TestArrayIteratorWrappers() {
    var iter = ([])[Symbol.iterator]();
    const v29 = newGlobal().eval("[5][Symbol.iterator]()");
    iter.next.call(v29);
    const v34 = { value: 5, done: false };
}
if (typeof newGlobal === "function") {
    TestArrayIteratorWrappers();
}
function TestIteratorNextGetLength() {
    var lengthCalledTimes = 0;
    const v44 = Array.prototype;
    const v50 = {
        __proto__: v44,
        get length() {
            lengthCalledTimes += 1;
            const v49 = {
                valueOf() {
                    return 0;
                },
            };
            return v49;
        },
    };
    var array = v50;
    var it = array[Symbol.iterator]();
    it.next();
    it.next();
}
TestIteratorNextGetLength();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
