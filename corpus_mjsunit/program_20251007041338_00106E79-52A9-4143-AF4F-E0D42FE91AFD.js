var escape;
function test(a3) {
    function f4() {
        return a3;
    }
    var nested = f4;
    function child() {
        escape = nested;
    }
    child();
}
test("test1");
print(escape());
test("test2");
print(escape());
