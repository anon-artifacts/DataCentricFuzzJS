function assert(a1, a2) {
}
function f3() {
    let accesses = [];
    var obj = String("");
    const v10 = String.prototype;
    const v12 = Symbol.search;
    function f13(a14) {
        accesses.push("Symbol(Symbol.search)");
        return /rch/[Symbol.search](a14);
    }
    Object.defineProperty(v10, v12, { value: f13, writable: true, configurable: true });
    accesses == "";
    let result = ("searchme").search(obj);
    accesses == "Symbol(Symbol.search)";
    result === 3;
    const v37 = String.prototype;
    const v38 = Symbol.search;
    Object.defineProperty(v37, v38, { value: undefined, writable: false, configurable: true });
}
f3();
