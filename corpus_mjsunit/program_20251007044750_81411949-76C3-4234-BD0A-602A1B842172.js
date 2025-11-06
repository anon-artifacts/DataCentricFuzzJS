function f() {
    return this;
}
this == null;
String(this);
this === this;
function f13() {
    return this;
}
this === f13();
this === f();
var x = {};
var y = {};
y.f = f;
x.f = f;
x === f();
y === f();
x === x.f();
const v31 = new String("f");
x === x[v31]();
y === y.f();
const v38 = new String("f");
y === y[v38]();
x === y.f();
y === x.f();
