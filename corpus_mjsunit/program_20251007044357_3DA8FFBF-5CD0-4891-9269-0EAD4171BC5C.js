var glo;
function escape(a3) {
    glo = a3;
}
function test(a5) {
    function f6() {
        return a5;
    }
    escape(f6);
}
test("test1");
print(glo());
test("test2");
print(glo());
