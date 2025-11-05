function f() {
    try {
        throw 0;
    } catch(e2) {
        try {
            var x = { a: "hest" };
            function f6(a7) {
                return x.a;
            }
            x.m = f6;
        } catch(e9) {
        }
    }
    return x;
}
var o = f();
o.m();
o.m();
o.m();
o.m();
var global = "horse";
const v24 = {
    get global() {
        return global;
    },
};
var p = v24;
p.global;
