function f0() {
}
var obj = { foo: f0 };
function bar(a4) {
    obj.foo.apply(obj, arguments);
    let local;
    function f10() {
    }
    let baz = f10;
}
function test() {
    bar();
}
test();
test();
test();
console.log("PASSED");
