function write(a1) {
    print(a1 + "");
}
var x = "global.x";
var o = { x: "object.x" };
function foo(a12) {
    var str = (((("In foo: " + a12) + ". this.x: ") + this.x) + " type: ") + typeof this;
    write(str);
    return str;
}
foo.call(this, 2);
foo.call();
foo.call(0);
foo.call(void 0);
foo.call() === foo.call(0);
write(foo.call() === foo.call(void 0));
foo.apply();
foo.apply(0);
foo.apply(void 0);
foo.apply() === foo.apply(0);
write(foo.apply() === foo.apply(void 0));
