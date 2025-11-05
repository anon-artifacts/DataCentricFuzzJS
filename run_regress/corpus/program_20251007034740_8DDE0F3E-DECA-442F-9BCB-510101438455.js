function f0() {
}
var BUGNUMBER = 256798;
var summary = "regexp zero-width positive lookahead";
var actual = "";
var expect = "";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
var status;
const v14 = summary + " ";
let v17;
try { v17 = inSection(1); } catch (e) {}
status = v14 + v17;
expect = "aaaa,a";
const v21 = /(?:(a)+)/;
let v22;
try { v22 = v21.exec("baaaa"); } catch (e) {}
actual = v22 + "";
try { f0(expect, actual, status); } catch (e) {}
const v27 = summary + " ";
let v29;
try { v29 = inSection(2); } catch (e) {}
status = v27 + v29;
expect = ",aaa";
const v33 = /(?=(a+))/;
let v34;
try { v34 = v33.exec("baaabac"); } catch (e) {}
actual = v34 + "";
try { f0(expect, actual, status); } catch (e) {}
const v39 = summary + " ";
let v41;
try { v41 = inSection(3); } catch (e) {}
status = v39 + v41;
expect = "b,aaa";
const v45 = /b(?=(a+))/;
let v46;
try { v46 = v45.exec("baaabac"); } catch (e) {}
actual = v46 + "";
try { f0(expect, actual, status); } catch (e) {}
const v51 = summary + " ";
let v53;
try { v53 = inSection(4); } catch (e) {}
status = v51 + v53;
expect = "null";
const v57 = /b(?=(b+))/;
let v58;
try { v58 = v57.exec("baaabac"); } catch (e) {}
actual = v58 + "";
try { f0(expect, actual, status); } catch (e) {}
