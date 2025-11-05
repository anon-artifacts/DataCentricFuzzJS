function foo(a1, a2) {
    for (let i4 = 0; i4 < a2; i4++) {
        a1[i4] = i4;
    }
    var q = 0;
    for (let i12 = 0; i12 < 10; i12++) {
        for (let i19 = 0; i19 < a2; i19++) {
            q += a1[i19];
        }
    }
    return q;
}
var a = foo([], 100);
function basic1(a31) {
    var q = 0;
    for (let i35 = 0; i35 < 4; i35++) {
        q += a31[i35];
    }
    return q;
}
var b = basic1([1,2,3,4]);
ARRAY = [1,2,3,4];
function basic2() {
    var q = 0;
    for (let i60 = 0; i60 < 4; i60++) {
        q += ARRAY[i60];
    }
    return q;
}
var c = basic2();
