function AddNumbers(a1, a2) {
    return a1 + a2;
}
function t1() {
    let v7;
    try { v7 = new Number(1); } catch (e) {}
    var a = v7;
    function f9(a10) {
        if (a10 == "string") {
            return "a";
        } else {
            return 10;
        }
    }
    a[Symbol?.toPrimitive] = f9;
    const v18 = 10 == a;
    try { console.log(v18); } catch (e) {}
    const v24 = 11 == (a + 1);
    try { console.log(v24); } catch (e) {}
    let v28;
    try { v28 = String(a); } catch (e) {}
    try { console.log("a", v28); } catch (e) {}
}
try { t1(); } catch (e) {}
function t2() {
    let v35;
    try { v35 = Object.getOwnPropertyDescriptor(Symbol, "toPrimitive"); } catch (e) {}
    var o = v35;
    const v37 = o?.writable;
    try { console.log(v37); } catch (e) {}
    const v40 = o?.enumerable;
    try { console.log(v40); } catch (e) {}
    const v42 = o?.configurable;
    try { console.log(v42); } catch (e) {}
    const v48 = Symbol?.prototype?.[Symbol?.toPrimitive]?.name;
    try { console.log("[Symbol.toPrimitive]", v48); } catch (e) {}
    const v50 = Symbol?.prototype;
    const v51 = Symbol?.toPrimitive;
    let v52;
    try { v52 = Object.getOwnPropertyDescriptor(v50, v51); } catch (e) {}
    var o = v52;
    const v54 = o?.writable;
    try { console.log(v54); } catch (e) {}
    const v56 = o?.enumerable;
    try { console.log(v56); } catch (e) {}
    const v58 = o?.configurable;
    try { console.log(v58); } catch (e) {}
    try {
        const v60 = Symbol?.prototype;
        const v61 = Symbol?.toPrimitive;
        try { v60[v61](); } catch (e) {}
    } catch(e63) {
    }
    let v64;
    try { v64 = Symbol(); } catch (e) {}
    var s = v64;
    let v66;
    try { v66 = Object(s); } catch (e) {}
    const v67 = Symbol?.toPrimitive;
    let v68;
    try { v68 = v66[v67](); } catch (e) {}
    try { console.log(s, v68, ""); } catch (e) {}
    const v73 = Symbol?.prototype?.[Symbol?.toPrimitive];
    let v74;
    try { v74 = v73.call(s); } catch (e) {}
    try { console.log(s, v74, ""); } catch (e) {}
    const v77 = Symbol?.toPrimitive;
    const v78 = Symbol?.toPrimitive;
    const v79 = Symbol?.toPrimitive;
    let v80;
    try { v80 = v78[v79](); } catch (e) {}
    try { console.log(v77, v80); } catch (e) {}
    const v82 = Symbol?.iterator;
    const v83 = Symbol?.iterator;
    const v84 = Symbol?.toPrimitive;
    let v85;
    try { v85 = v83[v84](); } catch (e) {}
    try { console.log(v82, v85); } catch (e) {}
    const v87 = Symbol?.hasInstance;
    const v88 = Symbol?.hasInstance;
    const v89 = Symbol?.toPrimitive;
    let v90;
    try { v90 = v88[v89](); } catch (e) {}
    try { console.log(v87, v90); } catch (e) {}
    const v92 = Symbol?.isConcatSpreadable;
    const v93 = Symbol?.isConcatSpreadable;
    const v94 = Symbol?.toPrimitive;
    let v95;
    try { v95 = v93[v94](); } catch (e) {}
    try { console.log(v92, v95); } catch (e) {}
    const v97 = Symbol?.match;
    const v98 = Symbol?.match;
    const v99 = Symbol?.toPrimitive;
    let v100;
    try { v100 = v98[v99](); } catch (e) {}
    try { console.log(v97, v100); } catch (e) {}
    const v102 = Symbol?.replace;
    const v103 = Symbol?.replace;
    const v104 = Symbol?.toPrimitive;
    let v105;
    try { v105 = v103[v104](); } catch (e) {}
    try { console.log(v102, v105); } catch (e) {}
    const v107 = Symbol?.search;
    const v108 = Symbol?.search;
    const v109 = Symbol?.toPrimitive;
    let v110;
    try { v110 = v108[v109](); } catch (e) {}
    try { console.log(v107, v110); } catch (e) {}
    const v112 = Symbol?.split;
    const v113 = Symbol?.split;
    const v114 = Symbol?.toPrimitive;
    let v115;
    try { v115 = v113[v114](); } catch (e) {}
    try { console.log(v112, v115); } catch (e) {}
    const v117 = Symbol?.toStringTag;
    const v118 = Symbol?.toStringTag;
    const v119 = Symbol?.toPrimitive;
    let v120;
    try { v120 = v118[v119](); } catch (e) {}
    try { console.log(v117, v120); } catch (e) {}
    const v122 = Symbol?.unscopables;
    const v123 = Symbol?.unscopables;
    const v124 = Symbol?.toPrimitive;
    let v125;
    try { v125 = v123[v124](); } catch (e) {}
    try { console.log(v122, v125); } catch (e) {}
}
try { t2(); } catch (e) {}
function t3() {
    const v135 = Date?.prototype?.[Symbol?.toPrimitive]?.name;
    try { console.log("[Symbol.toPrimitive]", v135); } catch (e) {}
    const v138 = Date?.prototype;
    const v139 = Symbol?.toPrimitive;
    let v141;
    try { v141 = Object.getOwnPropertyDescriptor(v138, v139); } catch (e) {}
    var o = v141;
    const v143 = o?.writable;
    try { console.log(v143); } catch (e) {}
    const v145 = o?.enumerable;
    try { console.log(v145); } catch (e) {}
    const v147 = o?.configurable;
    try { console.log(v147); } catch (e) {}
    let v156;
    try { v156 = new Date(2014, 5, 30, 8, 30, 45, 2); } catch (e) {}
    var d = v156;
    let v158;
    try { v158 = d.toString(); } catch (e) {}
    const v160 = Symbol?.toPrimitive;
    let v161;
    try { v161 = d[v160]("string"); } catch (e) {}
    try { console.log(v158, v161); } catch (e) {}
    let v163;
    try { v163 = d.toString(); } catch (e) {}
    const v165 = Symbol?.toPrimitive;
    let v166;
    try { v166 = d[v165]("default"); } catch (e) {}
    try { console.log(v163, v166); } catch (e) {}
    let v168;
    try { v168 = d.valueOf(); } catch (e) {}
    const v170 = Symbol?.toPrimitive;
    let v171;
    try { v171 = d[v170]("number"); } catch (e) {}
    try { console.log(v168, v171); } catch (e) {}
    try {
        const v174 = Symbol?.toPrimitive;
        try { d[v174]("boolean"); } catch (e) {}
    } catch(e176) {
    }
    try {
        const v177 = {};
        const v178 = Symbol?.toPrimitive;
        try { d[v178](v177); } catch (e) {}
    } catch(e180) {
    }
    let v181;
    try { v181 = d.toString(); } catch (e) {}
    const v183 = v181 + 10;
    const v185 = d + 10;
    try { console.log(v183, v185); } catch (e) {}
    let v187;
    try { v187 = d.valueOf(); } catch (e) {}
    let v189;
    try { v189 = new Number(d); } catch (e) {}
    let v190;
    try { v190 = v189.valueOf(); } catch (e) {}
    try { console.log(v187, v190); } catch (e) {}
    const t186 = Date?.prototype;
    delete t186?.[Symbol?.toPrimitive];
    const v195 = Symbol?.toPrimitive;
    const v196 = Date?.prototype;
    let v197;
    try { v197 = v196.hasOwnProperty(v195); } catch (e) {}
    try { console.log(v197); } catch (e) {}
    let v199;
    try { v199 = d.toString(); } catch (e) {}
    const v201 = v199 + 10;
    const v203 = d + 10;
    try { console.log(v201, v203); } catch (e) {}
    let v205;
    try { v205 = d.valueOf(); } catch (e) {}
    let v206;
    try { v206 = new Number(d); } catch (e) {}
    let v207;
    try { v207 = v206.valueOf(); } catch (e) {}
    try { console.log(v205, v207); } catch (e) {}
    const v209 = Date?.prototype;
    const v210 = Symbol?.toPrimitive;
    try { Object.defineProperty(v209, v210, o); } catch (e) {}
    try {
        const v216 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v216.call(undefined, "default"); } catch (e) {}
    } catch(e218) {
    }
    try {
        const v223 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v223.call(null, "default"); } catch (e) {}
    } catch(e225) {
    }
    try {
        const v230 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v230.call(true, "default"); } catch (e) {}
    } catch(e232) {
    }
    try {
        const v237 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v237.call(false, "default"); } catch (e) {}
    } catch(e239) {
    }
    try {
        const v244 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v244.call(0, "default"); } catch (e) {}
    } catch(e246) {
    }
    try {
        const v251 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v251.call(NaN, "default"); } catch (e) {}
    } catch(e253) {
    }
    try {
        const v258 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v258.call("", "default"); } catch (e) {}
    } catch(e260) {
    }
    try {
        const v265 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v265.call("abc", "default"); } catch (e) {}
    } catch(e267) {
    }
    try {
        const v270 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v270.call(); } catch (e) {}
    } catch(e272) {
    }
    try {
        const v276 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v276.call(undefined); } catch (e) {}
    } catch(e278) {
    }
    try {
        const v282 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v282.call(null); } catch (e) {}
    } catch(e284) {
    }
    try {
        const v288 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v288.call(true); } catch (e) {}
    } catch(e290) {
    }
    try {
        const v294 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v294.call(false); } catch (e) {}
    } catch(e296) {
    }
    try {
        const v300 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v300.call(0); } catch (e) {}
    } catch(e302) {
    }
    try {
        const v306 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v306.call(NaN); } catch (e) {}
    } catch(e308) {
    }
    try {
        const v312 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v312.call(""); } catch (e) {}
    } catch(e314) {
    }
    try {
        const v318 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v318.call("abc"); } catch (e) {}
    } catch(e320) {
    }
    try {
        function f321() {
        }
        const v324 = Date?.prototype?.[Symbol?.toPrimitive];
        try { v324.call(f321); } catch (e) {}
    } catch(e326) {
    }
    try {
        const v327 = Symbol?.toPrimitive;
        try { d[v327](); } catch (e) {}
    } catch(e329) {
    }
    try {
        const v331 = Symbol?.toPrimitive;
        try { d[v331](undefined); } catch (e) {}
    } catch(e333) {
    }
    try {
        const v335 = Symbol?.toPrimitive;
        try { d[v335](null); } catch (e) {}
    } catch(e337) {
    }
    try {
        const v339 = Symbol?.toPrimitive;
        try { d[v339](true); } catch (e) {}
    } catch(e341) {
    }
    try {
        const v343 = Symbol?.toPrimitive;
        try { d[v343](false); } catch (e) {}
    } catch(e345) {
    }
    try {
        const v347 = Symbol?.toPrimitive;
        try { d[v347](0); } catch (e) {}
    } catch(e349) {
    }
    try {
        const v351 = Symbol?.toPrimitive;
        try { d[v351](NaN); } catch (e) {}
    } catch(e353) {
    }
    try {
        const v355 = Symbol?.toPrimitive;
        try { d[v355](""); } catch (e) {}
    } catch(e357) {
    }
    try {
        const v359 = Symbol?.toPrimitive;
        try { d[v359]("abc"); } catch (e) {}
    } catch(e361) {
    }
    try {
        function f362() {
        }
        const v363 = Symbol?.toPrimitive;
        try { d[v363](f362); } catch (e) {}
    } catch(e365) {
    }
    try {
        const v366 = {};
        const v367 = Symbol?.toPrimitive;
        try { d[v367](v366); } catch (e) {}
    } catch(e369) {
    }
}
try { t3(); } catch (e) {}
function t4() {
    function f372() {
        return "o";
    }
    function f374() {
        return 0;
    }
    var o = { toString: f372, valueOf: f374 };
    function f378(a379) {
        if ("string" == a379) {
            let v383;
            try { v383 = this.toString(); } catch (e) {}
            return v383 + " (hint String)";
        } else {
            if ("number" == a379) {
                let v389;
                try { v389 = this.valueOf(); } catch (e) {}
                return v389 + 2;
            } else {
                return " (hint default) ";
            }
        }
    }
    o[Symbol?.toPrimitive] = f378;
    const v396 = Symbol?.toPrimitive;
    let v397;
    try { v397 = o[v396](); } catch (e) {}
    try { console.log(" (hint default) ", v397); } catch (e) {}
    const v402 = Symbol?.toPrimitive;
    let v403;
    try { v403 = o[v402]("string"); } catch (e) {}
    try { console.log("o (hint String)", v403); } catch (e) {}
    const v407 = Symbol?.toPrimitive;
    let v408;
    try { v408 = o[v407]("number"); } catch (e) {}
    try { console.log(2, v408); } catch (e) {}
    let v412;
    try { v412 = new Number(o); } catch (e) {}
    let v413;
    try { v413 = v412.valueOf(); } catch (e) {}
    try { console.log(2, v413, "toNumber should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with hint number"); } catch (e) {}
    const v420 = (1 + o) + 1;
    try { console.log("1 (hint default) 1", v420, "add should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with no hint"); } catch (e) {}
    let v425;
    try { v425 = new String(o); } catch (e) {}
    let v426;
    try { v426 = v425.toString(); } catch (e) {}
    try { console.log("o (hint String)", v426, "toString should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with hint string"); } catch (e) {}
}
try { t4(); } catch (e) {}
function t5() {
    function f431() {
        return "o";
    }
    function f433() {
        return 0;
    }
    var o = { toString: f431, valueOf: f433 };
    const v437 = {};
    o[Symbol?.toPrimitive] = v437;
    try {
        var a = o + 1;
    } catch(e443) {
    }
    o[Symbol?.toPrimitive] = null;
    try {
        var a = o + 1;
    } catch(e449) {
    }
}
try { t5(); } catch (e) {}
function t6() {
    let v454;
    try { v454 = new String("a"); } catch (e) {}
    var a = v454;
    function f456(a457) {
        if (a457 == "string") {
            return "var_a";
        } else {
            return -1;
        }
    }
    a[Symbol?.toPrimitive] = f456;
    const v467 = -1 == a;
    try { console.log(v467); } catch (e) {}
    let v471;
    try { v471 = String(a); } catch (e) {}
    const v472 = "var_a" == v471;
    try { console.log(v472); } catch (e) {}
    const v477 = 0 == (a + 1);
    try { console.log(v477); } catch (e) {}
    let v480;
    try { v480 = String(a); } catch (e) {}
    const v483 = "var_a1" == (v480 + 1);
    try { console.log(v483); } catch (e) {}
    const v486 = -1;
    let v488;
    try { v488 = Number(a); } catch (e) {}
    try { console.log(v486, v488); } catch (e) {}
}
try { t6(); } catch (e) {}
function t7() {
    var o = {};
    var o1 = {};
    var o2 = {};
    var retVal;
    var hint;
    function f502(a503) {
        try { hint.push(a503); } catch (e) {}
        return retVal;
    }
    o[Symbol?.toPrimitive] = f502;
    function f507(a508) {
        const v510 = "o1:" + a508;
        try { hint.push(v510); } catch (e) {}
        return retVal;
    }
    o1[Symbol?.toPrimitive] = f507;
    function f513(a514) {
        const v516 = "o2:" + a514;
        try { hint.push(v516); } catch (e) {}
        return retVal;
    }
    o2[Symbol?.toPrimitive] = f513;
    function f523() {
        let v526;
        try { v526 = Error("Unexpected toString() call on o"); } catch (e) {}
        throw v526;
    }
    const v527 = { writable: true, configurable: true, enumerable: true, value: f523 };
    try { Object.defineProperty(o, "toString", v527); } catch (e) {}
    function f534() {
        let v537;
        try { v537 = Error("Unexpected toString() call on o1"); } catch (e) {}
        throw v537;
    }
    const v538 = { writable: true, configurable: true, enumerable: true, value: f534 };
    try { Object.defineProperty(o1, "toString", v538); } catch (e) {}
    function f544() {
        let v547;
        try { v547 = Error("Unexpected toString() call on o2"); } catch (e) {}
        throw v547;
    }
    const v548 = { writable: true, configurable: true, enumerable: true, value: f544 };
    try { Object.defineProperty(o2, "toString", v548); } catch (e) {}
    function f554() {
        let v557;
        try { v557 = Error("Unexpected valueOf() call on o"); } catch (e) {}
        throw v557;
    }
    const v558 = { writable: true, configurable: true, enumerable: true, value: f554 };
    try { Object.defineProperty(o, "valueOf", v558); } catch (e) {}
    function f564() {
        let v567;
        try { v567 = Error("Unexpected valueOf() call on o1"); } catch (e) {}
        throw v567;
    }
    const v568 = { writable: true, configurable: true, enumerable: true, value: f564 };
    try { Object.defineProperty(o1, "valueOf", v568); } catch (e) {}
    function f574() {
        let v577;
        try { v577 = Error("Unexpected valueOf() call on o2"); } catch (e) {}
        throw v577;
    }
    const v578 = { writable: true, configurable: true, enumerable: true, value: f574 };
    try { Object.defineProperty(o2, "valueOf", v578); } catch (e) {}
    function f580(a581, a582, a583, a584) {
        hint = [];
        let v586;
        try { v586 = a581(); } catch (e) {}
        const v588 = "result:" + a584;
        try { console.log(a582, v586, v588); } catch (e) {}
        const v592 = "hint:" + a584;
        try { console.log(a583, hint, v592); } catch (e) {}
    }
    var verifyToPrimitive = f580;
    retVal = NaN;
    const v596 = () => {
        let v598;
        try { v598 = Number(o); } catch (e) {}
        return v598;
    };
    const v600 = ["number"];
    try { verifyToPrimitive(v596, NaN, v600, "Number()"); } catch (e) {}
    const v603 = () => {
        const v605 = [o];
        let v606;
        try { v606 = new Uint8Array(v605); } catch (e) {}
        return v606;
    };
    const v608 = [NaN];
    let v609;
    try { v609 = new Uint8Array(v608); } catch (e) {}
    const v611 = ["number"];
    try { verifyToPrimitive(v603, v609, v611, "TypedArray constructor"); } catch (e) {}
    const v614 = () => {
        let v616;
        try { v616 = isFinite(o); } catch (e) {}
        return v616;
    };
    const v619 = ["number"];
    try { verifyToPrimitive(v614, false, v619, "isFinite()"); } catch (e) {}
    const v622 = () => {
        let v624;
        try { v624 = isNaN(o); } catch (e) {}
        return v624;
    };
    const v627 = ["number"];
    try { verifyToPrimitive(v622, true, v627, "isNaN()"); } catch (e) {}
    retVal = 100;
    const v631 = () => {
        return 1 - o;
    };
    const v635 = -99;
    const v637 = ["number"];
    try { verifyToPrimitive(v631, v635, v637, "1-o"); } catch (e) {}
    const v640 = () => {
        return o - 2;
    };
    const v645 = ["number"];
    try { verifyToPrimitive(v640, 98, v645, "o-2"); } catch (e) {}
    const v648 = () => {
        return 1 * o;
    };
    const v653 = ["number"];
    try { verifyToPrimitive(v648, 100, v653, "1*o"); } catch (e) {}
    const v656 = () => {
        return o * 2;
    };
    const v661 = ["number"];
    try { verifyToPrimitive(v656, 200, v661, "o*2"); } catch (e) {}
    const v664 = () => {
        let v666;
        try { v666 = Math.log10(o); } catch (e) {}
        return v666;
    };
    const v669 = ["number"];
    try { verifyToPrimitive(v664, 2, v669, "Math.log10()"); } catch (e) {}
    const v672 = () => {
        return o1 - o2;
    };
    const v677 = ["o1:number","o2:number"];
    try { verifyToPrimitive(v672, 0, v677, "o1-o2"); } catch (e) {}
    const v680 = () => {
        return o2 / o1;
    };
    const v685 = ["o2:number","o1:number"];
    try { verifyToPrimitive(v680, 1, v685, "o2/o1"); } catch (e) {}
    retVal = 100;
    var n = o;
    const v690 = () => {
        return ++n;
    };
    const v694 = ["number"];
    try { verifyToPrimitive(v690, 101, v694, "++n"); } catch (e) {}
    n = o;
    const v697 = () => {
        return n++;
    };
    const v701 = ["number"];
    try { verifyToPrimitive(v697, 100, v701, "n++"); } catch (e) {}
    n = o;
    const v704 = () => {
        return --n;
    };
    const v708 = ["number"];
    try { verifyToPrimitive(v704, 99, v708, "--n"); } catch (e) {}
    n = o;
    const v711 = () => {
        return n--;
    };
    const v715 = ["number"];
    try { verifyToPrimitive(v711, 100, v715, "n--"); } catch (e) {}
    retVal = "abc";
    const v719 = () => {
        return 1 - o;
    };
    const v723 = ["number"];
    try { verifyToPrimitive(v719, NaN, v723, "1-o ([@@toPrimitive] returns string)"); } catch (e) {}
    const v726 = () => {
        return o - 2;
    };
    const v730 = ["number"];
    try { verifyToPrimitive(v726, NaN, v730, "o-2 ([@@toPrimitive] returns string)"); } catch (e) {}
    retVal = NaN;
    const v733 = () => {
        let v735;
        try { v735 = String(o); } catch (e) {}
        return v735;
    };
    const v738 = ["string"];
    try { verifyToPrimitive(v733, "NaN", v738, "String()"); } catch (e) {}
    const v741 = () => {
        let v743;
        try { v743 = parseFloat(o); } catch (e) {}
        return v743;
    };
    const v745 = ["string"];
    try { verifyToPrimitive(v741, NaN, v745, "parseFloat()"); } catch (e) {}
    const v748 = () => {
        let v750;
        try { v750 = parseInt(o); } catch (e) {}
        return v750;
    };
    const v752 = ["string"];
    try { verifyToPrimitive(v748, NaN, v752, "parseInt()"); } catch (e) {}
    const v755 = () => {
        let v757;
        try { v757 = decodeURI(o); } catch (e) {}
        return v757;
    };
    const v760 = ["string"];
    try { verifyToPrimitive(v755, "NaN", v760, "decodeURI()"); } catch (e) {}
    retVal = NaN;
    var x = {};
    const v765 = () => {
        const v770 = { writable: true, enumerable: true, configurable: true, value: "abc123" };
        let v771;
        try { v771 = Object.defineProperty(x, o, v770); } catch (e) {}
        return v771;
    };
    const v773 = ["string"];
    try { verifyToPrimitive(v765, x, v773, "Object.defineProperty()"); } catch (e) {}
    const v776 = () => {
        return x?.[o];
    };
    const v780 = ["string"];
    try { verifyToPrimitive(v776, "abc123", v780, "x[o]"); } catch (e) {}
    const v783 = () => {
        let v784;
        try { v784 = x.hasOwnProperty(o); } catch (e) {}
        return v784;
    };
    const v787 = ["string"];
    try { verifyToPrimitive(v783, true, v787, "Object.prototype.hasOwnProperty()"); } catch (e) {}
    const v790 = () => {
        let v791;
        try { v791 = x.propertyIsEnumerable(o); } catch (e) {}
        return v791;
    };
    const v794 = ["string"];
    try { verifyToPrimitive(v790, true, v794, "Object.prototype.propertyIsEnumerable()"); } catch (e) {}
    const v797 = () => {
        return o in x;
    };
    const v801 = ["string"];
    try { verifyToPrimitive(v797, true, v801, "o in x"); } catch (e) {}
    retVal = 100;
    const v805 = () => {
        return o + 1;
    };
    const v810 = ["default"];
    try { verifyToPrimitive(v805, 101, v810, "o+1"); } catch (e) {}
    const v813 = () => {
        return 2 + o;
    };
    const v818 = ["default"];
    try { verifyToPrimitive(v813, 102, v818, "2+o"); } catch (e) {}
    const v821 = () => {
        return o + "abc";
    };
    const v826 = ["default"];
    try { verifyToPrimitive(v821, "100abc", v826, "o+'abc'"); } catch (e) {}
    const v829 = () => {
        return "abc" + o;
    };
    const v834 = ["default"];
    try { verifyToPrimitive(v829, "abc100", v834, "'abc'+o"); } catch (e) {}
    const v837 = () => {
        return o1 + o2;
    };
    const v842 = ["o1:default","o2:default"];
    try { verifyToPrimitive(v837, 200, v842, "o1+o2"); } catch (e) {}
    const v845 = () => {
        return o2 + o1;
    };
    const v850 = ["o2:default","o1:default"];
    try { verifyToPrimitive(v845, 200, v850, "o2+o1"); } catch (e) {}
    retVal = "abc";
    const v854 = () => {
        return o + 1;
    };
    const v859 = ["default"];
    try { verifyToPrimitive(v854, "abc1", v859, "o+1 ([@@toPrimitive] returns string)"); } catch (e) {}
    const v862 = () => {
        return 2 + o;
    };
    const v867 = ["default"];
    try { verifyToPrimitive(v862, "2abc", v867, "2+1 ([@@toPrimitive] returns string)"); } catch (e) {}
    const v870 = () => {
        return o + "def";
    };
    const v875 = ["default"];
    try { verifyToPrimitive(v870, "abcdef", v875, "o+'def'"); } catch (e) {}
    const v878 = () => {
        return "def" + o;
    };
    const v883 = ["default"];
    try { verifyToPrimitive(v878, "defabc", v883, "'def'+o"); } catch (e) {}
    const v886 = () => {
        return o1 + o2;
    };
    const v891 = ["o1:default","o2:default"];
    try { verifyToPrimitive(v886, "abcabc", v891, "o1+o2"); } catch (e) {}
    const v894 = () => {
        return o2 + o1;
    };
    const v899 = ["o2:default","o1:default"];
    try { verifyToPrimitive(v894, "abcabc", v899, "o2+o1"); } catch (e) {}
    retVal = 100;
    const v903 = () => {
        return o < 1;
    };
    const v908 = ["number"];
    try { verifyToPrimitive(v903, false, v908, "o<1"); } catch (e) {}
    const v911 = () => {
        return 1 < o;
    };
    const v916 = ["number"];
    try { verifyToPrimitive(v911, true, v916, "1<o"); } catch (e) {}
    const v919 = () => {
        return o <= 25;
    };
    const v924 = ["number"];
    try { verifyToPrimitive(v919, false, v924, "o<=25"); } catch (e) {}
    const v927 = () => {
        return -9 <= o;
    };
    const v933 = ["number"];
    try { verifyToPrimitive(v927, true, v933, "-9<=o"); } catch (e) {}
    const v936 = () => {
        return o > 1;
    };
    const v941 = ["number"];
    try { verifyToPrimitive(v936, true, v941, "o>1"); } catch (e) {}
    const v944 = () => {
        return 1 > o;
    };
    const v949 = ["number"];
    try { verifyToPrimitive(v944, false, v949, "1>o"); } catch (e) {}
    const v952 = () => {
        return o >= 25;
    };
    const v957 = ["number"];
    try { verifyToPrimitive(v952, true, v957, "o>=25"); } catch (e) {}
    const v960 = () => {
        return -9 >= o;
    };
    const v966 = ["number"];
    try { verifyToPrimitive(v960, false, v966, "-9>=o"); } catch (e) {}
    const v969 = () => {
        return o1 < o2;
    };
    const v974 = ["o1:number","o2:number"];
    try { verifyToPrimitive(v969, false, v974, "o1<o2"); } catch (e) {}
    const v977 = () => {
        return o2 <= o1;
    };
    const v982 = ["o2:number","o1:number"];
    try { verifyToPrimitive(v977, true, v982, "o2<=o1"); } catch (e) {}
    const v985 = () => {
        return o1 > o2;
    };
    const v990 = ["o1:number","o2:number"];
    try { verifyToPrimitive(v985, false, v990, "o1>o2"); } catch (e) {}
    const v993 = () => {
        return o2 >= o1;
    };
    const v998 = ["o2:number","o1:number"];
    try { verifyToPrimitive(v993, true, v998, "o2>=o1"); } catch (e) {}
    const v1001 = () => {
        return o1 == o2;
    };
    const v1004 = [];
    try { verifyToPrimitive(v1001, false, v1004, ""); } catch (e) {}
    retVal = 100;
    const v1008 = () => {
        return o == 100;
    };
    const v1013 = ["default"];
    try { verifyToPrimitive(v1008, true, v1013, "o==100"); } catch (e) {}
    const v1016 = () => {
        return 100 == o;
    };
    const v1021 = ["default"];
    try { verifyToPrimitive(v1016, true, v1021, "100==o"); } catch (e) {}
    const v1024 = () => {
        return o == 1;
    };
    const v1029 = ["default"];
    try { verifyToPrimitive(v1024, false, v1029, "o==1"); } catch (e) {}
    const v1032 = () => {
        return 1 == o;
    };
    const v1037 = ["default"];
    try { verifyToPrimitive(v1032, false, v1037, "1==o"); } catch (e) {}
    retVal = true;
    const v1041 = () => {
        return o == true;
    };
    const v1046 = ["default"];
    try { verifyToPrimitive(v1041, true, v1046, "o==true"); } catch (e) {}
    const v1049 = () => {
        return true == o;
    };
    const v1054 = ["default"];
    try { verifyToPrimitive(v1049, true, v1054, "true==o"); } catch (e) {}
    const v1057 = () => {
        return o == false;
    };
    const v1062 = ["default"];
    try { verifyToPrimitive(v1057, false, v1062, "o==false"); } catch (e) {}
    const v1065 = () => {
        return false == o;
    };
    const v1070 = ["default"];
    try { verifyToPrimitive(v1065, false, v1070, "false==o"); } catch (e) {}
    retVal = "abc";
    const v1074 = () => {
        return o == "abc";
    };
    const v1079 = ["default"];
    try { verifyToPrimitive(v1074, true, v1079, "o=='abc'"); } catch (e) {}
    const v1082 = () => {
        return "abc" == o;
    };
    const v1087 = ["default"];
    try { verifyToPrimitive(v1082, true, v1087, "'abc'==o"); } catch (e) {}
    const v1090 = () => {
        return o == "abc1";
    };
    const v1095 = ["default"];
    try { verifyToPrimitive(v1090, false, v1095, "o=='abc1'"); } catch (e) {}
    const v1098 = () => {
        return "abc1" == o;
    };
    const v1103 = ["default"];
    try { verifyToPrimitive(v1098, false, v1103, "'abc1'==o"); } catch (e) {}
    let v1106;
    try { v1106 = Symbol(); } catch (e) {}
    retVal = v1106;
    const v1107 = () => {
        return o == retVal;
    };
    const v1111 = ["default"];
    try { verifyToPrimitive(v1107, true, v1111, "o==retVal (retVal=Symbol())"); } catch (e) {}
    const v1114 = () => {
        return retVal == o;
    };
    const v1118 = ["default"];
    try { verifyToPrimitive(v1114, true, v1118, "retVal==o (retVal=Symbol())"); } catch (e) {}
    const v1121 = () => {
        let v1122;
        try { v1122 = Symbol(); } catch (e) {}
        return o == v1122;
    };
    const v1126 = ["default"];
    try { verifyToPrimitive(v1121, false, v1126, "o==Symbol()"); } catch (e) {}
    const v1129 = () => {
        let v1130;
        try { v1130 = Symbol(); } catch (e) {}
        return v1130 == o;
    };
    const v1134 = ["default"];
    try { verifyToPrimitive(v1129, false, v1134, "Symbol()==o"); } catch (e) {}
    retVal = "Jan 1, 2016";
    const v1138 = () => {
        let v1140;
        try { v1140 = new Date(o); } catch (e) {}
        let v1141;
        try { v1141 = v1140.valueOf(); } catch (e) {}
        return v1141;
    };
    let v1143;
    try { v1143 = new Date(retVal); } catch (e) {}
    let v1144;
    try { v1144 = v1143.valueOf(); } catch (e) {}
    const v1146 = ["default"];
    try { verifyToPrimitive(v1138, v1144, v1146, "Date() constructor"); } catch (e) {}
    retVal = NaN;
    const v1149 = () => {
        const v1151 = Date?.prototype?.toJSON;
        let v1152;
        try { v1152 = v1151.call(o); } catch (e) {}
        return v1152;
    };
    const v1155 = ["number"];
    try { verifyToPrimitive(v1149, null, v1155, "Date.prototype.toJSON()"); } catch (e) {}
    function f1162() {
        return "abc";
    }
    const v1164 = { writable: true, configurable: true, enumerable: true, value: f1162 };
    try { Object.defineProperty(o, "toString", v1164); } catch (e) {}
    function f1170() {
        return 123;
    }
    const v1172 = { writable: true, configurable: true, enumerable: true, value: f1170 };
    try { Object.defineProperty(o, "valueOf", v1172); } catch (e) {}
    const v1178 = Date?.prototype?.[Symbol?.toPrimitive];
    let v1179;
    try { v1179 = v1178.call(o, "number"); } catch (e) {}
    try { console.log(123, v1179); } catch (e) {}
    const v1186 = Date?.prototype?.[Symbol?.toPrimitive];
    let v1187;
    try { v1187 = v1186.call(o, "string"); } catch (e) {}
    try { console.log("abc", v1187); } catch (e) {}
    const v1193 = Date?.prototype?.[Symbol?.toPrimitive];
    let v1194;
    try { v1194 = v1193.call(o, "default"); } catch (e) {}
    try { console.log("abc", v1194); } catch (e) {}
}
try { t7(); } catch (e) {}
function t8() {
    var o = {};
    function f1200(a1201) {
        function f1202(a1203) {
            return a1201;
        }
        o[Symbol?.toPrimitive] = f1202;
        try {
            try { Number(o); } catch (e) {}
        } catch(e1208) {
        }
        try {
            const v1210 = [o];
            try { new Uint8Array(v1210); } catch (e) {}
        } catch(e1212) {
        }
        try {
            try { isFinite(o); } catch (e) {}
        } catch(e1215) {
        }
        try {
            try { isNaN(o); } catch (e) {}
        } catch(e1218) {
        }
        try {
            1 - o;
        } catch(e1221) {
        }
        try {
            o - 2;
        } catch(e1224) {
        }
        try {
            1 * o;
        } catch(e1227) {
        }
        try {
            o * 2;
        } catch(e1230) {
        }
        try {
            try { Math.log10(o); } catch (e) {}
        } catch(e1233) {
        }
        var n = o;
        try {
            ++n;
        } catch(e1236) {
        }
        n = o;
        try {
            n++;
        } catch(e1238) {
        }
        n = o;
        try {
            --n;
        } catch(e1240) {
        }
        n = o;
        try {
            n--;
        } catch(e1242) {
        }
        try {
            try { String(o); } catch (e) {}
        } catch(e1245) {
        }
        try {
            try { parseFloat(o); } catch (e) {}
        } catch(e1248) {
        }
        try {
            try { parseInt(o); } catch (e) {}
        } catch(e1251) {
        }
        try {
            try { decodeURI(o); } catch (e) {}
        } catch(e1254) {
        }
        var x = {};
        try {
            const v1257 = {};
            try { Object.defineProperty(x, o, v1257); } catch (e) {}
        } catch(e1260) {
        }
        try {
            x?.[o];
        } catch(e1262) {
        }
        try {
            try { x.hasOwnProperty(o); } catch (e) {}
        } catch(e1264) {
        }
        try {
            try { x.propertyIsEnumerable(o); } catch (e) {}
        } catch(e1266) {
        }
        try {
            o in x;
        } catch(e1268) {
        }
        try {
            o + 1;
        } catch(e1271) {
        }
        try {
            2 + o;
        } catch(e1274) {
        }
        try {
            o + "abc";
        } catch(e1277) {
        }
        try {
            "abc" + o;
        } catch(e1280) {
        }
        try {
            o < 1;
        } catch(e1283) {
        }
        try {
            1 < o;
        } catch(e1286) {
        }
        try {
            o <= 25;
        } catch(e1289) {
        }
        try {
            -9 <= o;
        } catch(e1293) {
        }
        try {
            o > 1;
        } catch(e1296) {
        }
        try {
            o >= 25;
        } catch(e1299) {
        }
        try {
            -9 >= o;
        } catch(e1303) {
        }
        try {
            o < o;
        } catch(e1305) {
        }
        try {
            o <= o;
        } catch(e1307) {
        }
        try {
            o > o;
        } catch(e1309) {
        }
        try {
            o >= o;
        } catch(e1311) {
        }
        const v1312 = o == o;
        try { console.log(v1312); } catch (e) {}
        try {
            "abc" == o;
        } catch(e1317) {
        }
        try {
            o == "abc";
        } catch(e1320) {
        }
        try {
            100 == o;
        } catch(e1323) {
        }
        try {
            o == 100;
        } catch(e1326) {
        }
        try {
            let v1327;
            try { v1327 = Symbol(); } catch (e) {}
            v1327 == o;
        } catch(e1329) {
        }
        try {
            let v1330;
            try { v1330 = Symbol(); } catch (e) {}
            o == v1330;
        } catch(e1332) {
        }
    }
    const v1333 = {};
    let v1335;
    try { v1335 = new Date(); } catch (e) {}
    let v1337;
    try { v1337 = Error(); } catch (e) {}
    let v1339;
    try { v1339 = new String(); } catch (e) {}
    let v1341;
    try { v1341 = new Boolean(); } catch (e) {}
    let v1343;
    try { v1343 = new Number(); } catch (e) {}
    const v1344 = [v1333,v1335,v1337,v1339,v1341,v1343];
    try { v1344.forEach(f1200); } catch (e) {}
}
try { t8(); } catch (e) {}
function t9() {
    const v1349 = Symbol?.toPrimitive;
    const v1361 = {
        [v1349](a1351) {
            function f1355() {
                return 30;
            }
            const v1357 = { configurable: true, get: f1355 };
            try { Object.defineProperty(a1, "0", v1357); } catch (e) {}
            return a1?.length;
        },
    };
    var p1 = v1361;
    var a1 = [1,2,3,4,5];
    let v1372;
    try { v1372 = a1.lastIndexOf(4, p1); } catch (e) {}
    try { console.log(3, v1372); } catch (e) {}
    var a1_proto = {};
    function f1378() {
        function f1382() {
            return 30;
        }
        const v1384 = { configurable: true, get: f1382 };
        try { Object.defineProperty(a1_prototest, "0", v1384); } catch (e) {}
        return 2;
    }
    const v1388 = { get: f1378 };
    try { Object.defineProperty(a1_proto, "1", v1388); } catch (e) {}
    var a1_prototest = [,,3,4,5];
    a1_prototest.__proto__ = a1_proto;
    const v1399 = ([])?.lastIndexOf;
    let v1400;
    try { v1400 = v1399.call(a1_prototest, 30); } catch (e) {}
    var c1_prototest = v1400;
    try { console.log(0, c1_prototest); } catch (e) {}
}
try { t9(); } catch (e) {}
function t10() {
    const v1407 = Symbol?.toPrimitive;
    const v1419 = {
        [v1407](a1409) {
            function f1413() {
                return 30;
            }
            const v1415 = { configurable: true, get: f1413 };
            try { Object.defineProperty(a2, "0", v1415); } catch (e) {}
            return 0;
        },
    };
    var p2 = v1419;
    var a2 = [1,2,3,4,5];
    let v1430;
    try { v1430 = a2.indexOf(4, p2); } catch (e) {}
    try { console.log(3, v1430); } catch (e) {}
    var a2_proto = {};
    function f1436() {
        function f1440() {
            return 30;
        }
        const v1442 = { configurable: true, get: f1440 };
        try { Object.defineProperty(a2_prototest, "1", v1442); } catch (e) {}
        return 1;
    }
    const v1446 = { get: f1436 };
    try { Object.defineProperty(a2_proto, "0", v1446); } catch (e) {}
    var a2_prototest = [,,3,4,5];
    a2_prototest.__proto__ = a2_proto;
    const v1457 = ([])?.indexOf;
    let v1458;
    try { v1458 = v1457.call(a2_prototest, 30); } catch (e) {}
    var c2_prototest = v1458;
    try { console.log(1, c2_prototest); } catch (e) {}
}
try { t10(); } catch (e) {}
function t11() {
    const v1465 = Symbol?.toPrimitive;
    const v1477 = {
        [v1465](a1467) {
            function f1471() {
                return 30;
            }
            const v1473 = { configurable: true, get: f1471 };
            try { Object.defineProperty(a3, "0", v1473); } catch (e) {}
            return 0;
        },
    };
    var p3 = v1477;
    var a3 = [1,2,3,4,5];
    let v1486;
    try { v1486 = a3.splice(p3); } catch (e) {}
    var b3 = v1486;
    const v1493 = [30,2,3,4,5];
    try { console.log(v1493, b3); } catch (e) {}
    var a3_proto = {};
    function f1499() {
        function f1503() {
            return 30;
        }
        const v1505 = { configurable: true, get: f1503 };
        try { Object.defineProperty(a3_prototest, "1", v1505); } catch (e) {}
        return 1;
    }
    const v1509 = { get: f1499 };
    try { Object.defineProperty(a3_proto, "0", v1509); } catch (e) {}
    var a3_prototest = [,,3,4,5];
    a3_prototest.__proto__ = a3_proto;
    const v1520 = ([])?.splice;
    let v1521;
    try { v1521 = v1520.call(a3_prototest, 0); } catch (e) {}
    var c3_prototest = v1521;
    const v1528 = [1,30,3,4,5];
    try { console.log(v1528, c3_prototest); } catch (e) {}
    function a3_constructor(a1531) {
    }
    function f1532() {
        function f1536() {
            return 30;
        }
        const v1538 = { configurable: true, get: f1536 };
        try { Object.defineProperty(a3_species, "0", v1538); } catch (e) {}
        return {};
    }
    a3_constructor[Symbol?.species] = f1532;
    var a3_species = [1,2,3,4,5];
    a3_species["constructor"] = a3_constructor;
    let v1551;
    try { v1551 = a3_species.splice(0); } catch (e) {}
    var c3_species = v1551;
    const v1555 = c3_species?.["0"];
    try { console.log(30, v1555); } catch (e) {}
    const v1560 = ([])?.join;
    let v1561;
    try { v1561 = v1560.call(c3_species, ","); } catch (e) {}
    try { console.log("30,2,3,4,5", v1561); } catch (e) {}
}
try { t11(); } catch (e) {}
function t12() {
    const v1566 = Symbol?.toPrimitive;
    const v1578 = {
        [v1566](a1568) {
            function f1572() {
                return 30;
            }
            const v1574 = { configurable: true, get: f1572 };
            try { Object.defineProperty(a4, "0", v1574); } catch (e) {}
            return 0;
        },
    };
    var p4 = v1578;
    var a4 = [1,2,3,4,5];
    let v1587;
    try { v1587 = a4.slice(p4); } catch (e) {}
    var b4 = v1587;
    const v1594 = [30,2,3,4,5];
    try { console.log(v1594, b4); } catch (e) {}
    var a4_proto = {};
    function f1600() {
        function f1604() {
            return 30;
        }
        const v1606 = { configurable: true, get: f1604 };
        try { Object.defineProperty(a4_prototest, "1", v1606); } catch (e) {}
        return 1;
    }
    const v1610 = { get: f1600 };
    try { Object.defineProperty(a4_proto, "0", v1610); } catch (e) {}
    var a4_prototest = [,,3,4,5];
    a4_prototest.__proto__ = a4_proto;
    const v1621 = ([])?.slice;
    let v1622;
    try { v1622 = v1621.call(a4_prototest, 0); } catch (e) {}
    var c4_prototest = v1622;
    const v1629 = [1,30,3,4,5];
    try { console.log(v1629, c4_prototest); } catch (e) {}
    function a4_constructor(a1632) {
    }
    function f1633() {
        function f1637() {
            return 30;
        }
        const v1639 = { configurable: true, get: f1637 };
        try { Object.defineProperty(a4_species, "0", v1639); } catch (e) {}
        return {};
    }
    a4_constructor[Symbol?.species] = f1633;
    var a4_species = [1,2,3,4,5];
    a4_species["constructor"] = a4_constructor;
    let v1652;
    try { v1652 = a4_species.slice(0); } catch (e) {}
    var c4_species = v1652;
    const v1656 = c4_species?.["0"];
    try { console.log(30, v1656); } catch (e) {}
    const v1661 = ([])?.join;
    let v1662;
    try { v1662 = v1661.call(c4_species, ","); } catch (e) {}
    try { console.log("30,2,3,4,5", v1662); } catch (e) {}
}
try { t12(); } catch (e) {}
function t13() {
    const v1667 = Symbol?.toPrimitive;
    const v1679 = {
        [v1667](a1669) {
            function f1673() {
                return 30;
            }
            const v1675 = { configurable: true, get: f1673 };
            try { Object.defineProperty(a5, "0", v1675); } catch (e) {}
            return 0;
        },
    };
    var p5 = v1679;
    var a5 = [1,2,3,4,5];
    let v1689;
    try { v1689 = a5.includes(30, p5); } catch (e) {}
    try { console.log(v1689); } catch (e) {}
    var a5_proto = {};
    function f1695() {
        function f1699() {
            return 30;
        }
        const v1701 = { configurable: true, get: f1699 };
        try { Object.defineProperty(a5_prototest, "1", v1701); } catch (e) {}
        return 1;
    }
    const v1705 = { get: f1695 };
    try { Object.defineProperty(a5_proto, "0", v1705); } catch (e) {}
    var a5_prototest = [,,3,4,5];
    a5_prototest.__proto__ = a5_proto;
    const v1716 = ([])?.includes;
    let v1717;
    try { v1717 = v1716.call(a5_prototest, 30); } catch (e) {}
    try { console.log(v1717); } catch (e) {}
}
try { t13(); } catch (e) {}
function t14() {
    const v1722 = Symbol?.toPrimitive;
    const v1740 = {
        [v1722](a1724) {
            function f1728() {
                return 20;
            }
            const v1730 = { configurable: true, get: f1728 };
            try { Object.defineProperty(a2, "0", v1730); } catch (e) {}
            function f1735() {
                return 30;
            }
            const v1737 = { configurable: true, get: f1735 };
            try { Object.defineProperty(a2, "1", v1737); } catch (e) {}
            return 10;
        },
    };
    var p2 = v1740;
    var a2 = [1,2,3,4,5];
    function f1749(a1750) {
        return (a1750 % p2) == 0;
    }
    let v1754;
    try { v1754 = a2.find(f1749); } catch (e) {}
    var c2 = v1754;
    try { console.log(30, c2); } catch (e) {}
    var a2_prototest = [,,3,4,5];
    var a2_proto = {};
    function f1768() {
        function f1771() {
            return 30;
        }
        const v1773 = { configurable: true, get: f1771 };
        try { Object.defineProperty(a2_prototest, "1", v1773); } catch (e) {}
        return 7;
    }
    const v1777 = { get: f1768 };
    try { Object.defineProperty(a2_proto, "0", v1777); } catch (e) {}
    a2_prototest.__proto__ = a2_proto;
    function f1780(a1781) {
        return (a1781 % 10) == 0;
    }
    const v1787 = ([])?.find;
    let v1788;
    try { v1788 = v1787.call(a2_prototest, f1780); } catch (e) {}
    var c2_prototest = v1788;
    try { console.log(30, c2_prototest); } catch (e) {}
    const v1792 = Symbol?.toPrimitive;
    const v1809 = {
        [v1792](a1794) {
            function f1798() {
                return 30;
            }
            const v1800 = { configurable: true, get: f1798 };
            try { Object.defineProperty(a3, "0", v1800); } catch (e) {}
            function f1804() {
                return 30;
            }
            const v1806 = { configurable: true, get: f1804 };
            try { Object.defineProperty(a3, "1", v1806); } catch (e) {}
            return 30;
        },
    };
    var p3 = v1809;
    var a3 = [1,2,3,4,5];
    function f1818(a1819) {
        return a1819 == p3;
    }
    let v1821;
    try { v1821 = a3.findIndex(f1818); } catch (e) {}
    var c3 = v1821;
    try { console.log(1, c3); } catch (e) {}
}
try { t14(); } catch (e) {}
function t15() {
    function f1827(a1828) {
        function f1832() {
            return 30;
        }
        const v1834 = { configurable: true, get: f1832 };
        try { Object.defineProperty(a4, "1", v1834); } catch (e) {}
        return a1828 * a1828;
    }
    var p4 = f1827;
    var a4 = [1,2,3,4,5];
    let v1846;
    try { v1846 = a4.map(p4); } catch (e) {}
    var c4 = v1846;
    const v1853 = [1,900,9,16,25];
    try { console.log(v1853, c4); } catch (e) {}
    function f1856(a1857) {
        const v1862 = { configurable: false, value: 30 };
        try { Object.defineProperty(a4_typedarray, "1", v1862); } catch (e) {}
        return a1857 * a1857;
    }
    var p4_typedarray = f1856;
    const v1873 = [1,2,3,4,5];
    let v1874;
    try { v1874 = new Int32Array(v1873); } catch (e) {}
    var a4_typedarray = v1874;
    let v1876;
    try { v1876 = a4_typedarray.map(p4_typedarray); } catch (e) {}
    var c4_typedarray = v1876;
    const v1883 = [1,900,9,16,25];
    try { console.log(v1883, c4_typedarray); } catch (e) {}
    function a4_constructor(a1886) {
    }
    function f1887() {
        function f1891() {
            return 30;
        }
        const v1893 = { configurable: true, get: f1891 };
        try { Object.defineProperty(a4_species, "1", v1893); } catch (e) {}
        return {};
    }
    a4_constructor[Symbol?.species] = f1887;
    var a4_species = [1,2,3,4,5];
    a4_species["constructor"] = a4_constructor;
    function f1907(a1908) {
        return a1908 * a1908;
    }
    let v1910;
    try { v1910 = a4_species.map(f1907); } catch (e) {}
    var c4_species = v1910;
    const v1917 = [1,900,9,16,25];
    try { console.log(v1917, c4_species); } catch (e) {}
    var a4_proto = {};
    function f1922() {
        function f1926() {
            return 30;
        }
        const v1928 = { configurable: true, get: f1926 };
        try { Object.defineProperty(a4_prototest, "1", v1928); } catch (e) {}
        return 7;
    }
    const v1932 = { get: f1922 };
    try { Object.defineProperty(a4_proto, "0", v1932); } catch (e) {}
    function f1935(a1936) {
        return a1936 * a1936;
    }
    var SquareNumber = f1935;
    var a4_prototest = [,,3,4,5];
    a4_prototest.__proto__ = a4_proto;
    const v1946 = ([])?.map;
    let v1947;
    try { v1947 = v1946.call(a4_prototest, SquareNumber); } catch (e) {}
    var c4_prototest = v1947;
    const v1954 = [49,900,9,16,25];
    try { console.log(v1954, c4_prototest); } catch (e) {}
}
try { t15(); } catch (e) {}
function t16() {
    const v1959 = Symbol?.toPrimitive;
    const v1977 = {
        [v1959](a1961) {
            function f1965() {
                return 30;
            }
            const v1967 = { configurable: true, get: f1965 };
            try { Object.defineProperty(a6, "0", v1967); } catch (e) {}
            function f1972() {
                return 30;
            }
            const v1974 = { configurable: true, get: f1972 };
            try { Object.defineProperty(a6, "1", v1974); } catch (e) {}
            return 0;
        },
    };
    var p6 = v1977;
    var a6 = [1,2,3,4,5];
    let v1986;
    try { v1986 = a6.reduce(AddNumbers, p6); } catch (e) {}
    var c6 = v1986;
    try { console.log(43, c6); } catch (e) {}
    var a6_proto = {};
    function f1994() {
        function f1998() {
            return 30;
        }
        const v2000 = { configurable: true, get: f1998 };
        try { Object.defineProperty(a6_prototest, "1", v2000); } catch (e) {}
        return 1;
    }
    const v2004 = { get: f1994 };
    try { Object.defineProperty(a6_proto, "0", v2004); } catch (e) {}
    var a6_prototest = [,,3,4,5];
    a6_prototest.__proto__ = a6_proto;
    const v2014 = ([])?.reduce;
    let v2015;
    try { v2015 = v2014.call(a6_prototest, AddNumbers); } catch (e) {}
    var c6_prototest = v2015;
    try { console.log(43, c6_prototest); } catch (e) {}
    var a6_es5 = [1,2,3,4,5];
    function f2028() {
        return 30;
    }
    const v2030 = { configurable: true, get: f2028 };
    try { Object.defineProperty(a6_es5, "0", v2030); } catch (e) {}
    let v2032;
    try { v2032 = a6_es5.reduce(AddNumbers); } catch (e) {}
    var c6_es5 = v2032;
    try { console.log(44, c6_es5); } catch (e) {}
}
try { t16(); } catch (e) {}
function t17() {
    const v2039 = Symbol?.toPrimitive;
    const v2057 = {
        [v2039](a2041) {
            function f2045() {
                return 30;
            }
            const v2047 = { configurable: true, get: f2045 };
            try { Object.defineProperty(a7, "4", v2047); } catch (e) {}
            function f2052() {
                return 30;
            }
            const v2054 = { configurable: true, get: f2052 };
            try { Object.defineProperty(a7, "1", v2054); } catch (e) {}
            return 0;
        },
    };
    var p7 = v2057;
    var a7 = [1,2,3,4,5];
    let v2066;
    try { v2066 = a7.reduceRight(AddNumbers, p7); } catch (e) {}
    var c7 = v2066;
    try { console.log(43, c7); } catch (e) {}
    var a7_proto = {};
    function f2074() {
        function f2078() {
            return 30;
        }
        const v2080 = { configurable: true, get: f2078 };
        try { Object.defineProperty(a7_prototest, "1", v2080); } catch (e) {}
        return 5;
    }
    const v2084 = { get: f2074 };
    try { Object.defineProperty(a7_proto, "4", v2084); } catch (e) {}
    var a7_prototest = [1,,3,4,,];
    a7_prototest.__proto__ = a7_proto;
    const v2094 = ([])?.reduceRight;
    let v2095;
    try { v2095 = v2094.call(a7_prototest, AddNumbers); } catch (e) {}
    var c7_prototest = v2095;
    try { console.log(43, c7_prototest); } catch (e) {}
    var a7_es5 = [1,2,3,4,5];
    function f2108() {
        return 30;
    }
    const v2110 = { configurable: true, get: f2108 };
    try { Object.defineProperty(a7_es5, "0", v2110); } catch (e) {}
    let v2112;
    try { v2112 = a7_es5.reduceRight(AddNumbers); } catch (e) {}
    var c7_es5 = v2112;
    try { console.log(44, c7_es5); } catch (e) {}
}
try { t17(); } catch (e) {}
function t18() {
    const v2119 = Symbol?.toPrimitive;
    const v2131 = {
        [v2119](a2121) {
            function f2125() {
                return 30;
            }
            const v2127 = { configurable: true, get: f2125 };
            try { Object.defineProperty(a8, "1", v2127); } catch (e) {}
            return 30;
        },
    };
    var p8 = v2131;
    function MatchNumber(a2134) {
        return a2134 == p8;
    }
    var a8 = [1,2,3,4,5];
    let v2143;
    try { v2143 = a8.some(MatchNumber); } catch (e) {}
    var c8 = v2143;
    try { console.log(c8); } catch (e) {}
    var a8_proto = {};
    function f2150() {
        function f2154() {
            return 30;
        }
        const v2156 = { configurable: true, get: f2154 };
        try { Object.defineProperty(a8_prototest, "1", v2156); } catch (e) {}
        return 5;
    }
    const v2160 = { get: f2150 };
    try { Object.defineProperty(a8_proto, "0", v2160); } catch (e) {}
    var a8_prototest = [,,3,4,5];
    a8_prototest.__proto__ = a8_proto;
    function f2169(a2170) {
        return a2170 == 30;
    }
    const v2174 = ([])?.some;
    let v2175;
    try { v2175 = v2174.call(a8_prototest, f2169); } catch (e) {}
    var c8_prototest = v2175;
    try { console.log(c8_prototest); } catch (e) {}
}
try { t18(); } catch (e) {}
function t19() {
    const v2181 = Symbol?.toPrimitive;
    const v2193 = {
        [v2181](a2183) {
            function f2187() {
                return 30;
            }
            const v2189 = { configurable: true, get: f2187 };
            try { Object.defineProperty(a9, "1", v2189); } catch (e) {}
            return 30;
        },
    };
    var p9 = v2193;
    function CompareNumber(a2196) {
        return a2196 < p9;
    }
    var a9 = [1,2,3,4,5];
    let v2205;
    try { v2205 = a9.every(CompareNumber); } catch (e) {}
    var c9 = v2205;
    try { console.log(c9); } catch (e) {}
    var a9_proto = {};
    function f2212() {
        function f2216() {
            return 30;
        }
        const v2218 = { configurable: true, get: f2216 };
        try { Object.defineProperty(a9_prototest, "1", v2218); } catch (e) {}
        return 1;
    }
    const v2222 = { get: f2212 };
    try { Object.defineProperty(a9_proto, "0", v2222); } catch (e) {}
    var a9_prototest = [,,3,4,5];
    a9_prototest.__proto__ = a9_proto;
    function f2231(a2232) {
        return a2232 < 30;
    }
    const v2236 = ([])?.every;
    let v2237;
    try { v2237 = v2236.call(a9_prototest, f2231); } catch (e) {}
    var c9_prototest = v2237;
    try { console.log(c9_prototest); } catch (e) {}
}
try { t19(); } catch (e) {}
function t20() {
    var temp = 30;
    const v2245 = Symbol?.toPrimitive;
    const v2258 = {
        [v2245](a2247) {
            function f2251() {
                return temp;
            }
            function f2252(a2253) {
                temp = a2253;
            }
            const v2254 = { configurable: true, get: f2251, set: f2252 };
            try { Object.defineProperty(a10, 1, v2254); } catch (e) {}
            return 0;
        },
    };
    var p10 = v2258;
    var a10 = [1,2,3,4,5];
    let v2268;
    try { v2268 = a10.fill(0, p10); } catch (e) {}
    var c10 = v2268;
    const v2275 = [0,0,0,0,0];
    try { console.log(v2275, c10); } catch (e) {}
}
try { t20(); } catch (e) {}
function t21() {
    const v2281 = Symbol?.toPrimitive;
    const v2299 = {
        [v2281](a2283) {
            function f2287() {
                return 30;
            }
            const v2289 = { configurable: true, get: f2287 };
            try { Object.defineProperty(a11, "0", v2289); } catch (e) {}
            function f2294() {
                return 30;
            }
            const v2296 = { configurable: true, get: f2294 };
            try { Object.defineProperty(a11, "4", v2296); } catch (e) {}
            return 0;
        },
    };
    var p11 = v2299;
    var a11 = [1,2,3,4,5];
    function f2308(a2309) {
        return (a2309 % 2) == p11;
    }
    let v2313;
    try { v2313 = a11.filter(f2308); } catch (e) {}
    var c11 = v2313;
    const v2318 = [2,4,30];
    try { console.log(v2318, c11); } catch (e) {}
    var a11_proto = {};
    function f2324() {
        function f2328() {
            return 30;
        }
        const v2330 = { configurable: true, get: f2328 };
        try { Object.defineProperty(a11_prototest, "1", v2330); } catch (e) {}
        return 1;
    }
    const v2334 = { get: f2324 };
    try { Object.defineProperty(a11_proto, "0", v2334); } catch (e) {}
    var a11_prototest = [,,3,4,5];
    a11_prototest.__proto__ = a11_proto;
    function f2343(a2344) {
        return (a2344 % 2) == 0;
    }
    const v2350 = ([])?.filter;
    let v2351;
    try { v2351 = v2350.call(a11_prototest, f2343); } catch (e) {}
    var c11_prototest = v2351;
    const v2355 = [30,4];
    try { console.log(v2355, c11_prototest); } catch (e) {}
    const v2357 = Symbol?.toPrimitive;
    const v2372 = {
        [v2357](a2359) {
            const v2364 = { configurable: false, value: 30 };
            try { Object.defineProperty(a11_typedarray, "0", v2364); } catch (e) {}
            const v2369 = { configurable: false, value: 30 };
            try { Object.defineProperty(a11_typedarray, "4", v2369); } catch (e) {}
            return 0;
        },
    };
    var p11_typedarray = v2372;
    const v2380 = [1,2,3,4,5];
    let v2381;
    try { v2381 = new Int16Array(v2380); } catch (e) {}
    var a11_typedarray = v2381;
    function f2383(a2384) {
        return (a2384 % 2) == p11_typedarray;
    }
    let v2388;
    try { v2388 = a11_typedarray.filter(f2383); } catch (e) {}
    var c11_typedarray = v2388;
    const v2393 = [2,4,30];
    try { console.log(v2393, c11_typedarray); } catch (e) {}
    function a11_constructor(a2396) {
    }
    function f2397() {
        function f2401() {
            return 30;
        }
        const v2403 = { configurable: true, get: f2401 };
        try { Object.defineProperty(a11_species, "0", v2403); } catch (e) {}
        return {};
    }
    a11_constructor[Symbol?.species] = f2397;
    var a11_species = [1,2,3,4,5];
    a11_species["constructor"] = a11_constructor;
    function f2415(a2416) {
        return (a2416 % 2) == 0;
    }
    let v2421;
    try { v2421 = a11_species.filter(f2415); } catch (e) {}
    var c11_species = v2421;
    const v2426 = [30,2,4];
    try { console.log(v2426, c11_species); } catch (e) {}
}
try { t21(); } catch (e) {}
function t22() {
    var a18 = [1,2,3,4,5];
    var c18 = "";
    function f2439(a2440, a2441) {
        if (a2441 == 0) {
            function f2446() {
                return 30;
            }
            const v2448 = { configurable: true, get: f2446 };
            try { Object.defineProperty(a18, "0", v2448); } catch (e) {}
            function f2453() {
                return 30;
            }
            const v2455 = { configurable: true, get: f2453 };
            try { Object.defineProperty(a18, "1", v2455); } catch (e) {}
        } else {
            c18 = c18 + ",";
        }
        c18 = c18 + (a2440 * a2440);
    }
    try { a18.forEach(f2439); } catch (e) {}
    try { console.log("1,900,9,16,25", c18); } catch (e) {}
    var a18_proto = {};
    function f2468() {
        function f2472() {
            return 30;
        }
        const v2474 = { configurable: true, get: f2472 };
        try { Object.defineProperty(a18_prototest, "1", v2474); } catch (e) {}
        return 1;
    }
    const v2478 = { get: f2468 };
    try { Object.defineProperty(a18_proto, "0", v2478); } catch (e) {}
    var a18_prototest = [,,3,4,5];
    a18_prototest.__proto__ = a18_proto;
    var c18_prototest = "";
    function f2489(a2490, a2491) {
        if (a2491 > 0) {
            c18_prototest += ",";
        }
        c18_prototest += a2490 * a2490;
    }
    const v2497 = ([])?.forEach;
    try { v2497.call(a18_prototest, f2489); } catch (e) {}
    try { console.log("1,900,9,16,25", c18_prototest); } catch (e) {}
    const v2507 = [1,2,3,4,5];
    let v2508;
    try { v2508 = new Int16Array(v2507); } catch (e) {}
    var a18_typedarray = v2508;
    var c18_typedarray = "";
    function f2512(a2513, a2514) {
        if (a2514 == 0) {
            const v2520 = { configurable: false, value: 30 };
            try { Object.defineProperty(a18_typedarray, "0", v2520); } catch (e) {}
            const v2525 = { configurable: false, value: 30 };
            try { Object.defineProperty(a18_typedarray, "1", v2525); } catch (e) {}
        } else {
            c18_typedarray = c18_typedarray + ",";
        }
        c18_typedarray = c18_typedarray + (a2513 * a2513);
    }
    try { a18_typedarray.forEach(f2512); } catch (e) {}
    try { console.log("1,900,9,16,25", c18_typedarray); } catch (e) {}
}
try { t22(); } catch (e) {}
function t23() {
    const v2537 = Symbol?.toPrimitive;
    const v2550 = {
        [v2537](a2539) {
            function f2543() {
                return 30;
            }
            const v2545 = { configurable: true, get: f2543 };
            try { Object.defineProperty(a21, "0", v2545); } catch (e) {}
            return -2;
        },
    };
    var p21 = v2550;
    var a21 = [1,2,3,4,5];
    let v2559;
    try { v2559 = a21.copyWithin(p21); } catch (e) {}
    var c21 = v2559;
    const v2566 = [30,2,3,30,2];
    try { console.log(v2566, c21); } catch (e) {}
    var a21_proto = {};
    function f2572() {
        function f2576() {
            return 2;
        }
        const v2578 = { configurable: true, get: f2576 };
        try { Object.defineProperty(a21_prototest, "1", v2578); } catch (e) {}
        return 30;
    }
    const v2582 = { get: f2572 };
    try { Object.defineProperty(a21_proto, "0", v2582); } catch (e) {}
    var a21_prototest = [,,3,4,5];
    a21_prototest.__proto__ = a21_proto;
    const v2592 = -2;
    const v2594 = ([])?.copyWithin;
    let v2595;
    try { v2595 = v2594.call(a21_prototest, v2592); } catch (e) {}
    var c21_prototest = v2595;
    const v2600 = ([])?.join;
    let v2601;
    try { v2601 = v2600.call(c21_prototest, ","); } catch (e) {}
    try { console.log("30,2,3,30,2", v2601); } catch (e) {}
    const v2603 = Symbol?.toPrimitive;
    const v2614 = {
        [v2603](a2605) {
            const v2610 = { configurable: false, value: 30 };
            try { Object.defineProperty(a21_typedarray, "0", v2610); } catch (e) {}
            return -2;
        },
    };
    var p21_typedarray = v2614;
    const v2622 = [1,2,3,4,5];
    let v2623;
    try { v2623 = new Int16Array(v2622); } catch (e) {}
    var a21_typedarray = v2623;
    let v2625;
    try { v2625 = a21_typedarray.copyWithin(p21_typedarray); } catch (e) {}
    var c21_typedarray = v2625;
    const v2632 = [30,2,3,30,2];
    try { console.log(v2632, c21_typedarray); } catch (e) {}
}
try { t23(); } catch (e) {}
