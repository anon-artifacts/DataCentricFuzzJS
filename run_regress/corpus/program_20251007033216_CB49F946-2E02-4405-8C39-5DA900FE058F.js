function bar() {
}
const v1 = new bar();
var b = v1;
b.bar = "bar";
function test(a5) {
    const v8 = new Array(10);
    var b = v8;
    for (let i11 = 0; i11 < 10; i11++) {
        const v17 = new bar();
        b[i11] = v17;
    }
    for (let i19 = 0; i19 < 10; i19++) {
        const v25 = a5.foo;
        const t14 = b[i19];
        t14.bar = v25;
    }
}
var a = {};
a.p1 = "";
a.p2 = "";
a.p3 = "";
a.p4 = "";
a.p5 = "";
a.p6 = "";
a.p7 = "";
a.p8 = "";
a.p9 = "";
a.p10 = "";
a.p11 = "";
a.foo = "foo";
for (let i42 = 0; i42 < 5; i42++) {
    test(a);
}
test(a);
test("");
