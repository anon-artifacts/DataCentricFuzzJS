function foo(a1) {
    var y = 0;
    for (let i5 = 0; i5 < 10; i5++) {
        var x = a1[i5];
        z = x.f;
        if (x.h != null) {
            y = x.f.g;
        }
    }
    return y;
}
function foo2(a21) {
    var y = 0;
    for (let i25 = 0; i25 < 10; i25++) {
        var x = a21[i25];
        if (x.f !== undefined) {
            if (x.h != null) {
                y = x.f.g;
            }
        }
    }
    return y;
}
a = [];
for (let i44 = 0; i44 < 10; i44++) {
    a[i44] = { f: null, h: null };
}
for (let i55 = 0; i55 < 10; i55++) {
    const v62 = { g: 0 };
    const t29 = a[i55];
    t29.f = v62;
    const v65 = {};
    const t32 = a[i55];
    t32.h = v65;
}
var q = a[0].h;
const t36 = a[0];
t36.f = null;
const t38 = a[0];
t38.h = null;
foo(a);
foo2(a);
const t40 = a[0];
t40.h = q;
try {
    foo(a);
} catch(e79) {
}
try {
    foo2(a);
} catch(e81) {
}
