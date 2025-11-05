function burn() {
    const v3 = new Array(3);
    var a = v3;
    a[0] = 10;
    a[1] = 15.5;
    a[2] = 20;
    return a;
}
function check(a9) {
    a9[0];
    a9[1];
    a9[2];
}
var b;
for (let i19 = 0; i19 < 3; ++i19) {
    b = burn();
    check(b);
}
b = burn();
check(b);
function loop_test(a30) {
    for (i = 0; i < 3; i++) {
        a30[i] = (i + 1) * 0.5;
    }
}
function check2(a44) {
    a44[0];
    a44[1];
    a44[2];
}
for (let i52 = 0; i52 < 3; ++i52) {
    b = [0,1,2];
    loop_test(b);
    check2(b);
}
b = [0,1,2];
loop_test(b);
check2(b);
