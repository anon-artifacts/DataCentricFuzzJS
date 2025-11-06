var SECTION = "15.8.2.18";
var TITLE = "Math.tan(x)";
var EXCLUDE = "true";
const v8 = (SECTION + " ") + TITLE;
try { writeHeaderToLog(v8); } catch (e) {}
const v16 = Math?.tan?.length;
try { new TestCase("Math.tan.length", 1, v16); } catch (e) {}
const v20 = Number?.NaN;
let v21;
try { v21 = Math.tan(); } catch (e) {}
try { new TestCase("Math.tan()", v20, v21); } catch (e) {}
const v24 = Number?.NaN;
const v26 = void 0;
let v27;
try { v27 = Math.tan(v26); } catch (e) {}
try { new TestCase("Math.tan(void 0)", v24, v27); } catch (e) {}
let v32;
try { v32 = Math.tan(null); } catch (e) {}
try { new TestCase("Math.tan(null)", 0, v32); } catch (e) {}
let v37;
try { v37 = Math.tan(false); } catch (e) {}
try { new TestCase("Math.tan(false)", 0, v37); } catch (e) {}
const v40 = Number?.NaN;
const v41 = Number?.NaN;
let v42;
try { v42 = Math.tan(v41); } catch (e) {}
try { new TestCase("Math.tan(NaN)", v40, v42); } catch (e) {}
let v47;
try { v47 = Math.tan(0); } catch (e) {}
try { new TestCase("Math.tan(0)", 0, v47); } catch (e) {}
const v51 = -0;
const v53 = -0;
let v54;
try { v54 = Math.tan(v53); } catch (e) {}
try { new TestCase("Math.tan(-0)", v51, v54); } catch (e) {}
const v57 = Number?.NaN;
const v58 = Number?.POSITIVE_INFINITY;
let v59;
try { v59 = Math.tan(v58); } catch (e) {}
try { new TestCase("Math.tan(Infinity)", v57, v59); } catch (e) {}
const v62 = Number?.NaN;
const v63 = Number?.NEGATIVE_INFINITY;
let v64;
try { v64 = Math.tan(v63); } catch (e) {}
try { new TestCase("Math.tan(-Infinity)", v62, v64); } catch (e) {}
const v70 = Math?.PI / 4;
let v71;
try { v71 = Math.tan(v70); } catch (e) {}
try { new TestCase("Math.tan(Math.PI/4)", 1, v71); } catch (e) {}
const v75 = -1;
const v80 = (3 * Math?.PI) / 4;
let v81;
try { v81 = Math.tan(v80); } catch (e) {}
try { new TestCase("Math.tan(3*Math.PI/4)", v75, v81); } catch (e) {}
const v85 = -0;
const v86 = Math?.PI;
let v87;
try { v87 = Math.tan(v86); } catch (e) {}
try { new TestCase("Math.tan(Math.PI)", v85, v87); } catch (e) {}
const v95 = (5 * Math?.PI) / 4;
let v96;
try { v96 = Math.tan(v95); } catch (e) {}
try { new TestCase("Math.tan(5*Math.PI/4)", 1, v96); } catch (e) {}
const v100 = -1;
const v105 = (7 * Math?.PI) / 4;
let v106;
try { v106 = Math.tan(v105); } catch (e) {}
try { new TestCase("Math.tan(7*Math.PI/4)", v100, v106); } catch (e) {}
const v110 = -Infinity;
const v112 = -0;
let v113;
try { v113 = Math.tan(v112); } catch (e) {}
const v114 = Infinity / v113;
try { new TestCase("Infinity/Math.tan(-0)", v110, v114); } catch (e) {}
const v122 = (3 * Math?.PI) / 2;
let v123;
try { v123 = Math.tan(v122); } catch (e) {}
const v125 = v123 >= 5443000000000000;
try { new TestCase("Math.tan(3*Math.PI/2) >= 5443000000000000", true, v125); } catch (e) {}
const v131 = Math?.PI / 2;
let v132;
try { v132 = Math.tan(v131); } catch (e) {}
const v134 = v132 >= 5443000000000000;
try { new TestCase("Math.tan(Math.PI/2) >= 5443000000000000", true, v134); } catch (e) {}
try { test(); } catch (e) {}
