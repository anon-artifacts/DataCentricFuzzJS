function f0() {
}
var i = 0;
var BUGNUMBER = 228087;
var summary = "Testing regexps with unescaped braces";
var status = "";
let v10;
try { v10 = new Array(); } catch (e) {}
var statusmessages = v10;
var pattern = "";
let v14;
try { v14 = new Array(); } catch (e) {}
var patterns = v14;
var string = "";
let v18;
try { v18 = new Array(); } catch (e) {}
var strings = v18;
var actualmatch = "";
let v22;
try { v22 = new Array(); } catch (e) {}
var actualmatches = v22;
var expectedmatch = "";
let v26;
try { v26 = new Array(); } catch (e) {}
var expectedmatches = v26;
var e;
string = "foo {1} foo {2} foo";
let v33;
try { v33 = inSection(1); } catch (e) {}
status = v33;
try {
    let v37;
    try { v37 = new RegExp("{1.*}", "g"); } catch (e) {}
    pattern = v37;
    let v38;
    try { v38 = string.match(pattern); } catch (e) {}
    actualmatch = v38;
} catch(e39) {
    pattern = "error";
    actualmatch = "";
}
let v43;
try { v43 = Array("{1} foo {2}"); } catch (e) {}
expectedmatch = v43;
try { addThis(); } catch (e) {}
let v47;
try { v47 = inSection(2); } catch (e) {}
status = v47;
try {
    let v51;
    try { v51 = new RegExp("{1.*}", "g"); } catch (e) {}
    pattern = v51;
    let v52;
    try { v52 = string.match(pattern); } catch (e) {}
    actualmatch = v52;
} catch(e53) {
    pattern = "error";
    actualmatch = "";
}
let v57;
try { v57 = Array("{1} foo {2}"); } catch (e) {}
expectedmatch = v57;
try { addThis(); } catch (e) {}
let v60;
try { v60 = inSection(3); } catch (e) {}
status = v60;
try {
    let v64;
    try { v64 = new RegExp("{1[.!}]*}", "g"); } catch (e) {}
    pattern = v64;
    let v65;
    try { v65 = string.match(pattern); } catch (e) {}
    actualmatch = v65;
} catch(e66) {
    pattern = "error";
    actualmatch = "";
}
let v70;
try { v70 = Array("{1}"); } catch (e) {}
expectedmatch = v70;
try { addThis(); } catch (e) {}
let v73;
try { v73 = inSection(4); } catch (e) {}
status = v73;
try {
    let v77;
    try { v77 = new RegExp("{1[.!}]*}", "g"); } catch (e) {}
    pattern = v77;
    let v78;
    try { v78 = string.match(pattern); } catch (e) {}
    actualmatch = v78;
} catch(e79) {
    pattern = "error";
    actualmatch = "";
}
let v83;
try { v83 = Array("{1}"); } catch (e) {}
expectedmatch = v83;
try { addThis(); } catch (e) {}
string = "abccccc{3 }c{ 3}c{3, }c{3 ,}c{3 ,4}c{3, 4}c{3,4 }de";
let v87;
try { v87 = inSection(5); } catch (e) {}
status = v87;
try {
    let v90;
    try { v90 = new RegExp("c{3}"); } catch (e) {}
    pattern = v90;
    let v91;
    try { v91 = string.match(pattern); } catch (e) {}
    actualmatch = v91;
} catch(e92) {
    pattern = "error";
    actualmatch = "";
}
let v96;
try { v96 = Array("ccc"); } catch (e) {}
expectedmatch = v96;
try { addThis(); } catch (e) {}
let v99;
try { v99 = inSection(6); } catch (e) {}
status = v99;
try {
    let v102;
    try { v102 = new RegExp("c{3 }"); } catch (e) {}
    pattern = v102;
    let v103;
    try { v103 = string.match(pattern); } catch (e) {}
    actualmatch = v103;
} catch(e104) {
    pattern = "error";
    actualmatch = "";
}
let v108;
try { v108 = Array("c{3 }"); } catch (e) {}
expectedmatch = v108;
try { addThis(); } catch (e) {}
let v111;
try { v111 = inSection(7); } catch (e) {}
status = v111;
try {
    let v114;
    try { v114 = new RegExp("c{3.}"); } catch (e) {}
    pattern = v114;
    let v115;
    try { v115 = string.match(pattern); } catch (e) {}
    actualmatch = v115;
} catch(e116) {
    pattern = "error";
    actualmatch = "";
}
let v120;
try { v120 = Array("c{3 }"); } catch (e) {}
expectedmatch = v120;
try { addThis(); } catch (e) {}
let v123;
try { v123 = inSection(8); } catch (e) {}
status = v123;
try {
    let v126;
    try { v126 = new RegExp("c{3\s}"); } catch (e) {}
    pattern = v126;
    let v127;
    try { v127 = string.match(pattern); } catch (e) {}
    actualmatch = v127;
} catch(e128) {
    pattern = "error";
    actualmatch = "";
}
let v132;
try { v132 = Array("c{3 }"); } catch (e) {}
expectedmatch = v132;
try { addThis(); } catch (e) {}
let v135;
try { v135 = inSection(9); } catch (e) {}
status = v135;
try {
    let v138;
    try { v138 = new RegExp("c{3[ ]}"); } catch (e) {}
    pattern = v138;
    let v139;
    try { v139 = string.match(pattern); } catch (e) {}
    actualmatch = v139;
} catch(e140) {
    pattern = "error";
    actualmatch = "";
}
let v144;
try { v144 = Array("c{3 }"); } catch (e) {}
expectedmatch = v144;
try { addThis(); } catch (e) {}
let v147;
try { v147 = inSection(10); } catch (e) {}
status = v147;
try {
    let v150;
    try { v150 = new RegExp("c{ 3}"); } catch (e) {}
    pattern = v150;
    let v151;
    try { v151 = string.match(pattern); } catch (e) {}
    actualmatch = v151;
} catch(e152) {
    pattern = "error";
    actualmatch = "";
}
let v156;
try { v156 = Array("c{ 3}"); } catch (e) {}
expectedmatch = v156;
try { addThis(); } catch (e) {}
let v159;
try { v159 = inSection(11); } catch (e) {}
status = v159;
try {
    let v162;
    try { v162 = new RegExp("c{3,}"); } catch (e) {}
    pattern = v162;
    let v163;
    try { v163 = string.match(pattern); } catch (e) {}
    actualmatch = v163;
} catch(e164) {
    pattern = "error";
    actualmatch = "";
}
let v168;
try { v168 = Array("ccccc"); } catch (e) {}
expectedmatch = v168;
try { addThis(); } catch (e) {}
let v171;
try { v171 = inSection(12); } catch (e) {}
status = v171;
try {
    let v174;
    try { v174 = new RegExp("c{3, }"); } catch (e) {}
    pattern = v174;
    let v175;
    try { v175 = string.match(pattern); } catch (e) {}
    actualmatch = v175;
} catch(e176) {
    pattern = "error";
    actualmatch = "";
}
let v180;
try { v180 = Array("c{3, }"); } catch (e) {}
expectedmatch = v180;
try { addThis(); } catch (e) {}
let v183;
try { v183 = inSection(13); } catch (e) {}
status = v183;
try {
    let v186;
    try { v186 = new RegExp("c{3 ,}"); } catch (e) {}
    pattern = v186;
    let v187;
    try { v187 = string.match(pattern); } catch (e) {}
    actualmatch = v187;
} catch(e188) {
    pattern = "error";
    actualmatch = "";
}
let v192;
try { v192 = Array("c{3 ,}"); } catch (e) {}
expectedmatch = v192;
try { addThis(); } catch (e) {}
let v195;
try { v195 = inSection(14); } catch (e) {}
status = v195;
try {
    let v198;
    try { v198 = new RegExp("c{3,4}"); } catch (e) {}
    pattern = v198;
    let v199;
    try { v199 = string.match(pattern); } catch (e) {}
    actualmatch = v199;
} catch(e200) {
    pattern = "error";
    actualmatch = "";
}
let v204;
try { v204 = Array("cccc"); } catch (e) {}
expectedmatch = v204;
try { addThis(); } catch (e) {}
let v207;
try { v207 = inSection(15); } catch (e) {}
status = v207;
try {
    let v210;
    try { v210 = new RegExp("c{3 ,4}"); } catch (e) {}
    pattern = v210;
    let v211;
    try { v211 = string.match(pattern); } catch (e) {}
    actualmatch = v211;
} catch(e212) {
    pattern = "error";
    actualmatch = "";
}
let v216;
try { v216 = Array("c{3 ,4}"); } catch (e) {}
expectedmatch = v216;
try { addThis(); } catch (e) {}
let v219;
try { v219 = inSection(16); } catch (e) {}
status = v219;
try {
    let v222;
    try { v222 = new RegExp("c{3, 4}"); } catch (e) {}
    pattern = v222;
    let v223;
    try { v223 = string.match(pattern); } catch (e) {}
    actualmatch = v223;
} catch(e224) {
    pattern = "error";
    actualmatch = "";
}
let v228;
try { v228 = Array("c{3, 4}"); } catch (e) {}
expectedmatch = v228;
try { addThis(); } catch (e) {}
let v231;
try { v231 = inSection(17); } catch (e) {}
status = v231;
try {
    let v234;
    try { v234 = new RegExp("c{3,4 }"); } catch (e) {}
    pattern = v234;
    let v235;
    try { v235 = string.match(pattern); } catch (e) {}
    actualmatch = v235;
} catch(e236) {
    pattern = "error";
    actualmatch = "";
}
let v240;
try { v240 = Array("c{3,4 }"); } catch (e) {}
expectedmatch = v240;
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function addThis() {
    statusmessages[i] = status;
    patterns[i] = pattern;
    strings[i] = string;
    actualmatches[i] = actualmatch;
    expectedmatches[i] = expectedmatch;
    i++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    try { testRegExp(statusmessages, patterns, strings, actualmatches, expectedmatches); } catch (e) {}
}
