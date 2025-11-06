function Foo(a1) {
    this.x = a1;
}
const v4 = new Foo(1.25);
var f = v4;
const v7 = new Foo(2.25);
var g = v7;
function add(a10, a11) {
    return a10.x + a11.x;
}
add(f, g);
add(g, f);
add(f, g);
add(g, f);
