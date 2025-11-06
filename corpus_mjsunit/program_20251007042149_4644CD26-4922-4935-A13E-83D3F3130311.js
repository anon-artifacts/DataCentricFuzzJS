function test() {
    var r = /a/;
    var r2 = r;
    var str = "a";
    print(r.exec(str));
    print(r === r2);
}
test();
test();
var g;
var oldExec = RegExp.prototype.exec;
function f19(a20) {
    g = this;
}
const t14 = RegExp.prototype;
t14.exec = f19;
test();
print(oldExec.call(g, "a"));
