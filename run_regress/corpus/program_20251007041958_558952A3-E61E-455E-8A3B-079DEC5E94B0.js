function f0() {
}
var BUGNUMBER = 245113;
var summary = "instanceof operator should return false for class prototype";
var actual = "";
var expect = "";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
function f11() {
    return this instanceof Date;
}
const t11 = Date?.prototype;
t11.test = f11;
function f17() {
    return this instanceof String;
}
const t16 = String?.prototype;
t16.test = f17;
let v25;
try { v25 = inSection(1); } catch (e) {}
status = summary + v25;
expect = false;
actual = Date?.prototype?.test instanceof Date;
try { f0(expect, actual, status); } catch (e) {}
let v35;
try { v35 = inSection(2); } catch (e) {}
status = summary + v35;
expect = false;
const v38 = Date?.prototype;
let v39;
try { v39 = v38.test(); } catch (e) {}
actual = v39;
try { f0(expect, actual, status); } catch (e) {}
let v42;
try { v42 = inSection(3); } catch (e) {}
status = summary + v42;
expect = false;
const v45 = String?.prototype;
let v46;
try { v46 = v45.test(); } catch (e) {}
actual = v46;
try { f0(expect, actual, status); } catch (e) {}
let v49;
try { v49 = inSection(4); } catch (e) {}
status = summary + v49;
expect = true;
let v52;
try { v52 = new Date(); } catch (e) {}
let v53;
try { v53 = v52.test(); } catch (e) {}
actual = v53;
try { f0(expect, actual, status); } catch (e) {}
let v56;
try { v56 = inSection(5); } catch (e) {}
status = summary + v56;
expect = true;
let v59;
try { v59 = new String(); } catch (e) {}
let v60;
try { v60 = v59.test(); } catch (e) {}
actual = v60;
try { f0(expect, actual, status); } catch (e) {}
