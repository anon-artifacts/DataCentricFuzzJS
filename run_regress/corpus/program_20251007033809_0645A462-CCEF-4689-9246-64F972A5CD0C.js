function f1() {
    var s = Math.floor(this._leftTime / 3600);
    var e = Math.floor(s / 24);
    var i = s % 24;
    return { s: s, e: e, i: i };
}
var obj = { _leftTime: 12345678, _divider: f1 };
for (let i20 = 0; i20 < 1000; i20++) {
    obj._divider();
}
