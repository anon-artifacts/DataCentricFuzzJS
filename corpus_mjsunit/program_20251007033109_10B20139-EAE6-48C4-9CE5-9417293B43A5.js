function f0() {
}
var BUGNUMBER = 248444;
var summary = "toString/toSource of RegExp should escape slashes";
var actual = "";
var expect = "";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
var re;
expect = "/[^\/]+$/";
const v15 = summary + " ";
let v18;
try { v18 = inSection(1); } catch (e) {}
status = v15 + v18;
re = /[^\/]+$/;
let v22;
try { v22 = re.toString(); } catch (e) {}
actual = v22;
try { f0(expect, actual, status); } catch (e) {}
const v26 = summary + " ";
let v28;
try { v28 = inSection(2); } catch (e) {}
status = v26 + v28;
let v32;
try { v32 = RegExp("[^\/]+$"); } catch (e) {}
re = v32;
let v33;
try { v33 = re.toString(); } catch (e) {}
actual = v33;
try { f0(expect, actual, status); } catch (e) {}
const v36 = summary + " ";
let v38;
try { v38 = inSection(3); } catch (e) {}
status = v36 + v38;
let v41;
try { v41 = RegExp("[^\/]+$"); } catch (e) {}
re = v41;
let v42;
try { v42 = re.toString(); } catch (e) {}
actual = v42;
try { f0(expect, actual, status); } catch (e) {}
