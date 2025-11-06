function f0() {
    return "baz";
}
var key = { toString: f0 };
var object = { baz: 42 };
object[key];
object[key] = 87;
object[key];
let v12 = object[key];
v12++;
object[key];
