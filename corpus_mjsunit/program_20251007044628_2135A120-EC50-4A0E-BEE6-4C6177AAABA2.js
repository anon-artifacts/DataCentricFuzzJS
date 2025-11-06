var BUGNUMBER = 1111101;
var summary = "delete (foo), delete ((foo)), and so on are strict mode early errors";
print((BUGNUMBER + ": ") + summary);
function checkSyntaxError(a10) {
    function helper(a12) {
        var earlyError = false;
        try {
            var f = a12(a10);
            var error = ("no early error, created a function with code <" + a10) + ">";
            try {
                f();
                error += ", and the function can be called without error";
            } catch(e24) {
                error += ", and calling the function throws " + e24;
            }
            const v28 = new Error(error);
            throw v28;
        } catch(e29) {
            e29 instanceof SyntaxError;
            "expected syntax error, got " + e29;
        }
    }
    helper(Function);
    helper(eval);
}
checkSyntaxError("function f() { 'use strict'; delete escape; } f();");
checkSyntaxError("function f() { 'use strict'; delete escape; }");
checkSyntaxError("function f() { 'use strict'; delete (escape); } f();");
checkSyntaxError("function f() { 'use strict'; delete (escape); }");
checkSyntaxError("function f() { 'use strict'; delete ((escape)); } f();");
checkSyntaxError("function f() { 'use strict'; delete ((escape)); }");
function checkFine(a52) {
    Function(a52);
    eval(a52);
}
checkFine("function f() { delete escape; } f();");
checkFine("function f() { delete escape; }");
checkFine("function f() { delete (escape); } f();");
checkFine("function f() { delete (escape); }");
checkFine("function f() { delete ((escape)); } f();");
checkFine("function f() { delete ((escape)); }");
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
