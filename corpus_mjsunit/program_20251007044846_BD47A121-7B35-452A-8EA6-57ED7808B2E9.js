function f0() {
}
var SECTION = "function-002";
var TITLE = "Regression test for 249579";
var BUGNUMBER = "249579";
try { f0(BUGNUMBER); } catch (e) {}
const v10 = (SECTION + " ") + TITLE;
try { writeHeaderToLog(v10); } catch (e) {}
function f17() {
}
const v19 = 0 ? f17 : 0;
try { new TestCase("0?function(){}:0", 0, v19); } catch (e) {}
bar = true;
function f24() {
    return true;
}
function f26() {
    return false;
}
foo = bar ? f24 : f26;
let v33;
try { v33 = foo(); } catch (e) {}
try { new TestCase("bar = true; foo = bar ? function () { return true; } : function() { return false; }; foo()", true, v33); } catch (e) {}
try { test(); } catch (e) {}
