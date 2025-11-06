const v1 = new Array();
var inner = v1;
inner.a = { x: 1 };
inner[0] = 1.5;
inner.b = { x: 2 };
function foo(a9) {
    return a9.field.b.x;
}
var outer = {};
outer.field = inner;
foo(outer);
foo(outer);
foo(outer);
foo(outer);
const v21 = {
    get x() {
        return 2147483647;
    },
};
var v = v21;
inner.b = v;
gc();
var boom = foo(outer);
print(boom);
