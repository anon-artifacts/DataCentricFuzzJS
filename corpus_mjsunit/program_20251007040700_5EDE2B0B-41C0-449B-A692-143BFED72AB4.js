function testInt32() {
    function f(a2, a3) {
        a2[0] = 1;
        a2[1] = a2[0] + 1;
        a2[2] = a2[1] + a2[0];
        var x = a2[2];
        a2[x] = a2[x - 1] + 1;
        const v19 = a2[x] + a3;
        a2[x + 1] = v19;
        return a2[4];
    }
    var a = [1,2,3,4,5,6,7,8];
    for (let i34 = 0; i34 < 70; i34++) {
        f(a, i34);
        i34 + 4;
    }
}
testInt32();
function testDouble() {
    function f(a46, a47) {
        a46[0] = a47;
        for (let i49 = 1; i49 < 8; i49++) {
            a46[i49] = a46[i49 - 1] + a47;
        }
        return a46[7];
    }
    var a = [0,0,0,0,0,0,0,0];
    for (let i71 = 0; i71 < 50; i71++) {
        f(a, Math.PI + i71) | 0;
        ((Math.PI + i71) * 8) | 0;
    }
}
testDouble();
function testOutOfBounds() {
    function f(a92, a93, a94) {
        a92[a93] = a94;
    }
    var a = [1,2];
    for (let i100 = 0; i100 < 90; i100++) {
        f(a, 1, i100);
    }
    a[1];
    f(a, 2, 40);
    f(a, 100, 50);
    f(a, -1, 3);
    a[2];
    a[100];
    a[-1];
}
testOutOfBounds();
function testClassGuard() {
    function f(a131, a132) {
        a131[1] = a132;
    }
    var a = [1,2,3,4];
    for (let i140 = 0; i140 < 90; i140++) {
        f(a, i140);
    }
    a[1];
    var b = {};
    f(b, 100);
    b[1];
}
testClassGuard();
function testMultipleTypes() {
    function f(a158, a159) {
        a158[1] = a159;
    }
    var a = [1,2,3,4];
    var b = [1.1,-233.2,3.3];
    for (let i173 = 0; i173 < 90; i173++) {
        f(a, i173);
    }
    a[1];
    f(b, 20);
    b[1];
}
testMultipleTypes();
function testNull() {
    function f(a189) {
        a189[0] = null;
    }
    var arr = [,];
    for (let i195 = 0; i195 < 100; i195++) {
        f(arr);
    }
    arr[0];
}
testNull();
function testConstantGcThing() {
    function f(a207, a208) {
        a207[a208] = "abc";
    }
    var arr = ["",""];
    for (let i215 = 0; i215 < 100; i215++) {
        f(arr, 1);
    }
    arr[1];
}
testConstantGcThing();
