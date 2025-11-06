function assert(a1, a2) {
}
function f3() {
    let accesses = [];
    let origExec = RegExp.prototype.exec;
    let obj = /rch/;
    const v12 = RegExp.prototype;
    function f14(a15) {
        accesses.push("exec");
        return origExec.call(this, a15);
    }
    Object.defineProperty(v12, "exec", { value: f14 });
    accesses == "";
    let result = RegExp.prototype.test.call(obj, "searchme");
    accesses == "exec";
    result === true;
    accesses = [];
    obj = /not/;
    accesses == "";
    result = RegExp.prototype.test.call(obj, "searchme");
    accesses == "exec";
    result === false;
}
f3();
