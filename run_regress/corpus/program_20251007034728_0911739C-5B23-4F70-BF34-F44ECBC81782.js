var SECTION = "15.8.2.7";
var TITLE = "Math.cos(x)";
const v6 = (SECTION + " ") + TITLE;
try { writeHeaderToLog(v6); } catch (e) {}
const v14 = Math?.cos?.length;
try { new TestCase("Math.cos.length", 1, v14); } catch (e) {}
const v18 = Number?.NaN;
let v19;
try { v19 = Math.cos(); } catch (e) {}
try { new TestCase("Math.cos()", v18, v19); } catch (e) {}
const v22 = Number?.NaN;
const v24 = void 0;
let v25;
try { v25 = Math.cos(v24); } catch (e) {}
try { new TestCase("Math.cos(void 0)", v22, v25); } catch (e) {}
let v30;
try { v30 = Math.cos(false); } catch (e) {}
try { new TestCase("Math.cos(false)", 1, v30); } catch (e) {}
let v35;
try { v35 = Math.cos(null); } catch (e) {}
try { new TestCase("Math.cos(null)", 1, v35); } catch (e) {}
let v40;
try { v40 = Math.cos("0"); } catch (e) {}
try { new TestCase("Math.cos('0')", 1, v40); } catch (e) {}
const v43 = Number?.NaN;
let v45;
try { v45 = Math.cos("Infinity"); } catch (e) {}
try { new TestCase("Math.cos('Infinity')", v43, v45); } catch (e) {}
const v49 = -1;
let v51;
try { v51 = Math.cos("3.14159265359"); } catch (e) {}
try { new TestCase("Math.cos('3.14159265359')", v49, v51); } catch (e) {}
const v54 = Number?.NaN;
const v55 = Number?.NaN;
let v56;
try { v56 = Math.cos(v55); } catch (e) {}
try { new TestCase("Math.cos(NaN)", v54, v56); } catch (e) {}
let v61;
try { v61 = Math.cos(0); } catch (e) {}
try { new TestCase("Math.cos(0)", 1, v61); } catch (e) {}
const v66 = -0;
let v67;
try { v67 = Math.cos(v66); } catch (e) {}
try { new TestCase("Math.cos(-0)", 1, v67); } catch (e) {}
const v70 = Number?.NaN;
const v71 = Number?.POSITIVE_INFINITY;
let v72;
try { v72 = Math.cos(v71); } catch (e) {}
try { new TestCase("Math.cos(Infinity)", v70, v72); } catch (e) {}
const v75 = Number?.NaN;
const v76 = Number?.NEGATIVE_INFINITY;
let v77;
try { v77 = Math.cos(v76); } catch (e) {}
try { new TestCase("Math.cos(-Infinity)", v75, v77); } catch (e) {}
let v82;
try { v82 = Math.cos(0.7853981633974); } catch (e) {}
try { new TestCase("Math.cos(0.7853981633974)", 0.7071067811865, v82); } catch (e) {}
let v87;
try { v87 = Math.cos(1.570796326795); } catch (e) {}
try { new TestCase("Math.cos(1.570796326795)", 0, v87); } catch (e) {}
const v91 = -0.7071067811865;
let v93;
try { v93 = Math.cos(2.356194490192); } catch (e) {}
try { new TestCase("Math.cos(2.356194490192)", v91, v93); } catch (e) {}
const v97 = -1;
let v99;
try { v99 = Math.cos(3.14159265359); } catch (e) {}
try { new TestCase("Math.cos(3.14159265359)", v97, v99); } catch (e) {}
const v103 = -0.7071067811865;
let v105;
try { v105 = Math.cos(3.926990816987); } catch (e) {}
try { new TestCase("Math.cos(3.926990816987)", v103, v105); } catch (e) {}
let v110;
try { v110 = Math.cos(4.712388980385); } catch (e) {}
try { new TestCase("Math.cos(4.712388980385)", 0, v110); } catch (e) {}
let v115;
try { v115 = Math.cos(5.497787143782); } catch (e) {}
try { new TestCase("Math.cos(5.497787143782)", 0.7071067811865, v115); } catch (e) {}
const v121 = Math?.PI * 2;
let v122;
try { v122 = Math.cos(v121); } catch (e) {}
try { new TestCase("Math.cos(Math.PI*2)", 1, v122); } catch (e) {}
const v127 = Math?.SQRT2 / 2;
const v130 = Math?.PI / 4;
let v131;
try { v131 = Math.cos(v130); } catch (e) {}
try { new TestCase("Math.cos(Math.PI/4)", v127, v131); } catch (e) {}
const v137 = Math?.PI / 2;
let v138;
try { v138 = Math.cos(v137); } catch (e) {}
try { new TestCase("Math.cos(Math.PI/2)", 0, v138); } catch (e) {}
const v144 = -Math?.SQRT2 / 2;
const v149 = (3 * Math?.PI) / 4;
let v150;
try { v150 = Math.cos(v149); } catch (e) {}
try { new TestCase("Math.cos(3*Math.PI/4)", v144, v150); } catch (e) {}
const v154 = -1;
const v155 = Math?.PI;
let v156;
try { v156 = Math.cos(v155); } catch (e) {}
try { new TestCase("Math.cos(Math.PI)", v154, v156); } catch (e) {}
const v162 = -Math?.SQRT2 / 2;
const v167 = (5 * Math?.PI) / 4;
let v168;
try { v168 = Math.cos(v167); } catch (e) {}
try { new TestCase("Math.cos(5*Math.PI/4)", v162, v168); } catch (e) {}
const v176 = (3 * Math?.PI) / 2;
let v177;
try { v177 = Math.cos(v176); } catch (e) {}
try { new TestCase("Math.cos(3*Math.PI/2)", 0, v177); } catch (e) {}
const v182 = Math?.SQRT2 / 2;
const v187 = (7 * Math?.PI) / 4;
let v188;
try { v188 = Math.cos(v187); } catch (e) {}
try { new TestCase("Math.cos(7*Math.PI/4)", v182, v188); } catch (e) {}
const v194 = 2 * Math?.PI;
let v195;
try { v195 = Math.cos(v194); } catch (e) {}
try { new TestCase("Math.cos(Math.PI*2)", 1, v195); } catch (e) {}
const v200 = -0.7853981633974;
let v201;
try { v201 = Math.cos(v200); } catch (e) {}
try { new TestCase("Math.cos(-0.7853981633974)", 0.7071067811865, v201); } catch (e) {}
const v206 = -1.570796326795;
let v207;
try { v207 = Math.cos(v206); } catch (e) {}
try { new TestCase("Math.cos(-1.570796326795)", 0, v207); } catch (e) {}
const v211 = -0.7071067811865;
let v213;
try { v213 = Math.cos(2.356194490192); } catch (e) {}
try { new TestCase("Math.cos(-2.3561944901920)", v211, v213); } catch (e) {}
const v217 = -1;
let v219;
try { v219 = Math.cos(3.14159265359); } catch (e) {}
try { new TestCase("Math.cos(-3.14159265359)", v217, v219); } catch (e) {}
const v223 = -0.7071067811865;
let v225;
try { v225 = Math.cos(3.926990816987); } catch (e) {}
try { new TestCase("Math.cos(-3.926990816987)", v223, v225); } catch (e) {}
let v230;
try { v230 = Math.cos(4.712388980385); } catch (e) {}
try { new TestCase("Math.cos(-4.712388980385)", 0, v230); } catch (e) {}
let v235;
try { v235 = Math.cos(5.497787143782); } catch (e) {}
try { new TestCase("Math.cos(-5.497787143782)", 0.7071067811865, v235); } catch (e) {}
let v240;
try { v240 = Math.cos(6.28318530718); } catch (e) {}
try { new TestCase("Math.cos(-6.28318530718)", 1, v240); } catch (e) {}
const v245 = Math?.SQRT2 / 2;
const v249 = -Math?.PI / 4;
let v250;
try { v250 = Math.cos(v249); } catch (e) {}
try { new TestCase("Math.cos(-Math.PI/4)", v245, v250); } catch (e) {}
const v257 = -Math?.PI / 2;
let v258;
try { v258 = Math.cos(v257); } catch (e) {}
try { new TestCase("Math.cos(-Math.PI/2)", 0, v258); } catch (e) {}
const v264 = -Math?.SQRT2 / 2;
const v270 = (-3 * Math?.PI) / 4;
let v271;
try { v271 = Math.cos(v270); } catch (e) {}
try { new TestCase("Math.cos(-3*Math.PI/4)", v264, v271); } catch (e) {}
const v275 = -1;
const v277 = -Math?.PI;
let v278;
try { v278 = Math.cos(v277); } catch (e) {}
try { new TestCase("Math.cos(-Math.PI)", v275, v278); } catch (e) {}
const v284 = -Math?.SQRT2 / 2;
const v290 = (-5 * Math?.PI) / 4;
let v291;
try { v291 = Math.cos(v290); } catch (e) {}
try { new TestCase("Math.cos(-5*Math.PI/4)", v284, v291); } catch (e) {}
const v300 = (-3 * Math?.PI) / 2;
let v301;
try { v301 = Math.cos(v300); } catch (e) {}
try { new TestCase("Math.cos(-3*Math.PI/2)", 0, v301); } catch (e) {}
const v306 = Math?.SQRT2 / 2;
const v312 = (-7 * Math?.PI) / 4;
let v313;
try { v313 = Math.cos(v312); } catch (e) {}
try { new TestCase("Math.cos(-7*Math.PI/4)", v306, v313); } catch (e) {}
const v320 = -Math?.PI * 2;
let v321;
try { v321 = Math.cos(v320); } catch (e) {}
try { new TestCase("Math.cos(-Math.PI*2)", 1, v321); } catch (e) {}
try { test(); } catch (e) {}
