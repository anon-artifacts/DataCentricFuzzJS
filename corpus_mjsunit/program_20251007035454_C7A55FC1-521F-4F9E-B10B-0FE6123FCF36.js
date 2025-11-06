function f1() {
    throw 42;
}
Object.prototype.__defineGetter__("constructor", f1);
function f() {
}
f();
f.prototype.constructor;
const v10 = new f();
var o = v10;
f();
o.constructor;
