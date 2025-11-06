function test0(a1) {
    for (let i3 = 0; i3 < 2; ++i3) {
        (+a1).toSource;
    }
}
test0({});
test0({});
function test1() {
    var o = { p: 0 };
    var sum = 0;
    for (let i22 = 0; i22 < 1; ++i22) {
        o.p |= 0;
        for (let i30 = 0; i30 < 1; ++i30) {
            o.p = 0;
            if (o.p) {
                ++sum;
            }
            for (let i40 = 0; i40 < 1; ++i40) {
                sum += o.p;
            }
        }
    }
    return sum;
}
test1();
test1();
print("pass");
