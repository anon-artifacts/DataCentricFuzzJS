var a = [];
function* f2() {
    yield "o";
    yield "k";
}
a[Symbol.iterator] = f2;
var s = "";
for (const v11 of a) {
    s += v11;
}
a[Symbol.iterator] = undefined;
function f15() {
    for (const v16 of a) {
    }
}
try { f15(); } catch (e) {}
