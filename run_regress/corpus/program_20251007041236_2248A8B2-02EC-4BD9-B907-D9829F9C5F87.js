function test(a1) {
    var l = a1;
    function f3() {
        return l;
    }
    a1 = f3;
    return arguments;
}
print(test("test1")[0]());
print(test("test2")[0]());
