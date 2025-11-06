try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        v2?.prototype?.fill?.length;
        const v8 = [];
        let v9;
        try { v9 = new v2(v8); } catch (e) {}
        try { v9.fill(1); } catch (e) {}
        const v11 = [];
        try { new v2(v11); } catch (e) {}
        const v17 = [1,1,1];
        let v18;
        try { v18 = new v2(v17); } catch (e) {}
        try { v18.fill(2); } catch (e) {}
        const v23 = [2,2,2];
        try { new v2(v23); } catch (e) {}
        const v30 = [1,1,1];
        let v31;
        try { v31 = new v2(v30); } catch (e) {}
        try { v31.fill(2, 1); } catch (e) {}
        const v36 = [1,2,2];
        try { new v2(v36); } catch (e) {}
        const v44 = [1,1,1];
        let v45;
        try { v45 = new v2(v44); } catch (e) {}
        try { v45.fill(2, 1, 2); } catch (e) {}
        const v50 = [1,2,1];
        try { new v2(v50); } catch (e) {}
        const v54 = -2;
        const v58 = [1,1,1];
        let v59;
        try { v59 = new v2(v58); } catch (e) {}
        try { v59.fill(2, v54); } catch (e) {}
        const v64 = [1,2,2];
        try { new v2(v64); } catch (e) {}
        const v68 = -2;
        const v70 = -1;
        const v74 = [1,1,1];
        let v75;
        try { v75 = new v2(v74); } catch (e) {}
        try { v75.fill(2, v68, v70); } catch (e) {}
        const v80 = [1,2,1];
        try { new v2(v80); } catch (e) {}
        const v87 = [1,1,1];
        let v88;
        try { v88 = new v2(v87); } catch (e) {}
        try { v88.fill(2, undefined); } catch (e) {}
        const v93 = [2,2,2];
        try { new v2(v93); } catch (e) {}
        const v101 = [1,1,1];
        let v102;
        try { v102 = new v2(v101); } catch (e) {}
        try { v102.fill(2, undefined, undefined); } catch (e) {}
        const v107 = [2,2,2];
        try { new v2(v107); } catch (e) {}
        const v115 = [1,1,1];
        let v116;
        try { v116 = new v2(v115); } catch (e) {}
        try { v116.fill(2, 1, undefined); } catch (e) {}
        const v121 = [1,2,2];
        try { new v2(v121); } catch (e) {}
        const v129 = [1,1,1];
        let v130;
        try { v130 = new v2(v129); } catch (e) {}
        try { v130.fill(2, undefined, 1); } catch (e) {}
        const v135 = [2,1,1];
        try { new v2(v135); } catch (e) {}
        const v143 = [1,1,1];
        let v144;
        try { v144 = new v2(v143); } catch (e) {}
        try { v144.fill(2, 2, 1); } catch (e) {}
        const v149 = [1,1,1];
        try { new v2(v149); } catch (e) {}
        const v153 = -1;
        const v158 = [1,1,1];
        let v159;
        try { v159 = new v2(v158); } catch (e) {}
        try { v159.fill(2, v153, 1); } catch (e) {}
        const v164 = [1,1,1];
        try { new v2(v164); } catch (e) {}
        const v168 = -2;
        const v173 = [1,1,1];
        let v174;
        try { v174 = new v2(v173); } catch (e) {}
        try { v174.fill(2, v168, 1); } catch (e) {}
        const v179 = [1,1,1];
        try { new v2(v179); } catch (e) {}
        const v184 = -2;
        const v188 = [1,1,1];
        let v189;
        try { v189 = new v2(v188); } catch (e) {}
        try { v189.fill(2, 1, v184); } catch (e) {}
        const v194 = [1,1,1];
        try { new v2(v194); } catch (e) {}
        const v201 = [1,1,1];
        let v202;
        try { v202 = new v2(v201); } catch (e) {}
        try { v202.fill(2, 0.1); } catch (e) {}
        const v207 = [2,2,2];
        try { new v2(v207); } catch (e) {}
        const v214 = [1,1,1];
        let v215;
        try { v215 = new v2(v214); } catch (e) {}
        try { v215.fill(2, 0.9); } catch (e) {}
        const v220 = [2,2,2];
        try { new v2(v220); } catch (e) {}
        const v227 = [1,1,1];
        let v228;
        try { v228 = new v2(v227); } catch (e) {}
        try { v228.fill(2, 1.1); } catch (e) {}
        const v233 = [1,2,2];
        try { new v2(v233); } catch (e) {}
        const v241 = [1,1,1];
        let v242;
        try { v242 = new v2(v241); } catch (e) {}
        try { v242.fill(2, 0.1, 0.9); } catch (e) {}
        const v247 = [1,1,1];
        try { new v2(v247); } catch (e) {}
        const v255 = [1,1,1];
        let v256;
        try { v256 = new v2(v255); } catch (e) {}
        try { v256.fill(2, 0.1, 1.9); } catch (e) {}
        const v261 = [2,1,1];
        try { new v2(v261); } catch (e) {}
        const v269 = [1,1,1];
        let v270;
        try { v270 = new v2(v269); } catch (e) {}
        try { v270.fill(2, 0.1, 1.9); } catch (e) {}
        const v275 = [2,1,1];
        try { new v2(v275); } catch (e) {}
        const v279 = -0;
        const v283 = [1,1,1];
        let v284;
        try { v284 = new v2(v283); } catch (e) {}
        try { v284.fill(2, v279); } catch (e) {}
        const v289 = [2,2,2];
        try { new v2(v289); } catch (e) {}
        const v294 = -0;
        const v298 = [1,1,1];
        let v299;
        try { v299 = new v2(v298); } catch (e) {}
        try { v299.fill(2, 0, v294); } catch (e) {}
        const v304 = [1,1,1];
        try { new v2(v304); } catch (e) {}
        const v311 = [1,1,1];
        let v312;
        try { v312 = new v2(v311); } catch (e) {}
        try { v312.fill(2, NaN); } catch (e) {}
        const v317 = [2,2,2];
        try { new v2(v317); } catch (e) {}
        const v324 = [1,1,1];
        let v325;
        try { v325 = new v2(v324); } catch (e) {}
        try { v325.fill(2, 0, NaN); } catch (e) {}
        const v330 = [1,1,1];
        try { new v2(v330); } catch (e) {}
        const v337 = [1,1,1];
        let v338;
        try { v338 = new v2(v337); } catch (e) {}
        try { v338.fill(2, false); } catch (e) {}
        const v343 = [2,2,2];
        try { new v2(v343); } catch (e) {}
        const v350 = [1,1,1];
        let v351;
        try { v351 = new v2(v350); } catch (e) {}
        try { v351.fill(2, true); } catch (e) {}
        const v356 = [1,2,2];
        try { new v2(v356); } catch (e) {}
        const v363 = [1,1,1];
        let v364;
        try { v364 = new v2(v363); } catch (e) {}
        try { v364.fill(2, "0"); } catch (e) {}
        const v369 = [2,2,2];
        try { new v2(v369); } catch (e) {}
        const v376 = [1,1,1];
        let v377;
        try { v377 = new v2(v376); } catch (e) {}
        try { v377.fill(2, "1"); } catch (e) {}
        const v382 = [1,2,2];
        try { new v2(v382); } catch (e) {}
        const v389 = [1,1,1];
        let v390;
        try { v390 = new v2(v389); } catch (e) {}
        try { v390.fill(2, "-2"); } catch (e) {}
        const v395 = [1,2,2];
        try { new v2(v395); } catch (e) {}
        const v403 = [1,1,1];
        let v404;
        try { v404 = new v2(v403); } catch (e) {}
        try { v404.fill(2, "-2", "-1"); } catch (e) {}
        const v409 = [1,2,1];
        try { new v2(v409); } catch (e) {}
        const v412 = () => {
            return 1;
        };
        const v414 = { valueOf: v412 };
        const v418 = [1,1,1];
        let v419;
        try { v419 = new v2(v418); } catch (e) {}
        try { v419.fill(2, v414); } catch (e) {}
        const v424 = [1,2,2];
        try { new v2(v424); } catch (e) {}
        const v428 = () => {
            return 1;
        };
        const v430 = { valueOf: v428 };
        const v434 = [1,1,1];
        let v435;
        try { v435 = new v2(v434); } catch (e) {}
        try { v435.fill(2, 0, v430); } catch (e) {}
        const v440 = [2,1,1];
        try { new v2(v440); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v446;
            try { v446 = newGlobal(); } catch (e) {}
            var fill = v446?.[v2?.name]?.prototype?.fill;
            const v455 = [3,2,1];
            let v456;
            try { v456 = new v2(v455); } catch (e) {}
            try { fill.call(v456, 2); } catch (e) {}
            const v462 = [2,2,2];
            try { new v2(v462); } catch (e) {}
        }
        let v470;
        try { v470 = Symbol(); } catch (e) {}
        const v471 = [];
        const v472 = {};
        const v473 = /./;
        let v475;
        try { v475 = new v2(); } catch (e) {}
        const v476 = {};
        let v477;
        try { v477 = new Proxy(v475, v476); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v470,v471,v472,v473,v477];
        const v480 = (a481) => {
            const v482 = () => {
                const v485 = v2?.prototype?.fill;
                try { v485.call(a481, 1); } catch (e) {}
            };
            try { v482(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v480); } catch (e) {}
        const v494 = [1,2,3];
        let v495;
        try { v495 = new v2(v494); } catch (e) {}
        const v501 = {
            get() {
                let v500;
                try { v500 = new Error("length accessor called"); } catch (e) {}
                throw v500;
            },
        };
        let v503;
        try { v503 = Object.defineProperty(v495, "length", v501); } catch (e) {}
        try { v503.fill(1); } catch (e) {}
    }
    let v506;
    try { v506 = anyTypedArrayConstructors.filter(isFloatConstructor); } catch (e) {}
    for (const v507 of v506) {
        const v511 = [0,0];
        let v512;
        try { v512 = new v507(v511); } catch (e) {}
        try { v512.fill(NaN); } catch (e) {}
        const v514 = [NaN,NaN];
        try { new v507(v514); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e522) {
}
