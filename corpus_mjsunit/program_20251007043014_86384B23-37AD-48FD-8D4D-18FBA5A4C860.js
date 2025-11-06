var glo;
var doEscape = false;
function test(a5) {
    function nested() {
        escape();
        return a5;
    }
    function escape() {
        if (doEscape && !glo) {
            glo = arguments.callee.caller;
        }
    }
    nested();
}
test("test3");
test("test2");
doEscape = true;
test("test1");
print(glo());
