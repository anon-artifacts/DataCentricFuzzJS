function f() {
    return 87;
}
function LoadFromGlobal(a3) {
    return a3.x;
}
function StoreToGlobal(a6, a7) {
    a6.x = a7;
}
function CallOnGlobal(a9) {
    return a9.f();
}
for (let i12 = 0; i12 < 3; i12++) {
    StoreToGlobal(this, 42 + i12);
    42 + i12;
    LoadFromGlobal(this);
    CallOnGlobal(this);
}
for (let i30 = 0; i30 < 3; i30++) {
    StoreToGlobal(i30, 42 + i30);
    typeof LoadFromGlobal(i30) == "undefined";
    ("CallOnGlobal(" + i30) + ")";
}
