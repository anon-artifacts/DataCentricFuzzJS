function f0() {
}
var foo = f0;
function f3() {
}
var bar = f3;
function f6() {
}
var baz = f6;
bar.test = baz;
foo.test = baz;
var test = baz;
foo.test;
bar.test;
