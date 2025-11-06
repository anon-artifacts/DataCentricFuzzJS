function loop1() {
    while (true) {
        return;
    }
}
function loop2() {
    var i = 0;
    while (i++ < 10) {
    }
    return i;
}
function loop3() {
    var i = 0;
    for (; i < 10; i++) {
    }
    return i;
}
function loop4() {
    var a = 0;
    for (let i18 = 0; i18 < 10; i18++) {
        a++;
    }
    return a;
}
function loop5() {
    const v28 = new Int32Array(4);
    var a = v28;
    var sum = 0;
    for (let i33 = 0; i33 < a.length; i33++) {
        sum += a[i33];
    }
    return sum;
}
function loop6(a41) {
    for (let i43 = 0; i43 < a41; i43++) {
    }
}
function loop7(a49) {
    for (let i51 = 0; i51 < 10; i51++) {
        a49.toString();
    }
}
function loop8(a59) {
    for (let i61 = 0; i61 < 10; i61++) {
        a59.valueOf();
    }
}
var no_params_loops = [loop1,loop2,loop3,loop4,loop5,loop6];
var params_loops = [loop6,loop7,loop8];
for (let i73 = 0; i73 < no_params_loops.length; i73++) {
    var f = no_params_loops[i73];
    f();
    f();
    f();
    f();
}
for (let i86 = 0; i86 < params_loops.length; i86++) {
    var f = params_loops[i86];
    f(3);
    f(7);
    f(11);
    f(9);
}
