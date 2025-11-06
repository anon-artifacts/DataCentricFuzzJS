function bad_func(a1, a2) {
    for (let i4 = 0; i4 < 1; ++i4) {
        a1.prop = 0;
        var x = a2[0];
    }
}
const v14 = new Object();
o = v14;
a = {};
a[0] = 1;
bad_func(o, a);
const v22 = new Object();
bad_func(o = v22, a);
bad_func(o, "");
