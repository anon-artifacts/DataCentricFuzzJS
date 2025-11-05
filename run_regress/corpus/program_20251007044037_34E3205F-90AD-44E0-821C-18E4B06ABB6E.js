const v0 = [];
class C1 {
    constructor() {
        var ieval = eval;
        var offenders = [["...x"],["...rest"],["...rest"],["...rest"]];
        for (const v15 of offenders) {
            function f16() {
                ieval(("function x(" + v15.join(", ")) + ") {}");
            }
            f16();
            function f26() {
                Function.apply(null, v15.concat("return 0;"));
            }
            f26();
        }
        v0[this];
        let v36 = 2107881449;
        const v38 = --v36;
        Math.abs(this);
        const v40 = ~v38;
        Math.sqrt(v40);
        Math.atan2(v36, v40);
        Math.abs(v38);
    }
}
new C1();
new C1();
new C1();
new Int8Array(129);
new Float64Array(2832);
new Float64Array(256);
var b1 = { d: 1 };
var b2 = { d: 2 };
var f1 = { x: 1 };
var f2 = { x: 2 };
f1.b = b1;
f2.x = {};
b2.d = 4.2;
f2.b = b2;
var x = f1.x;
