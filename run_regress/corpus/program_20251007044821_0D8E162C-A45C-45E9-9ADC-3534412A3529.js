var BUGNUMBER = 894653;
var summary = "Error.prototype.toString called on function objects should work as on any " + "object";
print((BUGNUMBER + ": ") + summary);
function ErrorToString(a12) {
    return Error.prototype.toString.call(a12);
}
function f() {
}
ErrorToString(f);
function g() {
}
ErrorToString(g);
function f23() {
}
ErrorToString(f23);
function f26() {
}
var fn1 = f26;
fn1.message = "ohai";
ErrorToString(fn1);
function blerch() {
}
var fn2 = blerch;
fn2.message = "fnord";
ErrorToString(fn2);
function f36() {
}
var fn3 = f36;
fn3.message = "";
ErrorToString(fn3);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete!");
