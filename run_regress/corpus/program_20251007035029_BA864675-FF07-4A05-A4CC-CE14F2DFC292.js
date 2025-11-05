function f0() {
}
const v2 = () => {
    const v6 = Month?.April;
    let v11;
    try { v11 = new Date(2003, v6, 6, 2, 30, 0); } catch (e) {}
    let dt = v11;
};
try { inTimeZone("EST5EDT", v2); } catch (e) {}
const v18 = () => {
    const v22 = Month?.November;
    let v27;
    try { v27 = new Date(2014, v22, 2, 1, 47, 42); } catch (e) {}
    let dt = v27;
};
try { inTimeZone("PST8PDT", v18); } catch (e) {}
const v33 = () => {
    const v37 = Month?.November;
    let v42;
    try { v42 = Date.UTC(2015, v37, 1, 0, 0, 0); } catch (e) {}
    const v46 = v42 + (6 * msPerHour);
    let v47;
    try { v47 = new Date(v46); } catch (e) {}
    let dt1 = v47;
    const v52 = Month?.November;
    let v57;
    try { v57 = Date.UTC(2015, v52, 1, 1, 0, 0); } catch (e) {}
    const v60 = v57 + (6 * msPerHour);
    let v61;
    try { v61 = new Date(v60); } catch (e) {}
    let dt2 = v61;
    const v66 = Month?.November;
    let v71;
    try { v71 = Date.UTC(2015, v66, 1, 1, 0, 0); } catch (e) {}
    const v74 = v71 + (7 * msPerHour);
    let v75;
    try { v75 = new Date(v74); } catch (e) {}
    let dt3 = v75;
};
try { inTimeZone("MST7MDT", v33); } catch (e) {}
const v81 = () => {
    const v85 = Month?.March;
    let v90;
    try { v90 = new Date(2009, v85, 8, 1, 0, 0); } catch (e) {}
    let dt = v90;
    let v94;
    try { v94 = dt.getHours(); } catch (e) {}
    const v96 = v94 + 1;
    try { dt.setHours(v96); } catch (e) {}
};
try { inTimeZone("EST5EDT", v81); } catch (e) {}
const v102 = () => {
    const v106 = Month?.March;
    let v111;
    try { v111 = new Date(2009, v106, 8, 1, 0, 0); } catch (e) {}
    let dt = v111;
    let v115;
    try { v115 = dt.getHours(); } catch (e) {}
    const v117 = v115 + 1;
    try { dt.setHours(v117); } catch (e) {}
};
try { inTimeZone("MST7MDT", v102); } catch (e) {}
const v123 = () => {
    const v127 = Month?.March;
    let v132;
    try { v132 = Date.UTC(2008, v127, 9, 0, 0, 0); } catch (e) {}
    const v136 = v132 + (5 * msPerHour);
    let v137;
    try { v137 = new Date(v136); } catch (e) {}
    let dt1 = v137;
    const v142 = Month?.March;
    let v147;
    try { v147 = Date.UTC(2008, v142, 9, 1, 0, 0); } catch (e) {}
    const v150 = v147 + (5 * msPerHour);
    let v151;
    try { v151 = new Date(v150); } catch (e) {}
    let dt2 = v151;
    const v156 = Month?.March;
    let v161;
    try { v161 = Date.UTC(2008, v156, 9, 4, 0, 0); } catch (e) {}
    const v164 = v161 + (4 * msPerHour);
    let v165;
    try { v165 = new Date(v164); } catch (e) {}
    let dt3 = v165;
};
try { inTimeZone("EST5EDT", v123); } catch (e) {}
const v171 = () => {
    let v174;
    try { v174 = new Date(0); } catch (e) {}
    let dt = v174;
};
try { inTimeZone("EST5EDT", v171); } catch (e) {}
const v180 = () => {
    let v183;
    try { v183 = new Date(1362891600000); } catch (e) {}
    let dt1 = v183;
    let v187;
    try { v187 = dt1.getHours(); } catch (e) {}
    const v189 = v187 + 24;
    let v190;
    try { v190 = dt1.setHours(v189); } catch (e) {}
    let v191;
    try { v191 = new Date(v190); } catch (e) {}
    let dt2 = v191;
};
try { inTimeZone("EST5EDT", v180); } catch (e) {}
const v197 = () => {
    const v201 = Month?.January;
    let v203;
    try { v203 = new Date(2014, v201, 1); } catch (e) {}
    let dt1 = v203;
    const v208 = Month?.August;
    let v210;
    try { v210 = new Date(2014, v208, 1); } catch (e) {}
    let dt2 = v210;
};
try { inTimeZone("PST8PDT", v197); } catch (e) {}
const v216 = () => {
    const v220 = Month?.October;
    let v225;
    try { v225 = new Date(2016, v220, 14, 3, 5, 9); } catch (e) {}
    let dt1 = v225;
    const v230 = Month?.January;
    let v235;
    try { v235 = new Date(2016, v230, 9, 23, 26, 40); } catch (e) {}
    let dt2 = v235;
};
try { inTimeZone("EST5EDT", v216); } catch (e) {}
const v241 = () => {
    let v244;
    try { v244 = Date.parse("2014-11-02T02:00:00-04:00"); } catch (e) {}
    let v245;
    try { v245 = new Date(v244); } catch (e) {}
    let dt = v245;
    try { dt.setMilliseconds(0); } catch (e) {}
};
try { inTimeZone("EST5EDT", v241); } catch (e) {}
const v255 = () => {
    const v259 = Month?.September;
    let v264;
    try { v264 = new Date(2016, v259, 15, 16, 14, 48); } catch (e) {}
    let dt = v264;
};
try { inTimeZone("EST5EDT", v255); } catch (e) {}
const v270 = () => {
    const v274 = Month?.March;
    let v280;
    try { v280 = new Date(2016, v274, 13, 2, 30, 0, 0); } catch (e) {}
    let dt = v280;
    const v285 = Month?.January;
    let v291;
    try { v291 = new Date(2016, v285, 5, 0, 30, 30, 500); } catch (e) {}
    let dt2 = v291;
    let v295;
    try { v295 = dt2.getTime(); } catch (e) {}
    let v296;
    try { v296 = new Date(v295); } catch (e) {}
    let dt3 = v296;
    let v298;
    try { v298 = dt2.getMonth(); } catch (e) {}
    const v300 = v298 + 2;
    try { dt3.setMonth(v300); } catch (e) {}
    let v302;
    try { v302 = dt2.getDate(); } catch (e) {}
    const v306 = (v302 + 7) + 1;
    try { dt3.setDate(v306); } catch (e) {}
    let v308;
    try { v308 = dt2.getHours(); } catch (e) {}
    const v310 = v308 + 2;
    try { dt3.setHours(v310); } catch (e) {}
    try { dt3.getHours(); } catch (e) {}
};
try { inTimeZone("PST8PDT", v270); } catch (e) {}
const v316 = () => {
    const v320 = Month?.April;
    let v325;
    try { v325 = new Date(2017, v320, 10, 17, 25, 7); } catch (e) {}
    let dt = v325;
};
try { inTimeZone("PST8PDT", v316); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
