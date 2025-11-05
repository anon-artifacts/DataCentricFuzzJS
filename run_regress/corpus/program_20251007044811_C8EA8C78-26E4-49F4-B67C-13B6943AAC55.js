var glo;
var box = false;
function test(a5) {
    var recurse = 0;
    function nested1(a9) {
        function nested2() {
            return a5 + a9;
        }
        recurse++;
        if (recurse < 10) {
            return nested1((a5 + a9) + recurse);
        }
        if (box) {
            escape();
            return glo();
        }
        return nested2();
    }
    print(nested1());
    function blah() {
        return "blah";
    }
    function escape() {
        glo = blah;
    }
}
test("test1");
test("test2");
box = true;
test("test3");
print(glo());
