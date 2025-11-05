function f0() {
}
function keys(a2) {
    var a = [];
    for (const v5 in a2) {
        a.push(v5);
    }
    return a;
}
function f7() {
}
function f8() {
}
function f9() {
}
var obj = { a: f7, b: f8, c: f9 };
var orig_order = keys(obj).toString();
var tmp = obj["b"];
var read_order = keys(obj).toString();
f0(orig_order, read_order, "property enumeration order should not change after reading a method value");
