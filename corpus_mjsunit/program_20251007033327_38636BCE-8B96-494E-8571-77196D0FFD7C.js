Object.keys(2);
[];
Object.keys("foo");
["0","1","2"];
function f10() {
    try { Object.keys(null); } catch (e) {}
}
f10();
function f15() {
    try { Object.keys(undefined); } catch (e) {}
}
f15();
Object.keys({});
[];
Object.keys({ a: null });
["a"];
Object.keys({ a: null, b: null });
["a","b"];
Object.keys({ b: null, a: null });
["b","a"];
Object.keys([]);
[];
Object.keys([null]);
["0"];
Object.keys([,]);
["0"];
Object.keys([null,null]);
["0","1"];
Object.keys([null,null,,,,null]);
["0","1","5"];
const v72 = { a: null };
Object.keys({ __proto__: v72 });
[];
const v79 = [1,2,3];
Object.keys({ __proto__: v79 });
[];
var x = [];
x.__proto__ = [1,2,3];
Object.keys(x);
[];
function f91() {
}
Object.keys(f91);
[];
typeof Object.keys([1])[0];
function argsTest(a101, a102, a103) {
    ["0","1","2"];
    Object.keys(arguments);
}
argsTest(1, 2, 3);
var literal = { a: 1, b: 2, c: 3 };
var keysBefore = Object.keys(literal);
["a","b","c"];
keysBefore[0] = "x";
var keysAfter = Object.keys(literal);
["a","b","c"];
["x","b","c"];
var o = [1,2,3];
["0","1","2"];
Object.keys(o);
Object.defineProperty(o, "0", { enumerable: false });
["1","2"];
Object.keys(o);
function f157() {
    ["0","1","2"];
    Object.keys(arguments);
    Object.defineProperty(arguments, "0", { enumerable: false });
    ["1","2"];
    Object.keys(arguments);
}
f157(0, 1, 2);
function f178(a179, a180) {
    ["0","1","2"];
    Object.keys(arguments);
    Object.defineProperty(arguments, "0", { enumerable: false });
    ["1","2"];
    Object.keys(arguments);
}
f178(0, 1, 2);
var b = [];
Object.keys(b).length;
b[0] = undefined;
Object.keys(b).length;
