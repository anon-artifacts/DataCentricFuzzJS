function f0() {
}
var BUGNUMBER = 420919;
var summary = "this.u.v = 1 should report this.u is undefined";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = /TypeError: this.u is undefined|TypeError: this.u has no properties/;
    try {
        const t12 = this.u;
        t12.v = 1;
    } catch(e18) {
        actual = e18 + "";
    }
    f0(expect, actual, summary);
}
