function f0() {
}
var BUGNUMBER = 1268138;
var summary = "Internal usage of split should not be affected by prototpe change";
f0((BUGNUMBER + ": ") + summary);
function test() {
    var t = ((24 * 60) * 60) * 1000;
    var possibleAnswer = ["1.1.1970","2.1.1970","3.1.1970"];
    function f23(a24, a25) {
        return [""];
    }
    const t11 = String.prototype;
    t11[Symbol.split] = f23;
    var s = Intl.DateTimeFormat("de", {}).format(t);
    possibleAnswer.includes(s);
    function f40(a41, a42) {
        return ["x-foo"];
    }
    const t18 = String.prototype;
    t18[Symbol.split] = f40;
    s = Intl.DateTimeFormat("de", {}).format(t);
    possibleAnswer.includes(s);
    function f53(a54, a55) {
        return ["de-u-co"];
    }
    const t25 = String.prototype;
    t25[Symbol.split] = f53;
    s = Intl.DateTimeFormat("de", {}).format(t);
    possibleAnswer.includes(s);
    function f66(a67, a68) {
        return ["en-US"];
    }
    const t32 = String.prototype;
    t32[Symbol.split] = f66;
    s = Intl.DateTimeFormat("de", {}).format(t);
    possibleAnswer.includes(s);
}
if (this.hasOwnProperty("Intl")) {
    test();
}
f0(0, 0, "ok");
