function f1(a2, a3) {
    const v5 = {
        get d() {
            return a2;
        },
    };
    return v5;
}
class C6 extends f1 {
    #f = "getHours";
    d;
}
new C6();
