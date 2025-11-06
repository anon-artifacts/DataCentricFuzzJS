var a = 10;
function f2() {
    return this;
}
var global = f2();
var keys = Object.keys(global);
keys.indexOf("a") > 0;
