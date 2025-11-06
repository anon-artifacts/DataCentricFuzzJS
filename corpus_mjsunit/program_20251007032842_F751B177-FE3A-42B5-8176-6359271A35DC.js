try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        v2?.prototype?.indexOf?.length;
        const v13 = [1,2,3,4,5];
        let v14;
        try { v14 = new v2(v13); } catch (e) {}
        try { v14.indexOf(0); } catch (e) {}
        -1;
        const v24 = [1,2,3,4,5];
        let v25;
        try { v25 = new v2(v24); } catch (e) {}
        try { v25.indexOf(1); } catch (e) {}
        const v34 = [1,2,3,4,5];
        let v35;
        try { v35 = new v2(v34); } catch (e) {}
        try { v35.indexOf(5); } catch (e) {}
        const v44 = [1,2,3,4,5];
        let v45;
        try { v45 = new v2(v44); } catch (e) {}
        try { v45.indexOf(6); } catch (e) {}
        -1;
        const v55 = [1,2,1,2,1];
        let v56;
        try { v56 = new v2(v55); } catch (e) {}
        try { v56.indexOf(1); } catch (e) {}
        let v60;
        try { v60 = isFloatConstructor(v2); } catch (e) {}
        if (v60) {
            const v65 = [NaN,0,-0];
            let v66;
            try { v66 = new v2(v65); } catch (e) {}
            try { v66.indexOf(NaN); } catch (e) {}
            -1;
            const v74 = [NaN,0,-0];
            let v75;
            try { v75 = new v2(v74); } catch (e) {}
            try { v75.indexOf(0); } catch (e) {}
            const v79 = -0;
            const v83 = [NaN,0,-0];
            let v84;
            try { v84 = new v2(v83); } catch (e) {}
            try { v84.indexOf(v79); } catch (e) {}
        } else {
            const v91 = [NaN,0,-0];
            let v92;
            try { v92 = new v2(v91); } catch (e) {}
            try { v92.indexOf(NaN); } catch (e) {}
            -1;
            const v100 = [NaN,0,-0];
            let v101;
            try { v101 = new v2(v100); } catch (e) {}
            try { v101.indexOf(0); } catch (e) {}
            const v105 = -0;
            const v109 = [NaN,0,-0];
            let v110;
            try { v110 = new v2(v109); } catch (e) {}
            try { v110.indexOf(v105); } catch (e) {}
        }
        const v120 = [1,2,3,4,5];
        let v121;
        try { v121 = new v2(v120); } catch (e) {}
        try { v121.indexOf(1, 1); } catch (e) {}
        -1;
        const v127 = -100;
        const v133 = [1,2,3,4,5];
        let v134;
        try { v134 = new v2(v133); } catch (e) {}
        try { v134.indexOf(1, v127); } catch (e) {}
        const v144 = [1,2,3,4,5];
        let v145;
        try { v145 = new v2(v144); } catch (e) {}
        try { v145.indexOf(3, 100); } catch (e) {}
        -1;
        const v151 = -1;
        const v157 = [1,2,3,4,5];
        let v158;
        try { v158 = new v2(v157); } catch (e) {}
        try { v158.indexOf(5, v151); } catch (e) {}
        const v168 = [1,2,1,2,1];
        let v169;
        try { v169 = new v2(v168); } catch (e) {}
        try { v169.indexOf(1, 2); } catch (e) {}
        const v174 = -2;
        const v180 = [1,2,1,2,1];
        let v181;
        try { v181 = new v2(v180); } catch (e) {}
        try { v181.indexOf(1, v174); } catch (e) {}
        let v190;
        try { v190 = Symbol(); } catch (e) {}
        const v191 = [];
        const v192 = {};
        const v193 = /./;
        let v195;
        try { v195 = new v2(); } catch (e) {}
        const v196 = {};
        let v197;
        try { v197 = new Proxy(v195, v196); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v190,v191,v192,v193,v197];
        const v200 = (a201) => {
            const v202 = () => {
                const v204 = v2?.prototype?.indexOf;
                try { v204.call(a201); } catch (e) {}
            };
            try { v202(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v200); } catch (e) {}
        const v216 = [0,1,2,3,5];
        let v217;
        try { v217 = new v2(v216); } catch (e) {}
        const v223 = {
            get() {
                let v222;
                try { v222 = new Error("length accessor called"); } catch (e) {}
                throw v222;
            },
        };
        let v225;
        try { v225 = Object.defineProperty(v217, "length", v223); } catch (e) {}
        try { v225.indexOf(1); } catch (e) {}
    }
    let v229;
    try { v229 = anyTypedArrayConstructors.filter(isFloatConstructor); } catch (e) {}
    for (const v230 of v229) {
        if (v230?.BYTES_PER_ELEMENT === 4) {
            const v238 = [0.1,0.2,0.3];
            let v239;
            try { v239 = new v230(v238); } catch (e) {}
            try { v239.indexOf(0.2); } catch (e) {}
            -1;
            let v245;
            try { v245 = Math.fround(0.2); } catch (e) {}
            const v249 = [0.1,0.2,0.3];
            let v250;
            try { v250 = new v230(v249); } catch (e) {}
            try { v250.indexOf(v245); } catch (e) {}
        } else {
            v230?.BYTES_PER_ELEMENT;
            const v259 = [0.1,0.2,0.3];
            let v260;
            try { v260 = new v230(v259); } catch (e) {}
            try { v260.indexOf(0.2); } catch (e) {}
        }
    }
    for (const v263 of anyTypedArrayConstructors) {
        v263?.prototype?.lastIndexOf?.length;
        const v274 = [1,2,3,4,5];
        let v275;
        try { v275 = new v263(v274); } catch (e) {}
        try { v275.lastIndexOf(0); } catch (e) {}
        -1;
        const v285 = [1,2,3,4,5];
        let v286;
        try { v286 = new v263(v285); } catch (e) {}
        try { v286.lastIndexOf(1); } catch (e) {}
        const v295 = [1,2,3,4,5];
        let v296;
        try { v296 = new v263(v295); } catch (e) {}
        try { v296.lastIndexOf(5); } catch (e) {}
        const v305 = [1,2,3,4,5];
        let v306;
        try { v306 = new v263(v305); } catch (e) {}
        try { v306.lastIndexOf(6); } catch (e) {}
        -1;
        const v316 = [1,2,1,2,1];
        let v317;
        try { v317 = new v263(v316); } catch (e) {}
        try { v317.lastIndexOf(1); } catch (e) {}
        let v320;
        try { v320 = isFloatConstructor(v263); } catch (e) {}
        if (v320) {
            const v325 = [NaN,0,-0];
            let v326;
            try { v326 = new v263(v325); } catch (e) {}
            try { v326.lastIndexOf(NaN); } catch (e) {}
            -1;
            const v334 = [NaN,0,-0];
            let v335;
            try { v335 = new v263(v334); } catch (e) {}
            try { v335.lastIndexOf(0); } catch (e) {}
            const v339 = -0;
            const v343 = [NaN,0,-0];
            let v344;
            try { v344 = new v263(v343); } catch (e) {}
            try { v344.lastIndexOf(v339); } catch (e) {}
        } else {
            const v351 = [NaN,0,-0];
            let v352;
            try { v352 = new v263(v351); } catch (e) {}
            try { v352.lastIndexOf(NaN); } catch (e) {}
            -1;
            const v360 = [NaN,0,-0];
            let v361;
            try { v361 = new v263(v360); } catch (e) {}
            try { v361.lastIndexOf(0); } catch (e) {}
            const v365 = -0;
            const v369 = [NaN,0,-0];
            let v370;
            try { v370 = new v263(v369); } catch (e) {}
            try { v370.lastIndexOf(v365); } catch (e) {}
        }
        const v380 = [1,2,3,4,5];
        let v381;
        try { v381 = new v263(v380); } catch (e) {}
        try { v381.lastIndexOf(1, 1); } catch (e) {}
        const v386 = -100;
        const v392 = [1,2,3,4,5];
        let v393;
        try { v393 = new v263(v392); } catch (e) {}
        try { v393.lastIndexOf(1, v386); } catch (e) {}
        -1;
        const v404 = [1,2,3,4,5];
        let v405;
        try { v405 = new v263(v404); } catch (e) {}
        try { v405.lastIndexOf(3, 100); } catch (e) {}
        const v410 = -1;
        const v416 = [1,2,3,4,5];
        let v417;
        try { v417 = new v263(v416); } catch (e) {}
        try { v417.lastIndexOf(5, v410); } catch (e) {}
        const v427 = [1,2,1,2,1];
        let v428;
        try { v428 = new v263(v427); } catch (e) {}
        try { v428.lastIndexOf(1, 2); } catch (e) {}
        const v433 = -2;
        const v439 = [1,2,1,2,1];
        let v440;
        try { v440 = new v263(v439); } catch (e) {}
        try { v440.lastIndexOf(1, v433); } catch (e) {}
        let v449;
        try { v449 = Symbol(); } catch (e) {}
        const v450 = [];
        const v451 = {};
        const v452 = /./;
        let v454;
        try { v454 = new v263(); } catch (e) {}
        const v455 = {};
        let v456;
        try { v456 = new Proxy(v454, v455); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v449,v450,v451,v452,v456];
        const v459 = (a460) => {
            const v461 = () => {
                const v463 = v263?.prototype?.lastIndexOf;
                try { v463.call(a460); } catch (e) {}
            };
            try { v461(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v459); } catch (e) {}
        const v475 = [0,1,2,3,5];
        let v476;
        try { v476 = new v263(v475); } catch (e) {}
        const v482 = {
            get() {
                let v481;
                try { v481 = new Error("length accessor called"); } catch (e) {}
                throw v481;
            },
        };
        let v484;
        try { v484 = Object.defineProperty(v476, "length", v482); } catch (e) {}
        try { v484.lastIndexOf(1); } catch (e) {}
        const v491 = [10,20,10];
        let v492;
        try { v492 = new v263(v491); } catch (e) {}
        try { v492.lastIndexOf(10); } catch (e) {}
        const v500 = [10,20,10];
        let v501;
        try { v501 = new v263(v500); } catch (e) {}
        try { v501.lastIndexOf(10, undefined); } catch (e) {}
    }
    let v504;
    try { v504 = anyTypedArrayConstructors.filter(isFloatConstructor); } catch (e) {}
    for (const v505 of v504) {
        if (v505?.BYTES_PER_ELEMENT === 4) {
            const v513 = [0.1,0.2,0.3];
            let v514;
            try { v514 = new v505(v513); } catch (e) {}
            try { v514.lastIndexOf(0.2); } catch (e) {}
            -1;
            let v520;
            try { v520 = Math.fround(0.2); } catch (e) {}
            const v524 = [0.1,0.2,0.3];
            let v525;
            try { v525 = new v505(v524); } catch (e) {}
            try { v525.lastIndexOf(v520); } catch (e) {}
        } else {
            v505?.BYTES_PER_ELEMENT;
            const v534 = [0.1,0.2,0.3];
            let v535;
            try { v535 = new v505(v534); } catch (e) {}
            try { v535.lastIndexOf(0.2); } catch (e) {}
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e544) {
}
