function f(a1, a2, a3) {
}
function a() {
    let o1;
    const v8 = new Array();
    f(...o1 = v8);
    o1[1000] = Infinity;
}
a();
a();
