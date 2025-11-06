function test1() {
    function f1() {
        return 1;
    }
    var f = f1;
    for (let i5 = 0; i5 < 25; i5++) {
        f.call();
        if (i5 > 20) {
            f = Math.abs;
        }
    }
}
test1();
var origCall = Function.prototype.call;
function test2() {
    function f22() {
        return 1;
    }
    var f = f22;
    var c = 0;
    for (let i28 = 0; i28 < 25; i28++) {
        f.call();
        if (i28 > 20) {
            function f37() {
                c++;
            }
            const t26 = Function.prototype;
            t26.call = f37;
        }
    }
}
test2();
const t31 = Function.prototype;
t31.call = origCall;
function test3() {
    function f44() {
        return 1;
    }
    var f = f44;
    for (let i48 = 0; i48 < 25; i48++) {
        f.call();
        if (i48 > 20) {
            const t42 = Function.prototype;
            t42.call = undefined;
        }
    }
}
try {
    test3();
} catch(e62) {
}
const t51 = Function.prototype;
t51.call = origCall;
function test4() {
    function f65(a66, a67, a68) {
        arguments.length;
        return 1;
    }
    var f = f65;
    for (let i78 = 0; i78 < 25; i78++) {
        f.call(null, 1);
    }
}
test4();
