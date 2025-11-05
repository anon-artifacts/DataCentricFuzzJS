function f0(a1) {
    isNaN(a1(NaN));
    isNaN(a1("abc"));
    isNaN(a1({}));
    a1(0);
    a1([]);
    isNaN(a1([1,1]));
    a1(1.11);
    function f23() {
        return "1.11";
    }
    a1({ toString: f23 });
    a1(-3.1);
    function f30() {
        return -3.1;
    }
    a1({ toString: f30 });
    a1(-1.1);
    function f38() {
        return "-1.1";
    }
    a1({ valueOf: f38 });
    a1(3.11);
    function f44() {
        return 3.11;
    }
    a1({ valueOf: f44 });
}
([Math.sinh,Math.cosh,Math.tanh,Math.asinh,Math.acosh,Math.atanh]).forEach(f0);
function test_id(a58, a59, a60) {
    a59(a58(a60)) / a60;
}
function f66(a67) {
    test_id(Math.sinh, Math.asinh, a67);
    test_id(Math.sinh, Math.asinh, -a67);
    test_id(Math.cosh, Math.acosh, a67);
    test_id(Math.tanh, Math.atanh, a67);
    test_id(Math.tanh, Math.atanh, -a67);
}
([Math.PI,2,5,1e-05,0.3]).forEach(f66);
function f92(a93) {
    '-Infinity';
    String(1 / a93(-0));
    String(1 / a93(0));
}
([Math.sinh,Math.asinh,Math.tanh,Math.atanh]).forEach(f92);
function f113(a114) {
    '-Infinity';
    String(a114(-Infinity));
    String(a114(Infinity));
    String(a114("-Infinity"));
    String(a114("Infinity"));
}
([Math.sinh,Math.asinh]).forEach(f113);
Math.cosh(-Infinity);
Math.cosh(Infinity);
Math.cosh("-Infinity");
Math.cosh("Infinity");
-Infinity;
Math.atanh(-1);
Math.atanh(1);
function f149(a150) {
    isNaN(Math.atanh(-a150));
    isNaN(Math.atanh(a150));
}
([1.000000000001,Math.PI,10000000,2,Infinity,NaN]).forEach(f149);
Math.sinh(0);
-Infinity;
1 / Math.sinh(-0);
Math.tanh(Infinity);
-1;
Math.tanh(-Infinity);
Math.cosh(0);
Math.cosh(-0);
Math.acosh(1);
String(Math.acosh(Infinity));
function f193(a194) {
    isNaN(Math.acosh(a194));
}
([0.99999999999,0.2,-1000,0,-0]).forEach(f193);
Math.sinh(5);
-74.20321057778875;
Math.sinh(-5);
Math.cosh(0.5);
Math.cosh(5);
Math.cosh(-0.5);
Math.cosh(-5);
Math.tanh(0.5);
Math.tanh(5);
-0.46211715726;
Math.tanh(-0.5);
-0.9999092042625;
Math.tanh(-5);
Math.asinh(0.5);
Math.asinh(5);
-0.4812118250596;
Math.asinh(-0.5);
-2.3124383412727;
Math.asinh(-5);
Math.acosh(1.5);
Math.acosh(5);
Math.acosh(1.1);
Math.acosh(2);
Math.atanh(0.5);
Math.atanh(0.1);
-0.5493061443341;
Math.atanh(-0.5);
-0.1003353477311;
Math.atanh(-0.1);
function f311(a312) {
    Math.asinh(a312);
    -Math.asinh(-a312);
}
([0,1e-50,1e-10,10000000000,1e+50,1e+100,1e+150]).forEach(f311);
function f327(a328) {
    Math.atanh(a328);
    -Math.atanh(-a328);
}
([1 - 1e-16,0,1e-10,1e-50]).forEach(f327);
Math.pow(2, -29);
Math.sinh(Math.pow(2, -29));
-Math.pow(2, -29);
Math.sinh(-Math.pow(2, -29));
Math.sinh(0.5);
-0.5210953054937474;
Math.sinh(-0.5);
1048575 / 2048;
Math.sinh(10 * Math.LN2);
-1048575 / 2048;
Math.sinh(-10 * Math.LN2);
Math.sinh(10);
-11013.232874703393;
Math.sinh(-10);
Math.sinh(32 * Math.LN2);
-2147483647.9999983;
Math.sinh(-32 * Math.LN2);
Math.sinh(100);
-1.3440585709080678e+43;
Math.sinh(-100);
Math.sinh(710.4758600739439);
-1.7976931348621744e+308;
Math.sinh(-710.4758600739439);
Math.sinh(710.475860073944);
-Infinity;
Math.sinh(-710.475860073944);
Math.sinh(1000);
-Infinity;
Math.sinh(-1000);
Math.cosh(Math.pow(2, -56));
Math.cosh(-Math.pow(2, -56));
Math.cosh(Math.LN2 / 4);
Math.cosh(-Math.LN2 / 4);
Math.cosh(10 * Math.LN2);
Math.cosh(-10 * Math.LN2);
Math.cosh(32 * Math.LN2);
Math.cosh(-32 * Math.LN2);
Math.cosh(710.4758600739439);
Math.cosh(-710.4758600739439);
Math.cosh(710.475860073944);
Math.cosh(-710.475860073944);
var two_56 = Math.pow(2, -56);
Math.tanh(two_56);
-two_56;
Math.tanh(-two_56);
Math.tanh(Math.LN2);
-0.6;
Math.tanh(-Math.LN2);
15 / 17;
Math.tanh(2 * Math.LN2);
-15 / 17;
Math.tanh(-2 * Math.LN2);
Math.tanh(100);
-1;
Math.tanh(-100);
Math.tanh(1e+300);
-1;
Math.tanh(-1e+300);
