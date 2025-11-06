var nomissing = [];
nomissing[0] = {};
var missing = [];
missing[1] = {};
function foo(a7, a8) {
    return a8 in a7;
}
try { foo(nomissing, 0); } catch (e) {}
try { foo(nomissing, 0); } catch (e) {}
let v15;
try { v15 = foo(missing, 0); } catch (e) {}
var res = v15;
const v19 = res ? "FAIL" : "PASS";
try { WScript.Echo(v19); } catch (e) {}
