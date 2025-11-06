var a = Object.freeze([1]);
function f5() {
    try { a.push(2); } catch (e) {}
}
f5();
a.length;
function f12() {
    try { a.push(2); } catch (e) {}
}
f12();
a.length;
