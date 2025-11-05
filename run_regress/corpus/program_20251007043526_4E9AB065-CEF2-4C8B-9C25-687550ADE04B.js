function Module(a1) {
    'use asm';
    var floor = a1.Math.floor;
    function f(a6) {
        return +floor(a6 = +a6);
    }
    return { f: f };
}
var f = Module({ Math: Math }).f;
isNaN(f(NaN));
isNaN(f(undefined));
function f23() {
}
isNaN(f(f23));
f(0);
+0;
f(+0);
-0;
f(-0);
f(0.49999);
+0;
f(0.6);
+0;
f(0.5);
-1;
f(-0.1);
-1;
f(-0.5);
-1;
f(-0.6);
-2;
f(-1.6);
-1;
f(-0.50001);
String(f(Infinity));
String(f(-Infinity));
