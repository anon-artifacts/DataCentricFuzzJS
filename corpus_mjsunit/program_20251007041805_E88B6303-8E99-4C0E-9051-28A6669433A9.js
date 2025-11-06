function f0() {
    var s = 0;
    for (let i4 = 0; i4 < 9; i4++) {
        s += this.p;
    }
}
const v15 = {
    get p() {
        return 11;
    },
    test: f0,
};
var a = v15;
a.test();
