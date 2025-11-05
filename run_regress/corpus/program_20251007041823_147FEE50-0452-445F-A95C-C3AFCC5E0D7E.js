function foo(a1) {
    return a1.f;
}
function bar(a4) {
    var result = 0;
    for (let i8 = 0; i8 < 2000000; ++i8) {
        for (let i15 = 0; i15 < a4.length; ++i15) {
            result += foo(a4[i15]);
        }
    }
    return result;
}
function Foo() {
}
const t14 = Foo.prototype;
t14.f = 42;
const v26 = new Foo();
var result = bar([v26,{ f: 24 }]);
if (result != 132000000) {
    throw "Error bad result: " + result;
}
