let v2;
try { v2 = new Date(1111); } catch (e) {}
var date0 = v2;
let v4;
try { v4 = new Date(date0); } catch (e) {}
var date1 = v4;
try { date0.getTime(); } catch (e) {}
try { date0.getTime(); } catch (e) {}
try { date1.getTime(); } catch (e) {}
let v10;
try { v10 = date0.toString(); } catch (e) {}
let v11;
try { v11 = new Date(v10); } catch (e) {}
var date2 = v11;
try { date2.getTime(); } catch (e) {}
let v16;
try { v16 = Date.parse("Dec 25 1995 1:30"); } catch (e) {}
var date0 = v16;
let v19;
try { v19 = Date.parse("Dec 25, 1995 1:30"); } catch (e) {}
var date1 = v19;
let v22;
try { v22 = Date.parse("Dec 25 1995, 1:30"); } catch (e) {}
var date2 = v22;
let v25;
try { v25 = Date.parse("Dec 25, 1995, 1:30"); } catch (e) {}
var date3 = v25;
let v28;
try { v28 = new Date(8640000000000000); } catch (e) {}
var dMax = v28;
try { dMax.getTime(); } catch (e) {}
try { dMax.getFullYear(); } catch (e) {}
try { dMax.getMonth(); } catch (e) {}
try { dMax.getUTCDate(); } catch (e) {}
const v40 = 8640000000000000 + 1;
let v41;
try { v41 = new Date(v40); } catch (e) {}
var dOverflow = v41;
let v43;
try { v43 = dOverflow.getTime(); } catch (e) {}
try { isNaN(v43); } catch (e) {}
const v47 = -8640000000000000;
let v48;
try { v48 = new Date(v47); } catch (e) {}
var dMin = v48;
-8640000000000000;
try { dMin.getTime(); } catch (e) {}
-271821;
try { dMin.getFullYear(); } catch (e) {}
try { dMin.getMonth(); } catch (e) {}
try { dMin.getUTCDate(); } catch (e) {}
const v63 = -8640000000000000 - 1;
let v64;
try { v64 = new Date(v63); } catch (e) {}
var dUnderflow = v64;
let v66;
try { v66 = dUnderflow.getTime(); } catch (e) {}
try { isNaN(v66); } catch (e) {}
let v68;
try { v68 = new Date(); } catch (e) {}
var a = v68;
try { a.setFullYear(); } catch (e) {}
try { a.setFullYear(2006); } catch (e) {}
try { a.getFullYear(); } catch (e) {}
let v75;
try { v75 = new Date(); } catch (e) {}
var b = v75;
try { b.setUTCFullYear(); } catch (e) {}
try { b.setUTCFullYear(2006); } catch (e) {}
try { b.getUTCFullYear(); } catch (e) {}
let v82;
try { v82 = new Date(); } catch (e) {}
var c = v82;
try { c.setMonth(); } catch (e) {}
try { c.setMonth(2); } catch (e) {}
let v87;
try { v87 = c.getMonth(); } catch (e) {}
try { isNaN(v87); } catch (e) {}
let v89;
try { v89 = new Date(); } catch (e) {}
var d = v89;
try { d.setUTCMonth(); } catch (e) {}
try { d.setUTCMonth(2); } catch (e) {}
let v94;
try { v94 = d.getUTCMonth(); } catch (e) {}
try { isNaN(v94); } catch (e) {}
let v96;
try { v96 = new Date(); } catch (e) {}
var e = v96;
try { e.setDate(); } catch (e) {}
try { e.setDate(2); } catch (e) {}
let v101;
try { v101 = e.getDate(); } catch (e) {}
try { isNaN(v101); } catch (e) {}
let v103;
try { v103 = new Date(); } catch (e) {}
var f = v103;
try { f.setUTCDate(); } catch (e) {}
try { f.setUTCDate(2); } catch (e) {}
let v108;
try { v108 = f.getUTCDate(); } catch (e) {}
try { isNaN(v108); } catch (e) {}
let v110;
try { v110 = new Date(); } catch (e) {}
var g = v110;
try { g.setHours(); } catch (e) {}
try { g.setHours(2); } catch (e) {}
let v115;
try { v115 = g.getHours(); } catch (e) {}
try { isNaN(v115); } catch (e) {}
let v117;
try { v117 = new Date(); } catch (e) {}
var h = v117;
try { h.setUTCHours(); } catch (e) {}
try { h.setUTCHours(2); } catch (e) {}
let v122;
try { v122 = h.getUTCHours(); } catch (e) {}
try { isNaN(v122); } catch (e) {}
let v124;
try { v124 = new Date(); } catch (e) {}
var g = v124;
try { g.setMinutes(); } catch (e) {}
try { g.setMinutes(2); } catch (e) {}
let v129;
try { v129 = g.getMinutes(); } catch (e) {}
try { isNaN(v129); } catch (e) {}
let v131;
try { v131 = new Date(); } catch (e) {}
var h = v131;
try { h.setUTCHours(); } catch (e) {}
try { h.setUTCHours(2); } catch (e) {}
let v136;
try { v136 = h.getUTCHours(); } catch (e) {}
try { isNaN(v136); } catch (e) {}
let v138;
try { v138 = new Date(); } catch (e) {}
var i = v138;
try { i.setSeconds(); } catch (e) {}
try { i.setSeconds(2); } catch (e) {}
let v143;
try { v143 = i.getSeconds(); } catch (e) {}
try { isNaN(v143); } catch (e) {}
let v145;
try { v145 = new Date(); } catch (e) {}
var j = v145;
try { j.setUTCSeconds(); } catch (e) {}
try { j.setUTCSeconds(2); } catch (e) {}
let v150;
try { v150 = j.getUTCSeconds(); } catch (e) {}
try { isNaN(v150); } catch (e) {}
let v152;
try { v152 = new Date(); } catch (e) {}
var k = v152;
try { k.setMilliseconds(); } catch (e) {}
try { k.setMilliseconds(2); } catch (e) {}
let v157;
try { v157 = k.getMilliseconds(); } catch (e) {}
try { isNaN(v157); } catch (e) {}
let v159;
try { v159 = new Date(); } catch (e) {}
var l = v159;
try { l.setUTCMilliseconds(); } catch (e) {}
try { l.setUTCMilliseconds(2); } catch (e) {}
let v164;
try { v164 = l.getUTCMilliseconds(); } catch (e) {}
try { isNaN(v164); } catch (e) {}
let v166;
try { v166 = new Date(); } catch (e) {}
var d = v166;
"new Date(0x40000000, 0x40000000, 0x40000000," + "0x40000000, 0x40000000, 0x40000000, 0x40000000)";
"new Date(-0x40000001, -0x40000001, -0x40000001," + "-0x40000001, -0x40000001, -0x40000001, -0x40000001)";
let v178;
try { v178 = new Date(2018, 0); } catch (e) {}
d = v178;
let v182;
try { v182 = new Date(2018, 0, 11); } catch (e) {}
try { Date.parse(v182); } catch (e) {}
try { d.setDate(11.2); } catch (e) {}
try { d.getHours(); } catch (e) {}
try { Date.UTC(275760, 8, 12, 23, 59, 59, 999); } catch (e) {}
try { Date.UTC(275760, 8, 13); } catch (e) {}
let v209;
try { v209 = Date.UTC(275760, 8, 13, 0, 0, 0, 1); } catch (e) {}
try { isNaN(v209); } catch (e) {}
let v214;
try { v214 = Date.UTC(275760, 8, 14); } catch (e) {}
try { isNaN(v214); } catch (e) {}
const v217 = -271821;
try { Date.UTC(v217, 3, 20, 0, 0, 0, 1); } catch (e) {}
-8639999999999999;
const v228 = -271821;
try { Date.UTC(v228, 3, 20); } catch (e) {}
-8640000000000000;
const v235 = -271821;
let v242;
try { v242 = Date.UTC(v235, 3, 19, 23, 59, 59, 999); } catch (e) {}
try { isNaN(v242); } catch (e) {}
const v245 = -271821;
let v248;
try { v248 = Date.UTC(v245, 3, 19); } catch (e) {}
try { isNaN(v248); } catch (e) {}
let v254;
try { v254 = new Date(1969, 12, 1, 99999999999); } catch (e) {}
d = v254;
let v255;
try { v255 = d.getTime(); } catch (e) {}
try { isNaN(v255); } catch (e) {}
const v261 = -99999999999;
let v262;
try { v262 = new Date(1969, 12, 1, v261); } catch (e) {}
d = v262;
let v263;
try { v263 = d.getTime(); } catch (e) {}
try { isNaN(v263); } catch (e) {}
let v269;
try { v269 = new Date(1969, 12, 1, Infinity); } catch (e) {}
d = v269;
let v270;
try { v270 = d.getTime(); } catch (e) {}
try { isNaN(v270); } catch (e) {}
const v275 = -Infinity;
let v276;
try { v276 = new Date(1969, 12, 1, v275); } catch (e) {}
d = v276;
let v277;
try { v277 = d.getTime(); } catch (e) {}
try { isNaN(v277); } catch (e) {}
let v283;
try { v283 = new Date(1969, 12, 1, 0); } catch (e) {}
d = v283;
let v287;
try { v287 = Math.pow(2, 64); } catch (e) {}
try { d.setTime(v287); } catch (e) {}
let v289;
try { v289 = d.getTime(); } catch (e) {}
try { isNaN(v289); } catch (e) {}
let v295;
try { v295 = new Date(1969, 12, 1, 0); } catch (e) {}
d = v295;
const v297 = -2;
let v299;
try { v299 = Math.pow(v297, 64); } catch (e) {}
try { d.setTime(v299); } catch (e) {}
let v301;
try { v301 = d.getTime(); } catch (e) {}
try { isNaN(v301); } catch (e) {}
const v308 = 1 + 100000001;
const v310 = -24;
try { Date.UTC(1970, 0, v308, v310); } catch (e) {}
-8640000000000000;
const v318 = 1 - 100000001;
try { Date.UTC(1970, 0, v318, 24); } catch (e) {}
try { Date.parse("1970-01-01T00:00:00.000+00:00"); } catch (e) {}
try { Date.parse("1970-01-01T00:00:00.000-00:00"); } catch (e) {}
try { Date.parse("1970-01-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("1970-01-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("1970-01-01T00:00:00Z"); } catch (e) {}
try { Date.parse("1970-01-01T00:00Z"); } catch (e) {}
try { Date.parse("1970-01-01Z"); } catch (e) {}
try { Date.parse("1970-01T00:00:00.000+00:00"); } catch (e) {}
try { Date.parse("1970-01T00:00:00.000-00:00"); } catch (e) {}
try { Date.parse("1970-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("1970-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("1970-01T00:00:00Z"); } catch (e) {}
try { Date.parse("1970-01T00:00Z"); } catch (e) {}
try { Date.parse("1970-01Z"); } catch (e) {}
try { Date.parse("1970T00:00:00.000+00:00"); } catch (e) {}
try { Date.parse("1970T00:00:00.000-00:00"); } catch (e) {}
try { Date.parse("1970T00:00:00.000Z"); } catch (e) {}
try { Date.parse("1970T00:00:00.000Z"); } catch (e) {}
try { Date.parse("1970T00:00:00Z"); } catch (e) {}
try { Date.parse("1970T00:00Z"); } catch (e) {}
try { Date.parse("1970Z"); } catch (e) {}
try { Date.parse("+001970-01-01T00:00:00.000+00:00"); } catch (e) {}
try { Date.parse("+001970-01-01T00:00:00.000-00:00"); } catch (e) {}
try { Date.parse("+001970-01-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("+001970-01-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("+001970-01-01T00:00:00Z"); } catch (e) {}
try { Date.parse("+001970-01-01T00:00Z"); } catch (e) {}
try { Date.parse("+001970-01-01Z"); } catch (e) {}
try { Date.parse("+001970-01T00:00:00.000+00:00"); } catch (e) {}
try { Date.parse("+001970-01T00:00:00.000-00:00"); } catch (e) {}
try { Date.parse("+001970-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("+001970-01T00:00:00.000Z"); } catch (e) {}
try { Date.parse("+001970-01T00:00:00Z"); } catch (e) {}
try { Date.parse("+001970-01T00:00Z"); } catch (e) {}
try { Date.parse("+001970-01Z"); } catch (e) {}
try { Date.parse("+001970T00:00:00.000+00:00"); } catch (e) {}
try { Date.parse("+001970T00:00:00.000-00:00"); } catch (e) {}
try { Date.parse("+001970T00:00:00.000Z"); } catch (e) {}
try { Date.parse("+001970T00:00:00.000Z"); } catch (e) {}
try { Date.parse("+001970T00:00:00Z"); } catch (e) {}
try { Date.parse("+001970T00:00Z"); } catch (e) {}
try { Date.parse("+001970Z"); } catch (e) {}
try { Date.parse("1972-03-28T23:50:03.500+01:00"); } catch (e) {}
try { Date.parse("1972-03-28T23:50:03.500Z"); } catch (e) {}
try { Date.parse("1972-03-28T23:50:03.500Z"); } catch (e) {}
try { Date.parse("1972-03-28T23:50:03Z"); } catch (e) {}
try { Date.parse("1972-03-28T23:50Z"); } catch (e) {}
try { Date.parse("1972-03-28Z"); } catch (e) {}
try { Date.parse("1972-03T23:50:03.500+01:00"); } catch (e) {}
try { Date.parse("1972-03T23:50:03.500Z"); } catch (e) {}
try { Date.parse("1972-03T23:50:03.500Z"); } catch (e) {}
try { Date.parse("1972-03T23:50:03Z"); } catch (e) {}
try { Date.parse("1972-03T23:50Z"); } catch (e) {}
try { Date.parse("1972-03Z"); } catch (e) {}
try { Date.parse("1972T23:50:03.500+01:00"); } catch (e) {}
try { Date.parse("1972T23:50:03.500Z"); } catch (e) {}
try { Date.parse("1972T23:50:03.500Z"); } catch (e) {}
try { Date.parse("1972T23:50:03Z"); } catch (e) {}
try { Date.parse("1972Z"); } catch (e) {}
try { Date.parse("+001972-03-28T23:50:03.500+01:00"); } catch (e) {}
try { Date.parse("+001972-03-28T23:50:03.500Z"); } catch (e) {}
try { Date.parse("+001972-03-28T23:50:03.500Z"); } catch (e) {}
try { Date.parse("+001972-03-28T23:50:03Z"); } catch (e) {}
try { Date.parse("+001972-03-28T23:50Z"); } catch (e) {}
try { Date.parse("+001972-03-28Z"); } catch (e) {}
try { Date.parse("+001972-03T23:50:03.500+01:00"); } catch (e) {}
try { Date.parse("+001972-03T23:50:03.500Z"); } catch (e) {}
try { Date.parse("+001972-03T23:50:03.500Z"); } catch (e) {}
try { Date.parse("+001972-03T23:50:03Z"); } catch (e) {}
try { Date.parse("+001972-03T23:50Z"); } catch (e) {}
try { Date.parse("+001972-03Z"); } catch (e) {}
try { Date.parse("+001972T23:50:03.500+01:00"); } catch (e) {}
try { Date.parse("+001972T23:50:03.500Z"); } catch (e) {}
try { Date.parse("+001972T23:50:03.500Z"); } catch (e) {}
try { Date.parse("+001972T23:50:03Z"); } catch (e) {}
try { Date.parse("+001972Z"); } catch (e) {}
-60904915200000;
try { Date.parse("0040-01-01T00:00Z"); } catch (e) {}
-60273763200000;
try { Date.parse("0060-01-01T00:00Z"); } catch (e) {}
-62167219200000;
try { Date.parse("0000-01-01T00:00Z"); } catch (e) {}
-62167219200000;
try { Date.parse("+000000-01-01T00:00Z"); } catch (e) {}
-63429523200000;
try { Date.parse("-000040-01-01Z"); } catch (e) {}
-64060675200000;
try { Date.parse("-000060-01-01Z"); } catch (e) {}
-124397510400000;
try { Date.parse("-001972-01-01Z"); } catch (e) {}
try { Date.parse("1972-03-28T23:50:03.500Z"); } catch (e) {}
for (let i581 = 0; i581 < 24; i581++) {
    var hh = i581 < 10 ? "0" + i581 : "" + i581;
    for (let i596 = 0; i596 < 60; i596 += 15) {
        var mm = i596 < 10 ? "0" + i596 : "" + i596;
        var ms = ((i581 * 60) + i596) * 60000;
        var string = (("1972-03-28T23:50:03.500-" + hh) + ":") + mm;
        70674603500 + ms;
        try { Date.parse(string); } catch (e) {}
        string = (("1972-03-28T23:50:03.500+" + hh) + ":") + mm;
        70674603500 - ms;
        try { Date.parse(string); } catch (e) {}
    }
}
let v635;
try { v635 = new Date("0020-01-01T00:00:00Z"); } catch (e) {}
try { v635.toUTCString(); } catch (e) {}
let dateRegExp = /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [0-9]{2} [0-9]{4}$/;
let v640;
try { v640 = new Date("0020-01-01T00:00:00Z"); } catch (e) {}
let v641;
try { v641 = v640.toDateString(); } catch (e) {}
let v642;
try { v642 = dateRegExp.exec(v641); } catch (e) {}
match = v642;
let stringRegExp = /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4}( \(.+\))?$/;
let v648;
try { v648 = new Date("0020-01-01T00:00:00Z"); } catch (e) {}
let v649;
try { v649 = v648.toString(); } catch (e) {}
let v650;
try { v650 = stringRegExp.exec(v649); } catch (e) {}
match = v650;
function f657() {
    const v660 = Date?.prototype?.getTime;
    try { v660.call(0); } catch (e) {}
}
try { f657(); } catch (e) {}
function f663() {
    const v666 = Date?.prototype?.getTime;
    try { v666.call(""); } catch (e) {}
}
try { f663(); } catch (e) {}
function f669() {
    const v672 = Date?.prototype?.getYear;
    try { v672.call(0); } catch (e) {}
}
try { f669(); } catch (e) {}
function f675() {
    const v678 = Date?.prototype?.getYear;
    try { v678.call(""); } catch (e) {}
}
try { f675(); } catch (e) {}
function TestDatePrototypeOrdinaryObject() {
    Object?.prototype;
    Date?.prototype?.__proto__;
    function f686() {
        const v687 = Date?.prototype;
        try { v687.toString(); } catch (e) {}
    }
    try { f686(); } catch (e) {}
}
try { TestDatePrototypeOrdinaryObject(); } catch (e) {}
const t405 = Date?.prototype;
delete t405?.getUTCFullYear;
const t406 = Date?.prototype;
delete t406?.getUTCMonth;
const t408 = Date?.prototype;
delete t408?.getUTCDate;
const t410 = Date?.prototype;
delete t410?.getUTCHours;
const t412 = Date?.prototype;
delete t412?.getUTCMinutes;
const t414 = Date?.prototype;
delete t414?.getUTCSeconds;
const t416 = Date?.prototype;
delete t416?.getUTCMilliseconds;
let v705;
try { v705 = new Date(); } catch (e) {}
try { v705.toISOString(); } catch (e) {}
function TestDeleteToString() {
    const t423 = Date?.prototype;
    delete t423?.toString;
    let v711;
    try { v711 = Date(); } catch (e) {}
    "[object Date]" !== v711;
}
try { TestDeleteToString(); } catch (e) {}
-8640000000000000;
try { Date.parse("-271821-04-20T00:00:00.000Z"); } catch (e) {}
try { Date.parse("+275760-09-13T00:00:00.000Z"); } catch (e) {}
let v722;
try { v722 = Date.parse("-271821-04-19T00:00:00.000Z"); } catch (e) {}
try { isNaN(v722); } catch (e) {}
let v725;
try { v725 = Date.parse("+275760-09-14T00:00:00.000Z"); } catch (e) {}
try { isNaN(v725); } catch (e) {}
