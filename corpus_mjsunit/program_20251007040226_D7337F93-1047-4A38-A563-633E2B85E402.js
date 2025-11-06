function assert(a1, a2) {
}
function f3() {
    let accesses = [];
    var obj = "";
    const v9 = String.prototype;
    const v11 = Symbol.search;
    function f12(a13) {
        accesses.push("Symbol(Symbol.search)");
        return /rch/[Symbol.search](a13);
    }
    Object.defineProperty(v9, v11, { value: f12, writable: true, configurable: true });
    accesses == "";
    let result = ("searchme").search(obj);
    accesses == "Symbol(Symbol.search)";
    result === 3;
    const v36 = String.prototype;
    const v37 = Symbol.search;
    Object.defineProperty(v36, v37, { value: undefined, writable: false, configurable: true });
}
f3();
