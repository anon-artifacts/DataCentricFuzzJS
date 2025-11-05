function f0() {
    let v3;
    try { v3 = new ArrayBuffer(1); } catch (e) {}
    const ab = v3;
    let v6;
    try { v6 = new DataView(ab); } catch (e) {}
    const dv = v6;
    function foo(a9) {
        let v11;
        try { v11 = a9.getInt8(0); } catch (e) {}
        return v11;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v19 = () => {
        let v20;
        try { v20 = foo(dv); } catch (e) {}
        return v20;
    };
    try { v19(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v24 = () => {
        let v25;
        try { v25 = foo(dv); } catch (e) {}
        return v25;
    };
    try { v24(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f0(); } catch (e) {}
function f29() {
    let v32;
    try { v32 = new ArrayBuffer(1); } catch (e) {}
    const ab = v32;
    let v35;
    try { v35 = new DataView(ab); } catch (e) {}
    const dv = v35;
    function foo(a38) {
        let v40;
        try { v40 = a38.getUint8(0); } catch (e) {}
        return v40;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v48 = () => {
        let v49;
        try { v49 = foo(dv); } catch (e) {}
        return v49;
    };
    try { v48(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v53 = () => {
        let v54;
        try { v54 = foo(dv); } catch (e) {}
        return v54;
    };
    try { v53(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f29(); } catch (e) {}
function f58() {
    let v61;
    try { v61 = new ArrayBuffer(2); } catch (e) {}
    const ab = v61;
    let v64;
    try { v64 = new DataView(ab); } catch (e) {}
    const dv = v64;
    function foo(a67) {
        let v70;
        try { v70 = a67.getInt16(0, true); } catch (e) {}
        return v70;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v78 = () => {
        let v79;
        try { v79 = foo(dv); } catch (e) {}
        return v79;
    };
    try { v78(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v83 = () => {
        let v84;
        try { v84 = foo(dv); } catch (e) {}
        return v84;
    };
    try { v83(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f58(); } catch (e) {}
function f88() {
    let v91;
    try { v91 = new ArrayBuffer(2); } catch (e) {}
    const ab = v91;
    let v94;
    try { v94 = new DataView(ab); } catch (e) {}
    const dv = v94;
    function foo(a97) {
        let v100;
        try { v100 = a97.getUint16(0, true); } catch (e) {}
        return v100;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v108 = () => {
        let v109;
        try { v109 = foo(dv); } catch (e) {}
        return v109;
    };
    try { v108(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v113 = () => {
        let v114;
        try { v114 = foo(dv); } catch (e) {}
        return v114;
    };
    try { v113(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f88(); } catch (e) {}
function f118() {
    let v121;
    try { v121 = new ArrayBuffer(4); } catch (e) {}
    const ab = v121;
    let v124;
    try { v124 = new DataView(ab); } catch (e) {}
    const dv = v124;
    function foo(a127) {
        let v130;
        try { v130 = a127.getInt32(0, true); } catch (e) {}
        return v130;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v138 = () => {
        let v139;
        try { v139 = foo(dv); } catch (e) {}
        return v139;
    };
    try { v138(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v143 = () => {
        let v144;
        try { v144 = foo(dv); } catch (e) {}
        return v144;
    };
    try { v143(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f118(); } catch (e) {}
function f148() {
    let v151;
    try { v151 = new ArrayBuffer(4); } catch (e) {}
    const ab = v151;
    let v154;
    try { v154 = new DataView(ab); } catch (e) {}
    const dv = v154;
    function foo(a157) {
        let v160;
        try { v160 = a157.getUint32(0, true); } catch (e) {}
        return v160;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v168 = () => {
        let v169;
        try { v169 = foo(dv); } catch (e) {}
        return v169;
    };
    try { v168(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v173 = () => {
        let v174;
        try { v174 = foo(dv); } catch (e) {}
        return v174;
    };
    try { v173(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f148(); } catch (e) {}
function f178() {
    let v181;
    try { v181 = new ArrayBuffer(4); } catch (e) {}
    const ab = v181;
    let v184;
    try { v184 = new DataView(ab); } catch (e) {}
    const dv = v184;
    function foo(a187) {
        let v190;
        try { v190 = a187.getFloat32(0, true); } catch (e) {}
        return v190;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v198 = () => {
        let v199;
        try { v199 = foo(dv); } catch (e) {}
        return v199;
    };
    try { v198(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v203 = () => {
        let v204;
        try { v204 = foo(dv); } catch (e) {}
        return v204;
    };
    try { v203(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f178(); } catch (e) {}
function f208() {
    let v211;
    try { v211 = new ArrayBuffer(8); } catch (e) {}
    const ab = v211;
    let v214;
    try { v214 = new DataView(ab); } catch (e) {}
    const dv = v214;
    function foo(a217) {
        let v220;
        try { v220 = a217.getFloat64(0, true); } catch (e) {}
        return v220;
    }
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(dv); } catch (e) {}
    try { foo(); } catch (e) {}
    const v228 = () => {
        let v229;
        try { v229 = foo(dv); } catch (e) {}
        return v229;
    };
    try { v228(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v233 = () => {
        let v234;
        try { v234 = foo(dv); } catch (e) {}
        return v234;
    };
    try { v233(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f208(); } catch (e) {}
function f238() {
    let v241;
    try { v241 = new ArrayBuffer(1); } catch (e) {}
    const ab = v241;
    let v244;
    try { v244 = new DataView(ab); } catch (e) {}
    const dv = v244;
    function foo(a247, a248) {
        let v250;
        try { v250 = a247.setInt8(0, a248); } catch (e) {}
        return v250;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getInt8(0); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getInt8(0); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v267 = () => {
        let v269;
        try { v269 = foo(dv, 4); } catch (e) {}
        return v269;
    };
    try { v267(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v273 = () => {
        let v275;
        try { v275 = foo(dv, 5); } catch (e) {}
        return v275;
    };
    try { v273(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f238(); } catch (e) {}
function f279() {
    let v282;
    try { v282 = new ArrayBuffer(1); } catch (e) {}
    const ab = v282;
    let v285;
    try { v285 = new DataView(ab); } catch (e) {}
    const dv = v285;
    function foo(a288, a289) {
        let v291;
        try { v291 = a288.setUint8(0, a289); } catch (e) {}
        return v291;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getUint8(0); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getUint8(0); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v308 = () => {
        let v310;
        try { v310 = foo(dv, 4); } catch (e) {}
        return v310;
    };
    try { v308(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v314 = () => {
        let v316;
        try { v316 = foo(dv, 5); } catch (e) {}
        return v316;
    };
    try { v314(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f279(); } catch (e) {}
function f320() {
    let v323;
    try { v323 = new ArrayBuffer(2); } catch (e) {}
    const ab = v323;
    let v326;
    try { v326 = new DataView(ab); } catch (e) {}
    const dv = v326;
    function foo(a329, a330) {
        let v333;
        try { v333 = a329.setInt16(0, a330, true); } catch (e) {}
        return v333;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getInt16(0, true); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getInt16(0, true); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v352 = () => {
        let v354;
        try { v354 = foo(dv, 4); } catch (e) {}
        return v354;
    };
    try { v352(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v358 = () => {
        let v360;
        try { v360 = foo(dv, 5); } catch (e) {}
        return v360;
    };
    try { v358(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f320(); } catch (e) {}
function f364() {
    let v367;
    try { v367 = new ArrayBuffer(2); } catch (e) {}
    const ab = v367;
    let v370;
    try { v370 = new DataView(ab); } catch (e) {}
    const dv = v370;
    function foo(a373, a374) {
        let v377;
        try { v377 = a373.setUint16(0, a374, true); } catch (e) {}
        return v377;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getUint16(0, true); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getUint16(0, true); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v396 = () => {
        let v398;
        try { v398 = foo(dv, 4); } catch (e) {}
        return v398;
    };
    try { v396(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v402 = () => {
        let v404;
        try { v404 = foo(dv, 5); } catch (e) {}
        return v404;
    };
    try { v402(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f364(); } catch (e) {}
function f408() {
    let v411;
    try { v411 = new ArrayBuffer(4); } catch (e) {}
    const ab = v411;
    let v414;
    try { v414 = new DataView(ab); } catch (e) {}
    const dv = v414;
    function foo(a417, a418) {
        let v421;
        try { v421 = a417.setInt32(0, a418, true); } catch (e) {}
        return v421;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getInt32(0, true); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getInt32(0, true); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v440 = () => {
        let v442;
        try { v442 = foo(dv, 4); } catch (e) {}
        return v442;
    };
    try { v440(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v446 = () => {
        let v448;
        try { v448 = foo(dv, 5); } catch (e) {}
        return v448;
    };
    try { v446(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f408(); } catch (e) {}
function f452() {
    let v455;
    try { v455 = new ArrayBuffer(4); } catch (e) {}
    const ab = v455;
    let v458;
    try { v458 = new DataView(ab); } catch (e) {}
    const dv = v458;
    function foo(a461, a462) {
        let v465;
        try { v465 = a461.setUint32(0, a462, true); } catch (e) {}
        return v465;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getUint32(0, true); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getUint32(0, true); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v484 = () => {
        let v486;
        try { v486 = foo(dv, 4); } catch (e) {}
        return v486;
    };
    try { v484(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v490 = () => {
        let v492;
        try { v492 = foo(dv, 5); } catch (e) {}
        return v492;
    };
    try { v490(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f452(); } catch (e) {}
function f496() {
    let v499;
    try { v499 = new ArrayBuffer(4); } catch (e) {}
    const ab = v499;
    let v502;
    try { v502 = new DataView(ab); } catch (e) {}
    const dv = v502;
    function foo(a505, a506) {
        let v509;
        try { v509 = a505.setFloat32(0, a506, true); } catch (e) {}
        return v509;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getFloat32(0, true); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getFloat32(0, true); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v528 = () => {
        let v530;
        try { v530 = foo(dv, 4); } catch (e) {}
        return v530;
    };
    try { v528(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v534 = () => {
        let v536;
        try { v536 = foo(dv, 5); } catch (e) {}
        return v536;
    };
    try { v534(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f496(); } catch (e) {}
function f540() {
    let v543;
    try { v543 = new ArrayBuffer(8); } catch (e) {}
    const ab = v543;
    let v546;
    try { v546 = new DataView(ab); } catch (e) {}
    const dv = v546;
    function foo(a549, a550) {
        let v553;
        try { v553 = a549.setFloat64(0, a550, true); } catch (e) {}
        return v553;
    }
    try { foo(dv, 1); } catch (e) {}
    try { dv.getFloat64(0, true); } catch (e) {}
    try { foo(dv, 2); } catch (e) {}
    try { dv.getFloat64(0, true); } catch (e) {}
    try { foo(dv, 3); } catch (e) {}
    try { foo(); } catch (e) {}
    const v572 = () => {
        let v574;
        try { v574 = foo(dv, 4); } catch (e) {}
        return v574;
    };
    try { v572(); } catch (e) {}
    try { foo(); } catch (e) {}
    const v578 = () => {
        let v580;
        try { v580 = foo(dv, 5); } catch (e) {}
        return v580;
    };
    try { v578(); } catch (e) {}
    try { foo(); } catch (e) {}
}
try { f540(); } catch (e) {}
