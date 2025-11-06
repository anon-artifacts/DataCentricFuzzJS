function f0() {
}
var BUGNUMBER = 281606;
var summary = "l instanceof r throws TypeError if r does not support [[HasInstance]]";
var actual = "";
var expect = "";
var status;
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
var o = {};
const v16 = summary + " ";
let v19;
try { v19 = inSection(1); } catch (e) {}
status = (v16 + v19) + " o instanceof Math ";
expect = "TypeError";
try {
    if (o instanceof Math) {
    }
    actual = "No Error";
} catch(e27) {
    actual = e27?.name;
}
try { f0(expect, actual, status); } catch (e) {}
const v31 = summary + " ";
let v33;
try { v33 = inSection(2); } catch (e) {}
status = (v31 + v33) + " o instanceof o ";
expect = "TypeError";
try {
    if (o instanceof o) {
    }
    actual = "No Error";
} catch(e40) {
    actual = e40?.name;
}
try { f0(expect, actual, status); } catch (e) {}
