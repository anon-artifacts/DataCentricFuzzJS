function f0() {
}
var BUGNUMBER = 294195;
var summary = "Do not crash during String replace when accessing methods on backreferences";
var actual = "No Crash";
var expect = "No Crash";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
var s = "some text sample";
let v15;
try { v15 = new RegExp("(^|\s)(text)"); } catch (e) {}
let v18;
try { v18 = new String("$1"); } catch (e) {}
let v19;
try { v19 = s.replace(v15, v18); } catch (e) {}
var result = v19;
let v23;
try { v23 = result.substr(0, 1); } catch (e) {}
result = v23;
let v26;
try { v26 = inSection(1); } catch (e) {}
const v29 = (v26 + " ") + summary;
try { f0(expect, actual, v29); } catch (e) {}
let v32;
try { v32 = new RegExp("(^|\s)(text)"); } catch (e) {}
let v36;
try { v36 = new String("$1"); } catch (e) {}
let v37;
try { v37 = v36.substr(0, 1); } catch (e) {}
let v38;
try { v38 = s.replace(v32, v37); } catch (e) {}
result = v38;
let v40;
try { v40 = inSection(2); } catch (e) {}
const v43 = (v40 + " ") + summary;
try { f0(expect, actual, v43); } catch (e) {}
