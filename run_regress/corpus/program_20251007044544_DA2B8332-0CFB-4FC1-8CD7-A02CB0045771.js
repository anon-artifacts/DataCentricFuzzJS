function assert(a1, a2) {
}
function f3() {
    let accesses = [];
    let origDescriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, "exec");
    let origExec = origDescriptor.value;
    let obj = /it/;
    const v16 = RegExp.prototype;
    function f18(a19) {
        accesses.push("exec");
        return origExec.call(this, a19);
    }
    Object.defineProperty(v16, "exec", { value: f18 });
    function f26(a27, a28) {
    }
    const t15 = String.prototype;
    t15.substr = f26;
    function f31(a32) {
    }
    const t19 = String.prototype;
    t19.includes = f31;
    accesses == "";
    let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
    accesses == "exec,exec,exec,exec,exec,exec";
    result == "spl,me";
}
f3();
