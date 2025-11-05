print("Test for correct short-circuiting implementation of Date.set methods");
var global = 0;
var date;
function f8() {
    global = 3;
}
const v10 = { valueOf: f8 };
const v13 = new Date(0);
date = v13.setSeconds(NaN, v10);
function f16() {
    global = 4;
}
const v18 = { valueOf: f16 };
const v20 = new Date(0);
date = v20.setUTCSeconds(NaN, v18);
function f23() {
    global = 5;
}
const v25 = { valueOf: f23 };
const v27 = new Date(0);
date = v27.setMinutes(NaN, v25);
function f30() {
    global = 6;
}
const v32 = { valueOf: f30 };
const v34 = new Date(0);
date = v34.setUTCMinutes(NaN, v32);
function f37() {
    global = 7;
}
const v39 = { valueOf: f37 };
const v41 = new Date(0);
date = v41.setHours(NaN, v39);
function f44() {
    global = 8;
}
const v46 = { valueOf: f44 };
const v48 = new Date(0);
date = v48.setUTCHours(NaN, v46);
function f51() {
    global = 11;
}
const v53 = { valueOf: f51 };
const v55 = new Date(0);
date = v55.setMonth(NaN, v53);
function f58() {
    global = 12;
}
const v60 = { valueOf: f58 };
const v62 = new Date(0);
date = v62.setUTCMonth(NaN, v60);
function f65() {
    global = 13;
}
const v67 = { valueOf: f65 };
const v69 = new Date(0);
date = v69.setFullYear(NaN, v67);
function f72() {
    global = 14;
}
const v74 = { valueOf: f72 };
const v76 = new Date(0);
date = v76.setUTCFullYear(NaN, v74);
function f79() {
    global = 15;
}
const v81 = { valueOf: f79 };
const v82 = new Date(NaN);
date = v82.setMilliseconds(v81);
function f85() {
    global = 16;
}
const v87 = { valueOf: f85 };
const v88 = new Date(NaN);
date = v88.setUTCMilliseconds(v87);
function f91() {
    global = 17;
}
const v93 = { valueOf: f91 };
const v94 = new Date(NaN);
date = v94.setSeconds(v93);
function f97() {
    global = 18;
}
const v99 = { valueOf: f97 };
const v100 = new Date(NaN);
date = v100.setUTCSeconds(v99);
function f103() {
    global = 19;
}
const v105 = { valueOf: f103 };
const v106 = new Date(NaN);
date = v106.setMinutes(v105);
function f109() {
    global = 20;
}
const v111 = { valueOf: f109 };
const v112 = new Date(NaN);
date = v112.setUTCMinutes(v111);
function f115() {
    global = 21;
}
const v117 = { valueOf: f115 };
const v118 = new Date(NaN);
date = v118.setHours(v117);
function f121() {
    global = 22;
}
const v123 = { valueOf: f121 };
const v124 = new Date(NaN);
date = v124.setUTCHours(v123);
function f127() {
    global = 23;
}
const v129 = { valueOf: f127 };
const v130 = new Date(NaN);
date = v130.setDate(v129);
function f133() {
    global = 24;
}
const v135 = { valueOf: f133 };
const v136 = new Date(NaN);
date = v136.setUTCDate(v135);
function f139() {
    global = 25;
}
const v141 = { valueOf: f139 };
const v142 = new Date(NaN);
date = v142.setMonth(v141);
function f145() {
    global = 26;
}
const v147 = { valueOf: f145 };
const v148 = new Date(NaN);
date = v148.setUTCMonth(v147);
function f151() {
    global = 27;
}
const v153 = { valueOf: f151 };
const v154 = new Date(NaN);
date = v154.setFullYear(v153);
function f157() {
    global = 28;
}
const v159 = { valueOf: f157 };
const v160 = new Date(NaN);
date = v160.setUTCFullYear(v159);
function f163() {
    global = 31;
}
const v165 = { valueOf: f163 };
const v166 = new Date(NaN);
date = v166.setSeconds(NaN, v165);
function f169() {
    global = 32;
}
const v171 = { valueOf: f169 };
const v172 = new Date(NaN);
date = v172.setUTCSeconds(NaN, v171);
function f175() {
    global = 33;
}
const v177 = { valueOf: f175 };
const v178 = new Date(NaN);
date = v178.setMinutes(NaN, v177);
function f181() {
    global = 34;
}
const v183 = { valueOf: f181 };
const v184 = new Date(NaN);
date = v184.setUTCMinutes(NaN, v183);
function f187() {
    global = 35;
}
const v189 = { valueOf: f187 };
const v190 = new Date(NaN);
date = v190.setHours(NaN, v189);
function f193() {
    global = 36;
}
const v195 = { valueOf: f193 };
const v196 = new Date(NaN);
date = v196.setUTCHours(NaN, v195);
function f199() {
    global = 39;
}
const v201 = { valueOf: f199 };
const v202 = new Date(NaN);
date = v202.setMonth(NaN, v201);
function f205() {
    global = 40;
}
const v207 = { valueOf: f205 };
const v208 = new Date(NaN);
date = v208.setUTCMonth(NaN, v207);
function f211() {
    global = 41;
}
const v213 = { valueOf: f211 };
const v214 = new Date(NaN);
date = v214.setFullYear(NaN, v213);
function f217() {
    global = 42;
}
const v219 = { valueOf: f217 };
const v220 = new Date(NaN);
date = v220.setUTCFullYear(NaN, v219);
var secondGlobal = 0;
function f225() {
    global = 43;
}
const v227 = { valueOf: f225 };
function f228() {
    secondGlobal = 1;
}
const v230 = { valueOf: f228 };
const v231 = new Date(NaN);
date = v231.setFullYear(v227, v230);
function f235() {
    global = 44;
}
const v237 = { valueOf: f235 };
function f238() {
    secondGlobal = 2;
}
const v240 = { valueOf: f238 };
const v242 = new Date(0);
date = v242.setFullYear(NaN, v237, v240);
function f246() {
    global = 45;
}
const v248 = { valueOf: f246 };
const v250 = new Date(0);
date = v250.setYear(v248);
function f253() {
    global = 46;
}
const v255 = { valueOf: f253 };
const v256 = new Date(NaN);
date = v256.setYear(v255);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
