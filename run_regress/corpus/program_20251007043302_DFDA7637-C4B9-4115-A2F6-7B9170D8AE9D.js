function f0() {
    return "y";
}
const t3 = String.prototype;
t3.valueOf = f0;
function test() {
    var o = Object("x");
    o + "";
    "" + o;
}
for (let i16 = 0; i16 < 10; i16++) {
    var o = Object("x");
    o + "";
    "" + o;
}
for (let i33 = 0; i33 < 10; i33++) {
    test();
}
