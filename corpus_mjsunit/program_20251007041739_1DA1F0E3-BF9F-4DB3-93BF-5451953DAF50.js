function f0() {
    let str = ("a").repeat(10000000);
    const v7 = new Array(2000);
    let arr = v7;
    for (let i10 = 0; i10 < 200; ++i10) {
        arr[i10 * 10] = str;
    }
    let v19;
    try { v19 = arr.join(":"); } catch (e) {}
    let res = v19;
}
f0();
