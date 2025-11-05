try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        v2?.prototype?.reduce?.length;
        const v12 = [1,2,3,4,5];
        let v13;
        try { v13 = new v2(v12); } catch (e) {}
        var arr = v13;
        const v15 = (a16, a17) => {
            return a16 + a17;
        };
        try { arr.reduce(v15); } catch (e) {}
        const v21 = (a22, a23) => {
            return a23 - a22;
        };
        try { arr.reduce(v21); } catch (e) {}
        var count = 0;
        var sum = 0;
        const v31 = (a32, a33, a34, a35) => {
            count++;
            sum += a33;
            a33 - 1;
            arr?.[a34];
            return a32 * a33;
        };
        try { arr.reduce(v31); } catch (e) {}
        const v45 = (a46, a47) => {
            return a46 + a47;
        };
        const v50 = -15;
        try { arr.reduce(v45, v50); } catch (e) {}
        const v53 = (a54, a55) => {
            return a54 + a55;
        };
        try { arr.reduce(v53, ""); } catch (e) {}
        const v60 = (a61, a62) => {
            let v63;
            try { v63 = a61.concat(a62); } catch (e) {}
            return v63;
        };
        const v64 = [];
        try { arr.reduce(v60, v64); } catch (e) {}
        [1,2,3,4,5];
        var global = this;
        function f74() {
        }
        try { arr.reduce(f74); } catch (e) {}
        function f77() {
            'use strict';
        }
        try { arr.reduce(f77); } catch (e) {}
        const v81 = () => {
            return global;
        };
        try { arr.reduce(v81); } catch (e) {}
        var count = 0;
        var sum = 0;
        const v88 = () => {
            const v89 = (a90, a91, a92, a93) => {
                count++;
                sum += a91;
                if (a92 === 3) {
                    let v99;
                    try { v99 = TypeError("reduce"); } catch (e) {}
                    throw v99;
                }
            };
            try { arr.reduce(v89); } catch (e) {}
        };
        try { v88(); } catch (e) {}
        const v105 = () => {
            try { arr.reduce(); } catch (e) {}
        };
        try { v105(); } catch (e) {}
        let v114;
        try { v114 = Symbol(); } catch (e) {}
        const v115 = [];
        var invalidCallbacks = [,null,1,false,"",v114,v115,{},/./];
        const v120 = (a121) => {
            const v122 = () => {
                try { arr.reduce(a121); } catch (e) {}
            };
            try { v122(); } catch (e) {}
        };
        try { invalidCallbacks.forEach(v120); } catch (e) {}
        function* f126() {
            throw "This line will not be executed";
        }
        try { arr.reduce(f126); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v133;
            try { v133 = newGlobal(); } catch (e) {}
            var reduce = v133?.[v2?.name]?.prototype?.reduce;
            const v139 = (a140, a141) => {
                let v143;
                try { v143 = Math.min(a140, a141); } catch (e) {}
                return v143;
            };
            try { reduce.call(arr, v139); } catch (e) {}
        }
        let v151;
        try { v151 = Symbol(); } catch (e) {}
        const v152 = [];
        const v153 = {};
        const v154 = /./;
        let v157;
        try { v157 = new v2(3); } catch (e) {}
        const v158 = {};
        let v159;
        try { v159 = new Proxy(v157, v158); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v151,v152,v153,v154,v159];
        const v162 = (a163) => {
            const v164 = () => {
                const v165 = () => {
                };
                const v167 = v2?.prototype?.reduce;
                try { v167.call(a163, v165); } catch (e) {}
            };
            try { v164(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v162); } catch (e) {}
        const v172 = (a173, a174) => {
            let v176;
            try { v176 = Math.max(a173, a174); } catch (e) {}
            return v176;
        };
        const v182 = {
            get() {
                let v181;
                try { v181 = new Error("length accessor called"); } catch (e) {}
                throw v181;
            },
        };
        let v184;
        try { v184 = Object.defineProperty(arr, "length", v182); } catch (e) {}
        try { v184.reduce(v172); } catch (e) {}
    }
    for (const v187 of anyTypedArrayConstructors) {
        v187?.prototype?.reduceRight?.length;
        const v197 = [1,2,3,4,5];
        let v198;
        try { v198 = new v187(v197); } catch (e) {}
        var arr = v198;
        const v200 = (a201, a202) => {
            return a201 + a202;
        };
        try { arr.reduceRight(v200); } catch (e) {}
        const v206 = (a207, a208) => {
            return a208 - a207;
        };
        try { arr.reduceRight(v206); } catch (e) {}
        var count = 0;
        var sum = 0;
        const v216 = (a217, a218, a219, a220) => {
            count++;
            sum += a218;
            a218 - 1;
            arr?.[a219];
            return a217 * a218;
        };
        try { arr.reduceRight(v216); } catch (e) {}
        const v230 = (a231, a232) => {
            return a231 + a232;
        };
        const v235 = -15;
        try { arr.reduceRight(v230, v235); } catch (e) {}
        const v238 = (a239, a240) => {
            return a239 + a240;
        };
        try { arr.reduceRight(v238, ""); } catch (e) {}
        const v245 = (a246, a247) => {
            let v248;
            try { v248 = a246.concat(a247); } catch (e) {}
            return v248;
        };
        const v249 = [];
        try { arr.reduceRight(v245, v249); } catch (e) {}
        [5,4,3,2,1];
        var global = this;
        function f259() {
        }
        try { arr.reduceRight(f259); } catch (e) {}
        function f262() {
            'use strict';
        }
        try { arr.reduceRight(f262); } catch (e) {}
        const v266 = () => {
            return global;
        };
        try { arr.reduceRight(v266); } catch (e) {}
        var count = 0;
        var sum = 0;
        const v273 = () => {
            const v274 = (a275, a276, a277, a278) => {
                count++;
                sum += a276;
                if (a277 === 1) {
                    let v284;
                    try { v284 = TypeError("reduceRight"); } catch (e) {}
                    throw v284;
                }
            };
            try { arr.reduceRight(v274); } catch (e) {}
        };
        try { v273(); } catch (e) {}
        const v290 = () => {
            try { arr.reduceRight(); } catch (e) {}
        };
        try { v290(); } catch (e) {}
        let v299;
        try { v299 = Symbol(); } catch (e) {}
        const v300 = [];
        var invalidCallbacks = [,null,1,false,"",v299,v300,{},/./];
        const v305 = (a306) => {
            const v307 = () => {
                try { arr.reduceRight(a306); } catch (e) {}
            };
            try { v307(); } catch (e) {}
        };
        try { invalidCallbacks.forEach(v305); } catch (e) {}
        function* f311() {
            throw "This line will not be executed";
        }
        try { arr.reduceRight(f311); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v318;
            try { v318 = newGlobal(); } catch (e) {}
            var reduceRight = v318?.[v187?.name]?.prototype?.reduceRight;
            const v324 = (a325, a326) => {
                let v328;
                try { v328 = Math.min(a325, a326); } catch (e) {}
                return v328;
            };
            try { reduceRight.call(arr, v324); } catch (e) {}
        }
        let v336;
        try { v336 = Symbol(); } catch (e) {}
        const v337 = [];
        const v338 = {};
        const v339 = /./;
        let v342;
        try { v342 = new v187(3); } catch (e) {}
        const v343 = {};
        let v344;
        try { v344 = new Proxy(v342, v343); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v336,v337,v338,v339,v344];
        const v347 = (a348) => {
            const v349 = () => {
                const v350 = () => {
                };
                const v352 = v187?.prototype?.reduceRight;
                try { v352.call(a348, v350); } catch (e) {}
            };
            try { v349(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v347); } catch (e) {}
        const v357 = (a358, a359) => {
            let v361;
            try { v361 = Math.max(a358, a359); } catch (e) {}
            return v361;
        };
        const v367 = {
            get() {
                let v366;
                try { v366 = new Error("length accessor called"); } catch (e) {}
                throw v366;
            },
        };
        let v369;
        try { v369 = Object.defineProperty(arr, "length", v367); } catch (e) {}
        try { v369.reduceRight(v357); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e378) {
}
