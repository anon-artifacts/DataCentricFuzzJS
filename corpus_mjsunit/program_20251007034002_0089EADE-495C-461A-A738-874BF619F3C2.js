function X() {
    this.x = 1;
}
function Y(a4) {
    this[a4] = 2;
}
function Z() {
    this.z = 3;
}
const v10 = new Z();
Y.prototype = v10;
const v12 = new Y("y");
X.prototype = v12;
const v13 = new X();
var x = v13;
const v16 = new Y("yy");
var y = v16;
const v18 = new Z();
var z = v18;
with (x) {
    print("x.x = " + x);
    print("x.y = " + y);
    print("x.z = " + z);
    ++z;
    print("x.z = " + z);
    with (y) {
        print("x.x = " + x);
        print("x.y = " + y);
        print("x.z = " + z);
    }
    const v44 = new Object();
    y = v44;
    y.m = 7;
    with (y) {
        print("x.y.m = " + m);
    }
    y = undefined;
    if (y == undefined) {
        print("OK: y in with scope is undefined");
    }
    const t40 = Z.prototype;
    t40.zz = 1;
    print("x.zz = " + zz);
    if ((x = undefined) == undefined) {
        print("OK: x in with scope is undefined");
    }
}
with (Z.prototype) {
    zz *= 10;
    with (Z) {
        let v70 = prototype.zz;
        v70++;
        with (prototype) {
            zz *= 100;
        }
    }
}
const v75 = new Y("a");
var q = v75;
with (x) {
    print("x.x = " + x);
    print("x.y = " + y);
    print("x.z = " + z);
    print("x.zz = " + zz);
}
with (q) {
    with (q) {
        with (q) {
            print("q.a = " + a);
            print("q.zz = " + zz);
        }
    }
}
function f100() {
    function a() {
        print("a is called");
    }
    function f105() {
        try {
            throw a;
        } catch(e106) {
            with ({}) {
                e106();
            }
        }
    }
    f105();
}
f100();
function f111() {
    var o = {};
    function x() {
        with (o) {
            function f115() {
            }
            o.x = f115;
            x(f115);
        }
    }
    var y = x;
    y();
}
f111();
