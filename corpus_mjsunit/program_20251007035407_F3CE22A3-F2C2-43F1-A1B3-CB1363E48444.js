function assert(a1, a2) {
}
function f3() {
    let flag = "global";
    let flagValue = false;
    let accesses = [];
    let origDescriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, flag);
    const v15 = RegExp.prototype;
    function f16() {
        accesses.push(flag);
        return flagValue;
    }
    Object.defineProperty(v15, flag, { get: f16 });
    let obj = /it/;
    accesses == "";
    let result = ("splitme").split(obj);
    accesses == flag;
    result == "spl,me";
}
f3();
