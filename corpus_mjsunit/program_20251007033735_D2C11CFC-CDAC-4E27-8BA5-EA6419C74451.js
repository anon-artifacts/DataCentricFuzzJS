function f0() {
}
var SECTION = "switch-001";
var TITLE = "switch-001";
var BUGNUMBER = "315767";
try { f0(BUGNUMBER); } catch (e) {}
const v10 = (SECTION + " ") + TITLE;
try { writeHeaderToLog(v10); } catch (e) {}
result = "fail:  did not enter switch";
switch (true) {
    case 1:
        result = "fail: for backwards compatibility, version 130 use strict equality";
        break;
    case true:
        result = "pass";
        break;
    default:
        result = "fail: evaluated default statement";
}
try { new TestCase("switch / case should use strict equality in version of JS < 1.4", "pass", result); } catch (e) {}
try { test(); } catch (e) {}
