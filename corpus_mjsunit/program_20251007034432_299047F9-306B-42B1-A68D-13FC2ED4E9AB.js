function test0() {
    function f1(a2) {
        if (check ? a2.pop() : print("false")) {
        }
    }
    var func0 = f1;
    var check = true;
    func0([1]);
    check = false;
    func0(1);
}
test0();
test0();
