function f(a1) {
    var x = 1.5;
    var y = 2.5;
    for (let i7 = 1; i7 < 10000; i7 += 2) {
        a1.val = (x + y) + i7;
    }
    return a1;
}
var o = { val: 0 };
for (let i19 = 0; i19 < 10; i19++) {
    f(o);
}
