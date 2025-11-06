var SECTION = "15.8.2.17";
var TITLE = "Math.sqrt(x)";
const v6 = (SECTION + " ") + TITLE;
try { writeHeaderToLog(v6); } catch (e) {}
const v14 = Math?.sqrt?.length;
try { new TestCase("Math.sqrt.length", 1, v14); } catch (e) {}
const v18 = Number?.NaN;
let v19;
try { v19 = Math.sqrt(); } catch (e) {}
try { new TestCase("Math.sqrt()", v18, v19); } catch (e) {}
const v22 = Number?.NaN;
const v24 = void 0;
let v25;
try { v25 = Math.sqrt(v24); } catch (e) {}
try { new TestCase("Math.sqrt(void 0)", v22, v25); } catch (e) {}
let v30;
try { v30 = Math.sqrt(null); } catch (e) {}
try { new TestCase("Math.sqrt(null)", 0, v30); } catch (e) {}
let v35;
try { v35 = Math.sqrt(1); } catch (e) {}
try { new TestCase("Math.sqrt(true)", 1, v35); } catch (e) {}
let v40;
try { v40 = Math.sqrt(false); } catch (e) {}
try { new TestCase("Math.sqrt(false)", 0, v40); } catch (e) {}
let v45;
try { v45 = Math.sqrt("225"); } catch (e) {}
try { new TestCase("Math.sqrt('225')", 15, v45); } catch (e) {}
const v48 = Number?.NaN;
const v49 = Number?.NaN;
let v50;
try { v50 = Math.sqrt(v49); } catch (e) {}
try { new TestCase("Math.sqrt(NaN)", v48, v50); } catch (e) {}
const v53 = Number?.NaN;
const v54 = Number?.NEGATIVE_INFINITY;
let v55;
try { v55 = Math.sqrt(v54); } catch (e) {}
try { new TestCase("Math.sqrt(-Infinity)", v53, v55); } catch (e) {}
const v58 = Number?.NaN;
const v60 = -1;
let v61;
try { v61 = Math.sqrt(v60); } catch (e) {}
try { new TestCase("Math.sqrt(-1)", v58, v61); } catch (e) {}
const v64 = Number?.NaN;
const v66 = -0.5;
let v67;
try { v67 = Math.sqrt(v66); } catch (e) {}
try { new TestCase("Math.sqrt(-0.5)", v64, v67); } catch (e) {}
let v72;
try { v72 = Math.sqrt(0); } catch (e) {}
try { new TestCase("Math.sqrt(0)", 0, v72); } catch (e) {}
const v76 = -0;
const v78 = -0;
let v79;
try { v79 = Math.sqrt(v78); } catch (e) {}
try { new TestCase("Math.sqrt(-0)", v76, v79); } catch (e) {}
const v83 = -Infinity;
const v85 = -0;
let v86;
try { v86 = Math.sqrt(v85); } catch (e) {}
const v87 = Infinity / v86;
try { new TestCase("Infinity/Math.sqrt(-0)", v83, v87); } catch (e) {}
const v90 = Number?.POSITIVE_INFINITY;
const v91 = Number?.POSITIVE_INFINITY;
let v92;
try { v92 = Math.sqrt(v91); } catch (e) {}
try { new TestCase("Math.sqrt(Infinity)", v90, v92); } catch (e) {}
let v97;
try { v97 = Math.sqrt(1); } catch (e) {}
try { new TestCase("Math.sqrt(1)", 1, v97); } catch (e) {}
const v100 = Math?.SQRT2;
let v102;
try { v102 = Math.sqrt(2); } catch (e) {}
try { new TestCase("Math.sqrt(2)", v100, v102); } catch (e) {}
const v105 = Math?.SQRT1_2;
let v107;
try { v107 = Math.sqrt(0.5); } catch (e) {}
try { new TestCase("Math.sqrt(0.5)", v105, v107); } catch (e) {}
let v112;
try { v112 = Math.sqrt(4); } catch (e) {}
try { new TestCase("Math.sqrt(4)", 2, v112); } catch (e) {}
let v117;
try { v117 = Math.sqrt(9); } catch (e) {}
try { new TestCase("Math.sqrt(9)", 3, v117); } catch (e) {}
let v122;
try { v122 = Math.sqrt(16); } catch (e) {}
try { new TestCase("Math.sqrt(16)", 4, v122); } catch (e) {}
let v127;
try { v127 = Math.sqrt(25); } catch (e) {}
try { new TestCase("Math.sqrt(25)", 5, v127); } catch (e) {}
let v132;
try { v132 = Math.sqrt(36); } catch (e) {}
try { new TestCase("Math.sqrt(36)", 6, v132); } catch (e) {}
let v137;
try { v137 = Math.sqrt(49); } catch (e) {}
try { new TestCase("Math.sqrt(49)", 7, v137); } catch (e) {}
let v142;
try { v142 = Math.sqrt(64); } catch (e) {}
try { new TestCase("Math.sqrt(64)", 8, v142); } catch (e) {}
let v147;
try { v147 = Math.sqrt(256); } catch (e) {}
try { new TestCase("Math.sqrt(256)", 16, v147); } catch (e) {}
let v152;
try { v152 = Math.sqrt(10000); } catch (e) {}
try { new TestCase("Math.sqrt(10000)", 100, v152); } catch (e) {}
let v157;
try { v157 = Math.sqrt(65536); } catch (e) {}
try { new TestCase("Math.sqrt(65536)", 256, v157); } catch (e) {}
let v162;
try { v162 = Math.sqrt(0.09); } catch (e) {}
try { new TestCase("Math.sqrt(0.09)", 0.3, v162); } catch (e) {}
let v167;
try { v167 = Math.sqrt(0.01); } catch (e) {}
try { new TestCase("Math.sqrt(0.01)", 0.1, v167); } catch (e) {}
let v172;
try { v172 = Math.sqrt(1e-08); } catch (e) {}
try { new TestCase("Math.sqrt(0.00000001)", 0.0001, v172); } catch (e) {}
try { test(); } catch (e) {}
