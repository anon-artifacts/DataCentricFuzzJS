var f = "f";
function foo(a3) {
    return a3[f];
}
function bar(a6) {
    var result = 0;
    for (let i10 = 0; i10 < 2000000; ++i10) {
        for (let i17 = 0; i17 < a6.length; ++i17) {
            result += foo(a6[i17]);
        }
    }
    return result;
}
function Foo() {
}
const t15 = Foo.prototype;
t15[f] = 42;
const v29 = { [f]: 24 };
const v30 = new Foo();
var result = bar([v29,v30]);
if (result != 132000000) {
    throw "Error bad result: " + result;
}
