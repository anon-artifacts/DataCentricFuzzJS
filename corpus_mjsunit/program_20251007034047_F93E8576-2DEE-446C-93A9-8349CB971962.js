function id(a1) {
    return a1;
}
function foo() {
    var sum = 0;
    var r = id(foo);
    for (let i9 = 0; i9 < 100000; i9++) {
        sum += i9;
    }
    return foo == r;
}
var x = foo();
function bar() {
    var sum = 0;
    for (let i23 = 0; i23 < 90000; i23++) {
        sum += i23;
    }
    return bar;
}
var x = bar();
typeof x;
