function f0() {
}
function IsNegZero(a2) {
    return (a2 === 0) && ((1 / a2) === -Infinity);
}
function test1() {
    f0(g / 5);
}
var g = 5;
test1();
test1();
g = 1;
test1();
g = -0;
test1();
function test2() {
    for (let i27 = 0; i27 < (g / 5); i27++) {
    }
    try { f0(i); } catch (e) {}
}
g = 5;
try { test2(); } catch (e) {}
try { test2(); } catch (e) {}
g = 10;
try { test2(); } catch (e) {}
g = 11;
try { test2(); } catch (e) {}
g = -0;
try { test2(); } catch (e) {}
function test3() {
    var v = g / 4;
    f0(v / d);
}
var d = -4;
g = 16;
test3();
test3();
g = 0;
test3();
g = 16;
d = 0;
test3();
g = 15;
d = 3;
test3();
g = -12;
test3();
