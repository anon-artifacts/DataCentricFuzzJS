function test0() {
    var o = { p0: 0 };
    test0a(o);
    test0a.call(o, o);
    function test0a(a8) {
        a8.p0 = 0;
        this.p1 = 0;
        let v12 = a8.p0;
        ++v12;
        a8.p2 = 0;
    }
}
test0();
function test1() {
    const v18 = new test1Construct();
    var o = v18;
    test1a(o);
    test1a.call(o, o);
    function test1a(a24) {
        a24.p0 = 0;
        this.p1 = 0;
        let v28 = a24.p0;
        ++v28;
        a24.p2 = 0;
    }
}
function test1Construct() {
    this.p0 = 0;
}
test1();
print("pass");
