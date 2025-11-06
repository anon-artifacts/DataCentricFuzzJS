function f0() {
}
const v2 = () => {
    const v6 = Month?.July;
    let v11;
    try { v11 = new Date(2002, v6, 19, 16, 10, 55); } catch (e) {}
    let dt1 = v11;
    const v16 = Month?.December;
    let v21;
    try { v21 = new Date(2009, v16, 24, 13, 44, 52); } catch (e) {}
    let dt2 = v21;
};
try { inTimeZone("Europe/London", v2); } catch (e) {}
const v28 = () => {
    const v32 = Month?.April;
    let v37;
    try { v37 = new Date(2003, v32, 6, 2, 30, 0); } catch (e) {}
    let dt = v37;
};
try { inTimeZone("America/New_York", v28); } catch (e) {}
const v43 = () => {
    const v47 = Month?.November;
    let v52;
    try { v52 = new Date(2014, v47, 2, 1, 47, 42); } catch (e) {}
    let dt = v52;
};
try { inTimeZone("America/Los_Angeles", v43); } catch (e) {}
const v58 = () => {
    const v62 = Month?.November;
    let v67;
    try { v67 = Date.UTC(2015, v62, 1, 0, 0, 0); } catch (e) {}
    const v71 = v67 + (6 * msPerHour);
    let v72;
    try { v72 = new Date(v71); } catch (e) {}
    let dt1 = v72;
    const v77 = Month?.November;
    let v82;
    try { v82 = Date.UTC(2015, v77, 1, 1, 0, 0); } catch (e) {}
    const v85 = v82 + (6 * msPerHour);
    let v86;
    try { v86 = new Date(v85); } catch (e) {}
    let dt2 = v86;
    const v91 = Month?.November;
    let v96;
    try { v96 = Date.UTC(2015, v91, 1, 1, 0, 0); } catch (e) {}
    const v99 = v96 + (7 * msPerHour);
    let v100;
    try { v100 = new Date(v99); } catch (e) {}
    let dt3 = v100;
};
try { inTimeZone("America/Denver", v58); } catch (e) {}
const v106 = () => {
    const v110 = Month?.March;
    let v114;
    try { v114 = new Date(2016, v110, 27, 2, 59); } catch (e) {}
    let dt1 = v114;
    const v119 = Month?.March;
    let v123;
    try { v123 = new Date(2016, v119, 27, 3, 0); } catch (e) {}
    let dt2 = v123;
};
try { inTimeZone("Europe/Helsinki", v106); } catch (e) {}
const v129 = () => {
    let v132;
    try { v132 = new Date(0); } catch (e) {}
    let dt = v132;
    try { dt.getHours(); } catch (e) {}
};
try { inTimeZone("Europe/London", v129); } catch (e) {}
const v138 = () => {
    const v142 = Month?.January;
    let v147;
    try { v147 = new Date(2012, v142, 19, 12, 54, 27); } catch (e) {}
    let dt = v147;
};
try { inTimeZone("Pacific/Auckland", v138); } catch (e) {}
const v153 = () => {
    const v157 = Month?.March;
    let v162;
    try { v162 = new Date(2009, v157, 29, 1, 0, 0); } catch (e) {}
    let dt1 = v162;
    let v166;
    try { v166 = dt1.getHours(); } catch (e) {}
    const v168 = v166 + 1;
    try { dt1.setHours(v168); } catch (e) {}
    const v173 = Month?.March;
    let v178;
    try { v178 = new Date(2010, v173, 29, 1, 0, 0); } catch (e) {}
    let dt2 = v178;
    let v182;
    try { v182 = dt2.getHours(); } catch (e) {}
    const v184 = v182 + 1;
    try { dt2.setHours(v184); } catch (e) {}
};
try { inTimeZone("Europe/Paris", v153); } catch (e) {}
const v190 = () => {
    const v194 = Month?.March;
    let v199;
    try { v199 = new Date(2009, v194, 8, 1, 0, 0); } catch (e) {}
    let dt = v199;
    let v203;
    try { v203 = dt.getHours(); } catch (e) {}
    const v205 = v203 + 1;
    try { dt.setHours(v205); } catch (e) {}
};
try { inTimeZone("America/New_York", v190); } catch (e) {}
const v211 = () => {
    const v215 = Month?.March;
    let v220;
    try { v220 = new Date(2009, v215, 8, 1, 0, 0); } catch (e) {}
    let dt = v220;
    let v224;
    try { v224 = dt.getHours(); } catch (e) {}
    const v226 = v224 + 1;
    try { dt.setHours(v226); } catch (e) {}
};
try { inTimeZone("America/Denver", v211); } catch (e) {}
const v232 = () => {
    const v236 = Month?.March;
    let v241;
    try { v241 = Date.UTC(2008, v236, 9, 0, 0, 0); } catch (e) {}
    const v245 = v241 + (5 * msPerHour);
    let v246;
    try { v246 = new Date(v245); } catch (e) {}
    let dt1 = v246;
    const v251 = Month?.March;
    let v256;
    try { v256 = Date.UTC(2008, v251, 9, 1, 0, 0); } catch (e) {}
    const v259 = v256 + (5 * msPerHour);
    let v260;
    try { v260 = new Date(v259); } catch (e) {}
    let dt2 = v260;
    const v265 = Month?.March;
    let v270;
    try { v270 = Date.UTC(2008, v265, 9, 4, 0, 0); } catch (e) {}
    const v273 = v270 + (4 * msPerHour);
    let v274;
    try { v274 = new Date(v273); } catch (e) {}
    let dt3 = v274;
};
try { inTimeZone("America/New_York", v232); } catch (e) {}
const v280 = () => {
    const v284 = Month?.March;
    let v289;
    try { v289 = Date.UTC(2008, v284, 30, 0, 0, 0); } catch (e) {}
    const v293 = v289 - (1 * msPerHour);
    let v294;
    try { v294 = new Date(v293); } catch (e) {}
    let dt1 = v294;
    const v299 = Month?.March;
    let v304;
    try { v304 = Date.UTC(2008, v299, 30, 1, 0, 0); } catch (e) {}
    const v307 = v304 - (1 * msPerHour);
    let v308;
    try { v308 = new Date(v307); } catch (e) {}
    let dt2 = v308;
    const v313 = Month?.March;
    let v318;
    try { v318 = Date.UTC(2008, v313, 30, 3, 0, 0); } catch (e) {}
    const v321 = v318 - (2 * msPerHour);
    let v322;
    try { v322 = new Date(v321); } catch (e) {}
    let dt3 = v322;
    const v327 = Month?.March;
    let v332;
    try { v332 = Date.UTC(2008, v327, 30, 4, 0, 0); } catch (e) {}
    const v335 = v332 - (2 * msPerHour);
    let v336;
    try { v336 = new Date(v335); } catch (e) {}
    let dt4 = v336;
};
try { inTimeZone("Europe/Paris", v280); } catch (e) {}
const v342 = () => {
    let v345;
    try { v345 = new Date(0); } catch (e) {}
    let dt = v345;
};
try { inTimeZone("America/New_York", v342); } catch (e) {}
const v351 = () => {
    const v355 = Month?.October;
    let v360;
    try { v360 = Date.UTC(2012, v355, 28, 0, 59, 59); } catch (e) {}
    let v361;
    try { v361 = new Date(v360); } catch (e) {}
    let dt1 = v361;
    const v366 = Month?.October;
    let v371;
    try { v371 = Date.UTC(2012, v366, 28, 1, 0, 0); } catch (e) {}
    let v372;
    try { v372 = new Date(v371); } catch (e) {}
    let dt2 = v372;
    const v377 = Month?.October;
    let v382;
    try { v382 = Date.UTC(2012, v377, 28, 1, 59, 59); } catch (e) {}
    let v383;
    try { v383 = new Date(v382); } catch (e) {}
    let dt3 = v383;
    const v388 = Month?.October;
    let v393;
    try { v393 = Date.UTC(2012, v388, 28, 2, 0, 0); } catch (e) {}
    let v394;
    try { v394 = new Date(v393); } catch (e) {}
    let dt4 = v394;
};
try { inTimeZone("Europe/London", v351); } catch (e) {}
const v400 = () => {
    let v403;
    try { v403 = new Date(1362891600000); } catch (e) {}
    let dt1 = v403;
    let v407;
    try { v407 = dt1.getHours(); } catch (e) {}
    const v409 = v407 + 24;
    let v410;
    try { v410 = dt1.setHours(v409); } catch (e) {}
    let v411;
    try { v411 = new Date(v410); } catch (e) {}
    let dt2 = v411;
};
try { inTimeZone("America/New_York", v400); } catch (e) {}
const v417 = () => {
    const v421 = Month?.January;
    let v423;
    try { v423 = new Date(2014, v421, 1); } catch (e) {}
    let dt1 = v423;
    const v428 = Month?.August;
    let v430;
    try { v430 = new Date(2014, v428, 1); } catch (e) {}
    let dt2 = v430;
};
try { inTimeZone("America/Los_Angeles", v417); } catch (e) {}
const v436 = () => {
    const v440 = Month?.October;
    let v445;
    try { v445 = new Date(2016, v440, 14, 3, 5, 9); } catch (e) {}
    let dt1 = v445;
    const v450 = Month?.January;
    let v455;
    try { v455 = new Date(2016, v450, 9, 23, 26, 40); } catch (e) {}
    let dt2 = v455;
};
try { inTimeZone("America/New_York", v436); } catch (e) {}
const v461 = () => {
    const v465 = Month?.March;
    let v469;
    try { v469 = new Date(2014, v465, 30, 2, 0); } catch (e) {}
    let dt1 = v469;
    const v474 = Month?.March;
    let v478;
    try { v478 = new Date(2014, v474, 30, 3, 0); } catch (e) {}
    let dt2 = v478;
    const v483 = Month?.March;
    let v487;
    try { v487 = new Date(2014, v483, 30, 4, 0); } catch (e) {}
    let dt3 = v487;
};
try { inTimeZone("Europe/Vienna", v461); } catch (e) {}
const v493 = () => {
    const v497 = Month?.October;
    let v499;
    try { v499 = new Date(2014, v497, 19); } catch (e) {}
    let dt = v499;
    try { dt.getDate(); } catch (e) {}
    try { dt.getHours(); } catch (e) {}
};
try { inTimeZone("America/Sao_Paulo", v493); } catch (e) {}
const v510 = () => {
    let v513;
    try { v513 = Date.parse("2014-11-02T02:00:00-04:00"); } catch (e) {}
    let v514;
    try { v514 = new Date(v513); } catch (e) {}
    let dt = v514;
    try { dt.setMilliseconds(0); } catch (e) {}
};
try { inTimeZone("America/New_York", v510); } catch (e) {}
const v524 = () => {
    const v528 = Month?.January;
    let v530;
    try { v530 = new Date(1965, v528, 1); } catch (e) {}
    let dt = v530;
    try { dt.getFullYear(); } catch (e) {}
};
try { inTimeZone("Europe/London", v524); } catch (e) {}
const v536 = () => {
    const v540 = Month?.March;
    let v542;
    try { v542 = new Date(1981, v540, 32); } catch (e) {}
    let dt1 = v542;
    try { dt1.getDate(); } catch (e) {}
    const v547 = Month?.March;
    let v549;
    try { v549 = new Date(1982, v547, 32); } catch (e) {}
    let dt2 = v549;
    try { dt2.getDate(); } catch (e) {}
    const v554 = Month?.March;
    let v556;
    try { v556 = new Date(1983, v554, 32); } catch (e) {}
    let dt3 = v556;
    try { dt3.getDate(); } catch (e) {}
    const v561 = Month?.March;
    let v563;
    try { v563 = new Date(1984, v561, 32); } catch (e) {}
    let dt4 = v563;
    try { dt4.getDate(); } catch (e) {}
};
try { inTimeZone("Europe/Moscow", v536); } catch (e) {}
const v569 = () => {
    const v573 = Month?.March;
    let v578;
    try { v578 = new Date(2017, v573, 25, 0, 0, 0); } catch (e) {}
    let dt1 = v578;
    const v584 = Month?.October;
    let v589;
    try { v589 = new Date(2016, v584, 30, 0, 0, 0); } catch (e) {}
    let dt2 = v589;
    const v595 = Month?.October;
    let v600;
    try { v600 = new Date(2016, v595, 30, 23, 0, 0); } catch (e) {}
    let dt3 = v600;
};
try { inTimeZone("Atlantic/Azores", v569); } catch (e) {}
const v607 = () => {
    const v611 = Month?.September;
    let v616;
    try { v616 = new Date(2016, v611, 15, 16, 14, 48); } catch (e) {}
    let dt = v616;
};
try { inTimeZone("America/New_York", v607); } catch (e) {}
const v622 = () => {
    const v626 = Month?.March;
    let v632;
    try { v632 = new Date(2016, v626, 13, 2, 30, 0, 0); } catch (e) {}
    let dt = v632;
    const v637 = Month?.January;
    let v643;
    try { v643 = new Date(2016, v637, 5, 0, 30, 30, 500); } catch (e) {}
    let dt2 = v643;
    let v647;
    try { v647 = dt2.getTime(); } catch (e) {}
    let v648;
    try { v648 = new Date(v647); } catch (e) {}
    let dt3 = v648;
    let v650;
    try { v650 = dt2.getMonth(); } catch (e) {}
    const v652 = v650 + 2;
    try { dt3.setMonth(v652); } catch (e) {}
    let v654;
    try { v654 = dt2.getDate(); } catch (e) {}
    const v658 = (v654 + 7) + 1;
    try { dt3.setDate(v658); } catch (e) {}
    let v660;
    try { v660 = dt2.getHours(); } catch (e) {}
    const v662 = v660 + 2;
    try { dt3.setHours(v662); } catch (e) {}
    try { dt3.getHours(); } catch (e) {}
};
try { inTimeZone("America/Los_Angeles", v622); } catch (e) {}
const v668 = () => {
    const v672 = Month?.March;
    let v678;
    try { v678 = new Date(2013, v672, 22, 1, 0, 0, 0); } catch (e) {}
    let dt1 = v678;
    const v683 = Month?.March;
    let v689;
    try { v689 = new Date(2013, v683, 22, 2, 0, 0, 0); } catch (e) {}
    let dt2 = v689;
    const v694 = Month?.March;
    let v700;
    try { v700 = new Date(2013, v694, 22, 3, 0, 0, 0); } catch (e) {}
    let dt3 = v700;
    const v705 = Month?.March;
    let v711;
    try { v711 = new Date(2013, v705, 29, 1, 0, 0, 0); } catch (e) {}
    let dt4 = v711;
    const v716 = Month?.March;
    let v722;
    try { v722 = new Date(2013, v716, 29, 2, 0, 0, 0); } catch (e) {}
    let dt5 = v722;
    const v727 = Month?.March;
    let v733;
    try { v733 = new Date(2013, v727, 29, 3, 0, 0, 0); } catch (e) {}
    let dt6 = v733;
};
try { inTimeZone("Asia/Jerusalem", v668); } catch (e) {}
const v739 = () => {
    const v743 = Month?.April;
    let v748;
    try { v748 = new Date(2017, v743, 10, 17, 25, 7); } catch (e) {}
    let dt = v748;
};
try { inTimeZone("America/Los_Angeles", v739); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
