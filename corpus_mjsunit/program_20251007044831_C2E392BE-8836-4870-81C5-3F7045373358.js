const v3 = {
    _val: "q",
    get p() {
        return f;
    },
};
var a = v3;
function f() {
    return this._val;
}
var g = "";
for (let i11 = 0; i11 < 9; i11++) {
    g += a.p();
}
