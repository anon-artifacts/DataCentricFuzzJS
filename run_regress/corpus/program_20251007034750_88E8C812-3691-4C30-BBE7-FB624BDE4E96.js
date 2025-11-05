function assert(a1, a2) {
}
function f3() {
    let accesses = [];
    let origDescriptor = Object.getOwnPropertyDescriptor(RegExp, Symbol.species);
    const v12 = Symbol.species;
    function f13() {
        accesses.push(Symbol.species.toString());
        return /it/y;
    }
    Object.defineProperty(RegExp, v12, { value: f13 });
    const v20 = new RegExp();
    let obj = v20;
    let errorStr;
    accesses == "";
    let result = ("splitme").split(obj);
    accesses == "Symbol(Symbol.species)";
    result == "spl,me";
}
f3();
