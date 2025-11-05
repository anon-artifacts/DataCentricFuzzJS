var v = {};
function inlined() {
    let v3 = v.bar;
    return !(v3++);
}
function outer() {
    inlined();
}
outer();
