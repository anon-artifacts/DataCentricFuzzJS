function test(a1, a2) {
    function func() {
        return a1;
    }
    return func();
}
print(test("test1"));
print(test("test2"));
