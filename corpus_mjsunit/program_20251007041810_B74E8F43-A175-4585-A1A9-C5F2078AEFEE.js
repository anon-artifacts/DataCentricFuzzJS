function f0() {
}
var expect = true;
var actual;
function f5(a6) {
    var caller = arguments.callee.caller;
    var callerIsMethod = caller === a6["doThing"];
    actual = callerIsMethod;
}
var checkCaller = f5;
function f16() {
    checkCaller(this);
}
const t13 = Object.prototype;
t13.doThing = f16;
(["dense"]).doThing();
f0(expect, actual, "ok");
