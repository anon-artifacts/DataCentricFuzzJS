function f0(a1, a2, a3, a4, a5, a6, a7) {
    this.f = 42;
}
function f10() {
    const v11 = new f0();
    return v11;
}
for (let i13 = 0; i13 < 10000000; ++i13) {
    const v19 = f10();
    if (v19?.f != 42) {
        "Error: bad result: " + v19;
    }
}
const v25 = {};
