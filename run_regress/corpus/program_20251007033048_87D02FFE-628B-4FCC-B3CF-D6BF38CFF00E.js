function f_store(a1, a2, a3, a4) {
    var o = [0.5,1,,3];
    var d;
    if (a1) {
        d = 1.5;
    } else {
        d = o[a4];
    }
    if (a2) {
        d += 1;
    }
    a3[a4] = d;
    return d;
}
var a1 = [0,0,0,{}];
f_store(true, false, a1, 0);
f_store(true, true, a1, 0);
f_store(false, false, a1, 1);
f_store(false, true, a1, 1);
f_store(false, false, a1, 2);
a1[2];
function test_arg(a45) {
    function f46(a47) {
    }
    return f46;
}
function f_call(a49, a50, a51, a52) {
    var o = [0.5,1,,3];
    var d;
    if (a50) {
        d = 1.5;
    } else {
        d = o[a52];
    }
    if (a51) {
        d += 1;
    }
    a49(d);
    return d;
}
f_call(test_arg(1.5), true, false, 0);
f_call(test_arg(2.5), true, true, 0);
f_call(test_arg(1), false, false, 1);
f_call(test_arg(2), false, true, 1);
f_call(test_arg(undefined), false, false, 2);
function f_external(a96, a97, a98, a99, a100) {
    var o = [0.5,1,,3];
    var d;
    if (a96) {
        d = 1.5;
    } else {
        d = o[a100];
    }
    if (a97) {
        d += 1;
    }
    if (a98) {
        d = d | 0;
    }
    a99[d] = 1;
    a99[d];
    return d;
}
const v119 = new Int32Array(10);
var a2 = v119;
f_external(true, false, true, a2, 0);
f_external(true, true, true, a2, 0);
f_external(false, false, true, a2, 1);
f_external(false, true, true, a2, 1);
f_external(false, false, false, a2, 2);
a2[undefined];
