function testCallPick() {
    function g(a2, a3) {
        a2.f();
    }
    var x = [];
    function f7() {
    }
    x.f = f7;
    var y = [];
    function f10() {
    }
    y.f = f10;
    var z = [x,x,x,x,x,y,y,y,y,y];
    for (let i14 = 0; i14 < 10; ++i14) {
        g.call(this, z[i14], "");
    }
    return true;
}
testCallPick();
