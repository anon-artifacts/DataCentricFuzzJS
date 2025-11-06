function test0() {
    const v2 = new Array();
    var IntArr1 = v2;
    IntArr1[9] = 9;
    for (let i6 = 10; i6 >= 0; i6--) {
        const t5 = Object.prototype;
        t5[i6] = "d";
    }
    const v15 = Array.prototype;
    Object.defineProperty(v15, "4", { value: "four" });
    return IntArr1.slice().toString();
}
var a = test0();
var b = test0();
print(a == b);
print("d,d,d,d,four,d,d,d,d,9" == b);
