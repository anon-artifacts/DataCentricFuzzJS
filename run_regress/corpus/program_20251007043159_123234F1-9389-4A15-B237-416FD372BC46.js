console.log("This test checks whether getters and setters work correctly with garbage collection.");
var o = {};
function f6() {
    return 242;
}
o.__defineGetter__("x", f6);
o.x;
var i = 0;
var s;
while (i < 5000) {
    i = i + 1.11;
    s = s + " ";
}
o.x;
