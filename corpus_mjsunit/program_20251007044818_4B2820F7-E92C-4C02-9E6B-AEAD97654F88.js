function test(a1) {
    var l = a1;
    function f3() {
        return l;
    }
    a1 = f3;
    return arguments[0];
}
const t8 = test("test1");
print(t8());
const t9 = test("test2");
print(t9());
