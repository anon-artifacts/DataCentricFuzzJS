var c = { x: 2, y: 1 };
function g() {
    var outer = { foo: 1 };
    function f(a9, a10) {
        var n = outer.foo;
        for (let i14 = 0; i14 < 10; i14++) {
            n += a10.x + outer.foo;
        }
        if (a9) {
            return [{ x: 1.5, y: 1 }];
        } else {
            return a10;
        }
    }
    return f;
}
var fun = g();
fun(false, c);
fun(false, c);
fun(false, c);
fun(false, c);
fun(true, c);
