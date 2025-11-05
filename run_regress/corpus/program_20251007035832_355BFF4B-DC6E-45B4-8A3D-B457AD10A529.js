function f0() {
}
const v1 = new f0();
v1.bar = "bar";
function f3(a4) {
    const v7 = Array(10);
    for (let i9 = 0; i9 < 10; i9++) {
        const v15 = new f0();
        v7[i9] = v15;
    }
    for (let i17 = 0; i17 < 10; i17++) {
        const v23 = a4.foo;
        const t12 = v7[i17];
        t12.bar = v23;
    }
}
const v25 = {};
v25.p1 = "";
v25.p2 = "";
v25.p4 = "";
v25.p8 = "";
v25.foo = "foo";
for (let i32 = 0; i32 < 5; i32++) {
    f3(v25);
}
