function func(a1, a2) {
    print(a2());
}
function test(a7) {
    function f8() {
        return a7;
    }
    var call_escape = f8;
    func(1, call_escape);
}
test("test1");
test("test2");
