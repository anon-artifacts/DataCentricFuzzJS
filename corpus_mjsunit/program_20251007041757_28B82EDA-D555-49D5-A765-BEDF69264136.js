function f0() {
}
var BUGNUMBER = 307791;
var summary = "ES5 Object.keys(O)";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function arraysEqual(a12, a13) {
    const v16 = a12.length === a13.length;
    function f17(a18, a19) {
        return a18 === a13[a19];
    }
    return v16 && a12.every(f17);
}
Object.keys.length;
var o;
var keys;
o = { a: 3, b: 2 };
keys = Object.keys(o);
arraysEqual(keys, ["a","b"]);
"" + keys;
const v46 = {
    get a() {
        return 17;
    },
    b: 2,
};
o = v46;
keys = Object.keys(o);
arraysEqual(keys, ["a","b"]);
"" + keys;
function f55() {
    const v58 = new Error("non-standard __iterator__ called?");
    throw v58;
}
o = { __iterator__: f55 };
keys = Object.keys(o);
arraysEqual(keys, ["__iterator__"]);
"" + keys;
o = { a: 1, b: 2 };
delete o.a;
o.a = 3;
keys = Object.keys(o);
arraysEqual(keys, ["b","a"]);
"" + keys;
o = [0,1,2];
keys = Object.keys(o);
arraysEqual(keys, ["0","1","2"]);
"" + keys;
o = /./.exec("abc");
keys = Object.keys(o);
arraysEqual(keys, ["0","index","input"]);
"" + keys;
o = { a: 1, b: 2, c: 3 };
delete o.b;
o.b = 5;
keys = Object.keys(o);
arraysEqual(keys, ["a","c","b"]);
"" + keys;
function f() {
}
const t62 = f.prototype;
t62.p = 1;
const v123 = new f();
o = v123;
o.g = 1;
keys = Object.keys(o);
arraysEqual(keys, ["g"]);
"" + keys;
if ((typeof Namespace !== "undefined") && (typeof QName !== "undefined")) {
    var o2 = {};
    const v144 = new Namespace("foo");
    const v146 = new QName(v144, "v");
    var qn = v146;
    o2.f = 1;
    o2[qn] = 3;
    o2.baz = 4;
    var keys2 = Object.keys(o2);
    arraysEqual(keys2, ["f","foo::v","baz"]);
    "" + keys2;
}
f0(expect, actual, "Object.keys");
f0("All tests passed!");
