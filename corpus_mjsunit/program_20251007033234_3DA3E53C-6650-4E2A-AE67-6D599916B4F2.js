var glo;
function test() {
    function nested1(a4) {
        function nested2() {
            return a4;
        }
        try { escape(); } catch (e) {}
        return "pass";
    }
    let v9;
    try { v9 = nested1(); } catch (e) {}
    try { WScript.Echo(v9); } catch (e) {}
    function blah() {
        return "pass";
    }
    function escape() {
        glo = blah;
    }
}
try { test("test3"); } catch (e) {}
let v17;
try { v17 = glo(); } catch (e) {}
try { WScript.Echo(v17); } catch (e) {}
try { CollectGarbage(); } catch (e) {}
try { test("test1"); } catch (e) {}
