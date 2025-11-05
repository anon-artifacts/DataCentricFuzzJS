function loop1() {
    while (false) {
    }
}
function loop2() {
    var i = 0;
    while (i++ < 10) {
    }
}
function loop3() {
    for (let i10 = 0; i10 < 10; i10++) {
    }
}
function loop4() {
    var a = 0;
    for (let i20 = 0; i20 < 10; i20++) {
        a++;
    }
}
function loop5() {
    const v30 = new Int32Array(4);
    var a = v30;
    var sum = 0;
    for (let i35 = 0; i35 < a.length; i35++) {
        sum += a[i35];
    }
}
function loop6() {
    const v45 = new Array(4);
    var a = v45;
    var sum = 0;
    for (let i50 = 0; i50 < a.length; i50++) {
        sum += a[i50];
    }
}
function loop7() {
    for (let i59 = 0; i59 < 10; i59++) {
        new Object();
    }
}
function loop8() {
    for (let i69 = 0; i69 < 10; i69++) {
        var x = {};
    }
}
var loops = [loop1,loop2,loop3,loop4,loop5,loop6,loop7,loop8];
for (let i80 = 0; i80 < loops.length; i80++) {
    var f = loops[i80];
    f();
    f();
    f();
}
