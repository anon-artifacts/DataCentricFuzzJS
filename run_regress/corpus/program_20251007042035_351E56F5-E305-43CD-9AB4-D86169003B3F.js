function f0() {
}
var BUGNUMBER = 465377;
var summary = "instanceof relations between Error objects";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    actual = "No Exception";
    expect = "No Exception";
    try {
        var list = ["Error","InternalError","EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"];
        var instances = [];
        for (let i28 = 0; i28 != list.length; ++i28) {
            var name = list[i28];
            var constructor = this[name];
            var tmp = constructor.name;
            if (tmp !== name) {
                throw (("Bad value for " + name) + ".name: ") + uneval(tmp);
            }
            const v49 = new constructor();
            instances[i28] = v49;
        }
        for (let i51 = 0; i51 != instances.length; ++i51) {
            var instance = instances[i51];
            var name = instance.name;
            var constructor = instance.constructor;
            if (constructor !== this[name]) {
                throw (("Bad value of (new " + name) + ").constructor: ") + uneval(tmp);
            }
            var tmp = constructor.name;
            if (tmp !== name) {
                throw "Bad value for constructor.name: " + uneval(tmp);
            }
            if (!(instance instanceof Object)) {
                throw "Bad instanceof Object for " + name;
            }
            if (!(instance instanceof Error)) {
                throw "Bad instanceof Error for " + name;
            }
            if (!(instance instanceof constructor)) {
                throw "Bad instanceof constructor for " + name;
            }
            if (instance instanceof Function) {
                throw "Bad instanceof Function for " + name;
            }
            for (let i100 = 1; i100 != instances.length; ++i100) {
                if ((i51 != i100) && (instance instanceof instances[i100].constructor)) {
                    throw (("Unexpected (new " + name) + ") instanceof ") + instances[i100].name;
                }
            }
        }
        f0("OK");
    } catch(e120) {
        actual = e120 + "";
    }
    f0(expect, actual, summary);
}
