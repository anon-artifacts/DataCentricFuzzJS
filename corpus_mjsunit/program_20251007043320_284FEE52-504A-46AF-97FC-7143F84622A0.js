let valueOf = Object.prototype.valueOf;
typeof valueOf.call(true);
typeof valueOf.call(false);
typeof valueOf.call(1.23);
typeof valueOf.call(0);
typeof valueOf.call("a");
typeof valueOf.call(Symbol.isConcatSpreadable);
const v29 = () => {
    let v31;
    try { v31 = valueOf.call(undefined); } catch (e) {}
    return v31;
};
v29();
const v34 = () => {
    let v36;
    try { v36 = valueOf.call(null); } catch (e) {}
    return v36;
};
v34();
function MyException() {
}
const v39 = new Object();
var o = v39;
function f41() {
    const v42 = new MyException();
    throw v42;
}
o.valueOf = f41;
function f43() {
    o + 1;
}
try { f43(); } catch (e) {}
MyException();
