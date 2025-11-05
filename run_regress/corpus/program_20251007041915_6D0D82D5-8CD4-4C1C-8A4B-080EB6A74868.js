function Foo(a1, a2) {
    this.f = a1;
    this.g = a2;
    Object.freeze(this);
}
function f8() {
    var result = 0;
    for (let i12 = 0; i12 < 10000; ++i12) {
        const v20 = new Foo(i12, i12 + 1);
        var o = v20;
        for (let i23 = 0; i23 < 1000; ++i23) {
            result += o.f * o.g;
        }
    }
    if (result != 333333330000000) {
        throw "Error: bad result: " + result;
    }
}
f8();
