class C0 {
}
new C0();
function f5(a6) {
    return [[a6,1.5],[a6]];
}
function f11() {
    f5(1)?.[1]?.[0];
    return f5;
}
for (let v17 = 0; v17 < 100; v17++) {
    f11();
}
