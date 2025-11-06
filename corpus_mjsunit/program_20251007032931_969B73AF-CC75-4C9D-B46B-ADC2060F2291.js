function f0() {
}
var BUGNUMBER = 434837;
var summary = "|this| in accessors in prototype chain of array";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        expect = true;
        actual = null;
        x = ["one","two"];
        function f21() {
            actual = this === x;
        }
        Array.prototype.__defineGetter__("test1", f21);
        x.test1;
    } catch(e30) {
        actual = e30 + "";
    }
    f0(expect, actual, summary + ": x.test1");
    try {
        expect = false;
        actual = null;
        function f39() {
            actual = this === Array.prototype;
        }
        Array.prototype.__defineGetter__("test2", f39);
        x.test2;
    } catch(e49) {
        actual = e49 + "";
    }
    f0(expect, actual, summary + ": x.test2");
    function f56() {
        actual = this === x;
    }
    Array.prototype.__defineGetter__("test3", f56);
    function f64() {
        actual = this === x;
    }
    Array.prototype.__defineSetter__("test3", f64);
    try {
        expect = true;
        actual = null;
        x.test3;
    } catch(e74) {
        actual = e74 + "";
    }
    f0(expect, actual, summary + ": x.test3 (1)");
    try {
        expect = true;
        actual = null;
        x.test3 = 5;
    } catch(e84) {
        actual = e84 + "";
    }
    f0(expect, actual, summary + ": x.test3 = 5");
    try {
        expect = true;
        actual = null;
        x.test3;
    } catch(e94) {
        actual = e94 + "";
    }
    f0(expect, actual, summary + ": x.test3 (2)");
}
