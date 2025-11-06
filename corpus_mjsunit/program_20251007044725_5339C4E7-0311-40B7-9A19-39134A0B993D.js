function f0() {
    throw "x";
}
var x = { valueOf: f0 };
function f4() {
    throw "y";
}
var y = { valueOf: f4 };
var exception = false;
try {
    x * -y;
} catch(e12) {
    exception = true;
}
