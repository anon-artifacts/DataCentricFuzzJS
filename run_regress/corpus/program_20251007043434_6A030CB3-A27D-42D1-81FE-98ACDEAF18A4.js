var o = {};
o.__proto__ = String.prototype.split;
function f() {
    with (o) {
        length = 23;
        length = 24;
    }
    o.length;
}
f();
