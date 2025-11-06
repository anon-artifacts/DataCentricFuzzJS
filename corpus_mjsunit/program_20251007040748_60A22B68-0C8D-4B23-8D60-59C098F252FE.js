function foo(a1) {
    var y = 2.5;
    var z = [1,2,y = -a1];
    return a1 + 5;
}
for (let i12 = 0; i12 < 20; i12++) {
    foo(i12);
}
foo(20);
