function f0() {
    var a = 42;
    var b = 23;
    var c = 84;
    var d = 13;
    var e = 90;
    var f = 34;
    var g = 52;
    function f15() {
        return (((((a + b) + c) + d) + e) + f) + g;
    }
    function f22() {
        a = 1;
        b = 2;
        c = 3;
        d = 4;
        e = 5;
        f = 6;
        g = 7;
    }
    return { foo: f15, bar: f22 };
}
var thingy = f0();
for (let i34 = 0; i34 < 10000000; ++i34) {
    var result = thingy.foo();
    if (result != ((((((42 + 23) + 84) + 13) + 90) + 34) + 52)) {
        throw "Error: bad result: " + result;
    }
}
thingy.bar();
var result = thingy.foo();
if (result != ((((((1 + 2) + 3) + 4) + 5) + 6) + 7)) {
    throw "Error: bad result: " + result;
}
