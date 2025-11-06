const v1 = new Map();
var m = v1;
function C() {
}
function f(a5) {
    a5.x = true;
}
const v7 = new C();
f(v7);
const v9 = new C();
f(v9);
const v11 = new C();
var o = v11;
m.set({}, 3);
m.set(o, 1);
o.x = true;
delete o.x;
f(o);
m.get(o);
for (let i24 = 0; i24 < 1000; i24++) {
    let object = {};
    m.set(object, object);
    m.get(o);
}
