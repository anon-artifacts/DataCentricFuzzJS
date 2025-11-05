function f0() {
}
var BUGNUMBER = 462734;
var summary = "Do not assert: pobj_ == obj2";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var obj;
try {
    function f13() {
        return 42;
    }
    const t13 = Function.prototype;
    t13.prototype = f13;
    obj.prototype = (obj = Object.create(Function())).prototype;
} catch(e21) {
}
f0(expect = "object", actual = typeof obj.prototype, summary);
