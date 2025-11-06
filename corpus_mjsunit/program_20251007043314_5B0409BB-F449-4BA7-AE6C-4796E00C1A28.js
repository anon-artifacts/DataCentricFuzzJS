function foo(a1, a2, a3, a4, a5, a6, a7) {
    var a = a1;
    var b = a2;
    var c = a3;
    var d = a4;
    var e = a5;
    var f = a6;
    var g = a7;
    function f15() {
        return (((((a + b) + c) + d) + e) + f) + g;
    }
    return { foo: f15 };
}
try { noInline(foo); } catch (e) {}
let v32;
try { v32 = foo(42, 23, 84, 13, 90, 34, 52); } catch (e) {}
var thingy = v32;
const v34 = thingy?.foo;
try { noInline(v34); } catch (e) {}
for (let i37 = 0; i37 < 10000000; ++i37) {
    let v43;
    try { v43 = thingy.foo(); } catch (e) {}
    var result = v43;
    if (result != ((((((42 + 23) + 84) + 13) + 90) + 34) + 52)) {
        throw "Error: bad result: " + result;
    }
}
let v68;
try { v68 = foo(1, 2, 3, 4, 5, 6, 7); } catch (e) {}
let v69;
try { v69 = v68.foo(); } catch (e) {}
var result = v69;
if (result != ((((((1 + 2) + 3) + 4) + 5) + 6) + 7)) {
    throw "Error: bad result: " + result;
}
