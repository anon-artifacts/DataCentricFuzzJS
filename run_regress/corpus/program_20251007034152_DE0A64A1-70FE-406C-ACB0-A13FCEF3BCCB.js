var expected;
function foo() {
    var a = [0,,{}];
    a.shift();
    a[0];
}
foo();
foo();
foo();
expected = 42;
const t6 = Array.prototype;
t6[0] = 153;
const t12 = Array.prototype;
t12[1] = expected;
foo();
function bar() {
    var a = [0,,{}];
    a.shift();
    a[0];
}
bar();
bar();
bar();
