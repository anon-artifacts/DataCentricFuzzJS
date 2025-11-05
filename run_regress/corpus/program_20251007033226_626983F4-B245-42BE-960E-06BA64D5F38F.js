function testSetProtoRegeneratesObjectShape() {
    function f1() {
    }
    var f = f1;
    function f3() {
    }
    var g = f3;
    const v5 = {};
    const t8 = g.prototype;
    t8.__proto__ = v5;
    function iq(a8) {
        for (let i10 = 0; i10 < 10; ++i10) {
            "" + a8.prototype;
        }
    }
    iq(f);
    iq(f);
    iq(f);
    iq(f);
    iq(g);
    return true;
}
testSetProtoRegeneratesObjectShape();
