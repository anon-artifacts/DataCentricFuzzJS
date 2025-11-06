function Foo(a1) {
    this.x = a1;
}
const v4 = new Foo(1);
var f = v4;
const v7 = new Foo(2);
var g = v7;
function add(a10, a11) {
    var name = "x";
    return a10[name] + a11[name];
}
add(f, g);
add(g, f);
add(f, g);
add(g, f);
