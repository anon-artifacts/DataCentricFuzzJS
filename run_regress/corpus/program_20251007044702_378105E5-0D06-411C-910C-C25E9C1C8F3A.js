var a = [0,1,2,3,4,5,6];
var x = a.splice(-100, -100);
print(a);
print(x);
x = a.splice();
print(a);
print(x);
x = a.splice(0);
print(a);
print(x);
var x = a.splice(0, 0);
print(a);
print(x);
var x = a.splice(1, -4);
print(a);
print(x);
var x = a.splice(7, -4, 8, 9, 10);
print(a);
print(x);
var x = a.splice(20, 40);
print(a);
print(x);
var x = a.splice(-20, 4, 11, 12);
print(a);
print(x);
x = a.splice(-100, -100);
print(a);
print(x);
var b = [8,9];
var c = [11,12];
x = a.splice(5, 1);
print(x);
print(a);
x = a.splice(2, 2, b, c);
print(x);
print(a);
x = a.splice(-2, -2, b, c);
print(x);
print(a);
x = a.splice(10, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b);
print(x);
print(a);
var d = [1,[2,3,4],[5,6,7]];
x = a.splice(5, 1, d);
print(x);
print(a);
const v116 = new Object();
var f = v116;
f.x = 0;
f.y = 1;
f.z = 2;
x = a.splice(1, 2, f, "hello");
print(x);
print(a);
const v127 = new Object();
var x = v127;
x.length = 6;
x[0] = 1;
x[1] = 2;
x[2] = 3;
x[3] = 4;
x[4] = 5;
x[5] = 6;
x.foo = Array.prototype.splice;
print(x.length);
var y = x.foo(0, 1, 9, 10, 11, 12);
print(y);
print(x.length);
y = x.foo(0, 9);
print(y);
print(x.length);
y = x.foo(0, 0, 1, 2, 3, 4, 5, 6);
print(y);
print(x.length);
y = x.foo(3, 3, 7);
print(y);
print(x.length);
y = x.foo(0, 8);
print(y);
print(x.length);
const v185 = new String("hello world");
x = v185;
x.foo = Array.prototype.splice;
y = undefined;
try {
    y = x.foo(0, 5);
} catch(e192) {
    if (!e192 instanceof TypeError) {
        throw e192;
    }
    print(y);
    print(x);
}
try {
    y = x.foo(0, 5);
} catch(e201) {
    if (!e201 instanceof TypeError) {
        throw e201;
    }
    print(y);
    print(x);
}
try {
    y = x.foo(0, 13);
} catch(e210) {
    if (!e210 instanceof TypeError) {
        throw e210;
    }
    print(y);
    print(x);
}
print("Test: splice when the item to replace is not writable.");
var a = {};
Object.defineProperty(a, "0", { value: 0 });
Object.defineProperty(a, "1", { value: 1 });
a.length = 2;
try {
    const v232 = [0,1,"z"];
    Array.prototype.splice.apply(a, v232);
} catch(e236) {
    print("e instanceOf TypeError = " + (e236 instanceof TypeError));
}
print("a.length = " + a.length);
const v247 = new Array(1000);
x = (a = v247).splice(1, 17, "a");
function test0() {
    var arr = [0,1,2,3,4,5,6,7,8,9];
    for (let i266 = 0; i266 < 2; i266++) {
        let v272 = arr.length;
        v272--;
        arr.splice(3, 1, 31, 32, 33);
    }
    return arr.length;
}
print("arr.length = " + test0());
