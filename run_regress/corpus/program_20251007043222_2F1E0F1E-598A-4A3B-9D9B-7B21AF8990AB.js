print("test1: nested setter without getter");
function top1() {
    const v5 = new Object();
    var xx = v5;
    function f8(a9) {
        print("in nested setter1");
        this.val = 10;
    }
    Object.defineProperty(xx, "yy", { set: f8 });
    function f16() {
        xx.yy = 20;
        print(xx.yy);
    }
    var z = f16;
    return z;
}
var foo = top1();
foo();
print("test2: nested setter and setter");
function top2() {
    const v28 = new Object();
    var xx = v28;
    function f31() {
        return this;
    }
    function f33(a34) {
        print("in nested setter2");
        this.val = 11;
    }
    Object.defineProperty(xx, "yy", { get: f31, set: f33 });
    function f41() {
        xx.yy = 20;
        print(xx.yy);
        print(xx.yy.val);
    }
    var z = f41;
    return z;
}
var foo2 = top2();
foo2();
print("test3: nested setter and setter from this");
function top3() {
    function f57() {
        return this;
    }
    function f59(a60) {
        print("in nested setter3");
        this.val = 12;
    }
    Object.defineProperty(this, "yy", { get: f57, set: f59 });
    function f68() {
        yy = 20;
        print(yy);
        print(yy.val);
    }
    var z = f68;
    return z;
}
var foo3 = top3();
foo3();
print("test4: closure and with");
const v82 = new Object();
var withObj = v82;
function f85() {
    return this;
}
function f87(a88) {
    print("in nested setter3");
    this.val = 13;
}
Object.defineProperty(withObj, "tt", { get: f85, set: f87 });
function top4(a96) {
    with (a96) {
        function f99() {
            return this;
        }
        function f101(a102) {
            print("in nested setter3");
            this.val = 14;
        }
        Object.defineProperty(this, "tt", { get: f99, set: f101 });
        function f109() {
            tt = 20;
            print(tt);
            print(tt.val);
        }
        var z = f109;
        return z;
    }
}
var foo4 = top4(withObj);
foo4();
