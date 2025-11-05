function f0() {
    return "b";
}
var b = { toString: f0 };
function f4() {
    return "c";
}
var c = { toString: f4 };
function f8() {
    var expected_receiver;
    const v22 = {
        a: 100,
        b_: 200,
        get b() {
            return this.b_;
        },
        set b(a17) {
            this.b_ = a17;
        },
        c_: 300,
        get c() {
            return this.c_;
        },
        set c(a21) {
            this.c_ = a21;
        },
    };
    var obj1 = v22;
    const v31 = {
        boom() {
            let v25 = super.a;
            v25++;
            let v27 = super[b];
            v27++;
            let v29 = super[c];
            v29++;
        },
    };
    var obj2 = v31;
    Object.setPrototypeOf(obj2, obj1);
    expected_receiver = obj2;
    obj2.boom();
    obj2.a;
    obj2[b];
    obj2[c];
    expected_receiver = obj1;
    obj1.a;
    obj1[b];
    obj1[c];
}
f8();
