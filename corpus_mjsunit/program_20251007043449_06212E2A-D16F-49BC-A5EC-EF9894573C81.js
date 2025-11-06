const v1 = new WeakMap();
var wm = v1;
var bar = {};
wm.set(bar, "BAR");
var foo = {};
var a = wm.set(foo, "FOO").get(foo);
