function foo(a1) {
    return a1.f;
}
function Foo() {
}
const t5 = Foo.prototype;
t5.f = 1;
function Bar() {
}
const t9 = Bar.prototype;
t9.f = 2;
function bar() {
    const v10 = new Foo();
    var o = v10;
    const v12 = new Bar();
    var p = v12;
    var result = 0;
    for (let i17 = 0; i17 < 2000000; ++i17) {
        result += foo(o) + foo(p);
    }
    return result;
}
var result = bar();
if (result != 6000000) {
    throw "Bad result: " + result;
}
