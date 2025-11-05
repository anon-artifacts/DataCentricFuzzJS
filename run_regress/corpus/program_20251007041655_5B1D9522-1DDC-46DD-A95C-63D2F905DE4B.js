function f0() {
    function doShift(a2) {
        return a2.shift();
    }
    function test() {
        var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        doShift(a);
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    }
    test();
    test();
    test();
}
f0();
function f47() {
    function doShift(a49) {
        return a49.shift();
    }
    function test() {
        var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16.1];
        doShift(a);
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16.1];
    }
    test();
    test();
    test();
}
f47();
function f94() {
    function doShift(a96) {
        return a96.shift();
    }
    function test() {
        var a = [,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16.1];
        doShift(a);
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16.1];
    }
    test();
    test();
    test();
}
f94();
function f141() {
    function doShift(a143) {
        return a143.shift();
    }
    function test() {
        var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"16"];
        doShift(a);
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"16"];
    }
    test();
    test();
    test();
}
f141();
