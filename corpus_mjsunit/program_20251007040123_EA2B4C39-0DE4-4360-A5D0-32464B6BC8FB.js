function f0() {
    return "foo";
}
var callbacks = [f0,"nonobject",/abc/];
callbacks["0"]();
