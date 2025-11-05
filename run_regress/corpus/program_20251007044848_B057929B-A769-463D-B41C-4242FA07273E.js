let v2;
try { v2 = ("a").repeat(4294967295); } catch (e) {}
var a = v2;
function f4() {
    function foo(a6) {
        try {
            return ("longer than ConsString:kMinLength" + a6) + "0123456789012";
        } catch(e11) {
            return e11;
        }
    }
    foo("a");
    foo("a");
    foo("a");
    foo(a);
    foo("a");
    foo(a);
}
f4();
