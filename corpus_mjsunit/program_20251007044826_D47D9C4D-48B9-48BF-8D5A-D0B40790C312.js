function test1() {
    var a = [{},false,true,0];
    var res = 0;
    for (let i10 = 0; i10 < 100; i10++) {
        if (a[i10 % 4] === false) {
            res += 1;
        }
    }
    res = 0;
    for (let i25 = 0; i25 < 100; i25++) {
        if (true !== a[i25 % 4]) {
            res += 1;
        }
    }
    res = 0;
    for (let i40 = 0; i40 < 100; i40++) {
        res += a[i40 % 4] === true;
    }
    res = 0;
    for (let i54 = 0; i54 < 100; i54++) {
        res += false !== a[i54 % 4];
    }
}
test1();
var TRUE = true;
var FALSE = false;
function test2() {
    var a = [{},false,true,0];
    var res = 0;
    for (let i81 = 0; i81 < 100; i81++) {
        if (a[i81 % 4] === FALSE) {
            res += 1;
        }
    }
    res = 0;
    for (let i95 = 0; i95 < 100; i95++) {
        if (TRUE !== a[i95 % 4]) {
            res += 1;
        }
    }
    res = 0;
    for (let i109 = 0; i109 < 100; i109++) {
        res += a[i109 % 4] === TRUE;
    }
    res = 0;
    for (let i122 = 0; i122 < 100; i122++) {
        res += FALSE !== a[i122 % 4];
    }
}
test2();
