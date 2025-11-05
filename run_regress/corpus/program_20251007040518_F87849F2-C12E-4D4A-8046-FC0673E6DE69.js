var a = { x: 1 };
var a_deprecate = { x: 1 };
a_deprecate.x = 1.5;
function create() {
    return { __proto__: a, y: 1 };
}
var b1 = create();
var b2 = create();
var b3 = create();
var b4 = create();
function set(a19) {
    a19.x = 5;
    a19.z = 10;
}
set(b1);
set(b2);
set(b3);
var called = false;
a.x = 1.5;
function f29(a30) {
    called = true;
}
Object.defineProperty(a, "z", { set: f29 });
set(b4);
b4.z;
