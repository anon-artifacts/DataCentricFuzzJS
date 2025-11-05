function f1() {
    const t1 = Array(Array);
    t1[11] = 2;
    return 2;
}
f1();
f1();
const t5 = Array.prototype;
t5[-2] = 0;
f1();
