function test(a1) {
    var x;
    var y;
    function f6() {
        return a1;
    }
    y = f6;
    return x = f6;
}
const t9 = test("test1");
print(t9());
const t10 = test("test2");
print(t10());
