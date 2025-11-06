function f0() {
}
var SECTION = "15.8.2.5";
var TITLE = "Math.atan2(x,y)";
var BUGNUMBER = "76111";
try { f0(BUGNUMBER); } catch (e) {}
const v10 = (SECTION + " ") + TITLE;
try { writeHeaderToLog(v10); } catch (e) {}
const v18 = Math?.atan2?.length;
try { new TestCase("Math.atan2.length", 2, v18); } catch (e) {}
const v22 = Number?.NaN;
const v23 = Number?.NaN;
let v25;
try { v25 = Math.atan2(v23, 0); } catch (e) {}
try { new TestCase("Math.atan2(NaN, 0)", v22, v25); } catch (e) {}
let v31;
try { v31 = Math.atan2(null, null); } catch (e) {}
try { new TestCase("Math.atan2(null, null)", 0, v31); } catch (e) {}
const v34 = Number?.NaN;
const v36 = void 0;
const v38 = void 0;
let v39;
try { v39 = Math.atan2(v36, v38); } catch (e) {}
try { new TestCase("Math.atan2(void 0, void 0)", v34, v39); } catch (e) {}
const v42 = Number?.NaN;
let v43;
try { v43 = Math.atan2(); } catch (e) {}
try { new TestCase("Math.atan2()", v42, v43); } catch (e) {}
const v46 = Number?.NaN;
const v48 = Number?.NaN;
let v49;
try { v49 = Math.atan2(0, v48); } catch (e) {}
try { new TestCase("Math.atan2(0, NaN)", v46, v49); } catch (e) {}
const v54 = Math?.PI / 2;
let v57;
try { v57 = Math.atan2(1, 0); } catch (e) {}
try { new TestCase("Math.atan2(1, 0)", v54, v57); } catch (e) {}
const v62 = Math?.PI / 2;
const v65 = -0;
let v66;
try { v66 = Math.atan2(1, v65); } catch (e) {}
try { new TestCase("Math.atan2(1,-0)", v62, v66); } catch (e) {}
let v72;
try { v72 = Math.atan2(0, 0.001); } catch (e) {}
try { new TestCase("Math.atan2(0,0.001)", 0, v72); } catch (e) {}
let v78;
try { v78 = Math.atan2(0, 0); } catch (e) {}
try { new TestCase("Math.atan2(0,0)", 0, v78); } catch (e) {}
const v81 = Math?.PI;
const v84 = -0;
let v85;
try { v85 = Math.atan2(0, v84); } catch (e) {}
try { new TestCase("Math.atan2(0, -0)", v81, v85); } catch (e) {}
const v88 = Math?.PI;
const v91 = -1;
let v92;
try { v92 = Math.atan2(0, v91); } catch (e) {}
try { new TestCase("Math.atan2(0, -1)", v88, v92); } catch (e) {}
const v96 = -0;
const v98 = -0;
let v100;
try { v100 = Math.atan2(v98, 1); } catch (e) {}
try { new TestCase("Math.atan2(-0, 1)", v96, v100); } catch (e) {}
const v104 = -Infinity;
const v106 = -0;
let v108;
try { v108 = Math.atan2(v106, 1); } catch (e) {}
const v109 = Infinity / v108;
try { new TestCase("Infinity/Math.atan2(-0, 1)", v104, v109); } catch (e) {}
const v113 = -0;
const v115 = -0;
let v117;
try { v117 = Math.atan2(v115, 0); } catch (e) {}
try { new TestCase("Math.atan2(-0,	0)", v113, v117); } catch (e) {}
const v121 = -Math?.PI;
const v123 = -0;
const v125 = -0;
let v126;
try { v126 = Math.atan2(v123, v125); } catch (e) {}
try { new TestCase("Math.atan2(-0,	-0)", v121, v126); } catch (e) {}
const v130 = -Math?.PI;
const v132 = -0;
const v134 = -1;
let v135;
try { v135 = Math.atan2(v132, v134); } catch (e) {}
try { new TestCase("Math.atan2(-0,	-1)", v130, v135); } catch (e) {}
const v141 = -Math?.PI / 2;
const v143 = -1;
let v145;
try { v145 = Math.atan2(v143, 0); } catch (e) {}
try { new TestCase("Math.atan2(-1,	0)", v141, v145); } catch (e) {}
const v151 = -Math?.PI / 2;
const v153 = -1;
const v155 = -0;
let v156;
try { v156 = Math.atan2(v153, v155); } catch (e) {}
try { new TestCase("Math.atan2(-1,	-0)", v151, v156); } catch (e) {}
const v161 = Number?.POSITIVE_INFINITY;
let v162;
try { v162 = Math.atan2(1, v161); } catch (e) {}
try { new TestCase("Math.atan2(1, Infinity)", 0, v162); } catch (e) {}
const v165 = Math?.PI;
const v167 = Number?.NEGATIVE_INFINITY;
let v168;
try { v168 = Math.atan2(1, v167); } catch (e) {}
try { new TestCase("Math.atan2(1,-Infinity)", v165, v168); } catch (e) {}
const v172 = -0;
const v174 = -1;
const v175 = Number?.POSITIVE_INFINITY;
let v176;
try { v176 = Math.atan2(v174, v175); } catch (e) {}
try { new TestCase("Math.atan2(-1, Infinity)", v172, v176); } catch (e) {}
const v179 = -Infinity;
const v181 = -1;
let v182;
try { v182 = Math.atan2(v181, Infinity); } catch (e) {}
const v183 = Infinity / v182;
try { new TestCase("Infinity/Math.atan2(-1, Infinity)", v179, v183); } catch (e) {}
const v187 = -Math?.PI;
const v189 = -1;
const v190 = Number?.NEGATIVE_INFINITY;
let v191;
try { v191 = Math.atan2(v189, v190); } catch (e) {}
try { new TestCase("Math.atan2(-1,-Infinity)", v187, v191); } catch (e) {}
const v196 = Math?.PI / 2;
const v197 = Number?.POSITIVE_INFINITY;
let v199;
try { v199 = Math.atan2(v197, 0); } catch (e) {}
try { new TestCase("Math.atan2(Infinity, 0)", v196, v199); } catch (e) {}
const v204 = Math?.PI / 2;
const v205 = Number?.POSITIVE_INFINITY;
let v207;
try { v207 = Math.atan2(v205, 1); } catch (e) {}
try { new TestCase("Math.atan2(Infinity, 1)", v204, v207); } catch (e) {}
const v212 = Math?.PI / 2;
const v213 = Number?.POSITIVE_INFINITY;
const v215 = -1;
let v216;
try { v216 = Math.atan2(v213, v215); } catch (e) {}
try { new TestCase("Math.atan2(Infinity,-1)", v212, v216); } catch (e) {}
const v221 = Math?.PI / 2;
const v222 = Number?.POSITIVE_INFINITY;
const v224 = -0;
let v225;
try { v225 = Math.atan2(v222, v224); } catch (e) {}
try { new TestCase("Math.atan2(Infinity,-0)", v221, v225); } catch (e) {}
const v231 = -Math?.PI / 2;
const v232 = Number?.NEGATIVE_INFINITY;
let v234;
try { v234 = Math.atan2(v232, 0); } catch (e) {}
try { new TestCase("Math.atan2(-Infinity, 0)", v231, v234); } catch (e) {}
const v240 = -Math?.PI / 2;
const v241 = Number?.NEGATIVE_INFINITY;
const v243 = -0;
let v244;
try { v244 = Math.atan2(v241, v243); } catch (e) {}
try { new TestCase("Math.atan2(-Infinity,-0)", v240, v244); } catch (e) {}
const v250 = -Math?.PI / 2;
const v251 = Number?.NEGATIVE_INFINITY;
let v253;
try { v253 = Math.atan2(v251, 1); } catch (e) {}
try { new TestCase("Math.atan2(-Infinity, 1)", v250, v253); } catch (e) {}
const v259 = -Math?.PI / 2;
const v260 = Number?.NEGATIVE_INFINITY;
const v262 = -1;
let v263;
try { v263 = Math.atan2(v260, v262); } catch (e) {}
try { new TestCase("Math.atan2(-Infinity, -1)", v259, v263); } catch (e) {}
const v268 = Math?.PI / 4;
const v269 = Number?.POSITIVE_INFINITY;
const v270 = Number?.POSITIVE_INFINITY;
let v271;
try { v271 = Math.atan2(v269, v270); } catch (e) {}
try { new TestCase("Math.atan2(Infinity, Infinity)", v268, v271); } catch (e) {}
const v278 = (3 * Math?.PI) / 4;
const v279 = Number?.POSITIVE_INFINITY;
const v280 = Number?.NEGATIVE_INFINITY;
let v281;
try { v281 = Math.atan2(v279, v280); } catch (e) {}
try { new TestCase("Math.atan2(Infinity, -Infinity)", v278, v281); } catch (e) {}
const v287 = -Math?.PI / 4;
const v288 = Number?.NEGATIVE_INFINITY;
const v289 = Number?.POSITIVE_INFINITY;
let v290;
try { v290 = Math.atan2(v288, v289); } catch (e) {}
try { new TestCase("Math.atan2(-Infinity, Infinity)", v287, v290); } catch (e) {}
const v298 = (-3 * Math?.PI) / 4;
const v299 = Number?.NEGATIVE_INFINITY;
const v300 = Number?.NEGATIVE_INFINITY;
let v301;
try { v301 = Math.atan2(v299, v300); } catch (e) {}
try { new TestCase("Math.atan2(-Infinity, -Infinity)", v298, v301); } catch (e) {}
const v307 = -Math?.PI / 4;
const v309 = -1;
let v311;
try { v311 = Math.atan2(v309, 1); } catch (e) {}
try { new TestCase("Math.atan2(-1, 1)", v307, v311); } catch (e) {}
try { test(); } catch (e) {}
