function f(a1) {
    var res = 0;
    for (let i5 = 0; i5 < 11000; i5++) {
        res += a1.x;
    }
    return res;
}
function O(a13) {
    if (a13) {
        this.x = 10;
    }
}
const v17 = new O(true);
f(v17);
const v20 = new O(false);
f(v20);
