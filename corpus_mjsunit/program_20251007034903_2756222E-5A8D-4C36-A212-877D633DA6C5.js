var a;
function foo() {
    var b = 1073741824 | undefined;
    try {
        b *= 2;
    } catch(e8) {
    }
    a = b;
}
try { foo(); } catch (e) {}
try { foo(); } catch (e) {}
try { foo(); } catch (e) {}
const v16 = a == 2147483648 ? "PASSED" : "FAILED";
try { WScript.Echo(v16); } catch (e) {}
