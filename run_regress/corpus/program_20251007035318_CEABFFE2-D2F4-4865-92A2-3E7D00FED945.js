try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        v2?.prototype?.map?.length;
        const v7 = (a8) => {
            return a8 * 2;
        };
        const v14 = [1,3,5];
        let v15;
        try { v15 = new v2(v14); } catch (e) {}
        try { v15.map(v7); } catch (e) {}
        const v20 = [2,6,10];
        try { new v2(v20); } catch (e) {}
        const v22 = (a23) => {
            return a23 - 2;
        };
        const v30 = [-1,13,5];
        let v31;
        try { v31 = new v2(v30); } catch (e) {}
        try { v31.map(v22); } catch (e) {}
        const v37 = [-3,11,3];
        try { new v2(v37); } catch (e) {}
        const v39 = (a40) => {
            return a40;
        };
        let v42;
        try { v42 = new v2(10); } catch (e) {}
        try { v42.map(v39); } catch (e) {}
        try { new v2(10); } catch (e) {}
        const v46 = (a47) => {
            return a47 + 1;
        };
        let v50;
        try { v50 = new v2(); } catch (e) {}
        try { v50.map(v46); } catch (e) {}
        try { new v2(); } catch (e) {}
        const v53 = (a54) => {
            return a54;
        };
        const v58 = [1,2,3];
        let v59;
        try { v59 = new v2(v58); } catch (e) {}
        try { v59.map(v53); } catch (e) {}
        const v64 = [1,2,3];
        try { new v2(v64); } catch (e) {}
        const v71 = [1,2,3,4,5];
        let v72;
        try { v72 = new v2(v71); } catch (e) {}
        var arr = v72;
        var sum = 0;
        var count = 0;
        const v78 = (a79, a80, a81) => {
            count++;
            sum += a79;
            a79 - 1;
            return a79;
        };
        try { arr.map(v78); } catch (e) {}
        const v93 = [1,2,3,4,5];
        let v94;
        try { v94 = new v2(v93); } catch (e) {}
        var changeArr = v94;
        const v96 = (a97, a98) => {
            changeArr[a98] = a97 + 1;
            return a97;
        };
        try { arr.map(v96); } catch (e) {}
        const v107 = [1,2,3,4,5];
        try { new v2(v107); } catch (e) {}
        function assertThisArg(a110, a111) {
            function f112(a113) {
                return a113;
            }
            try { arr.map(f112, a110); } catch (e) {}
            function f116(a117) {
                'use strict';
                return a117;
            }
            try { arr.map(f116, a110); } catch (e) {}
            var self = this;
            const v122 = (a123) => {
                return a123;
            };
            try { arr.map(v122, a110); } catch (e) {}
        }
        [1,2,3];
        [1,2,3];
        try { Object(1); } catch (e) {}
        try { Object("1"); } catch (e) {}
        try { Object(false); } catch (e) {}
        var sum = 0;
        var count = 0;
        var thrown = false;
        try {
            const v154 = (a155, a156, a157) => {
                count++;
                sum += a155;
                a155 - 1;
                if (a155 === 3) {
                    throw "map";
                }
                return a155;
            };
            try { arr.map(v154); } catch (e) {}
        } catch(e165) {
            thrown = true;
        }
        const v171 = () => {
            try { arr.map(); } catch (e) {}
        };
        try { v171(); } catch (e) {}
        let v181;
        try { v181 = Symbol(); } catch (e) {}
        const v182 = [];
        var invalidCallbacks = [,null,1,false,"",v181,v182,{},/./];
        const v187 = (a188) => {
            const v189 = () => {
                try { arr.map(a188); } catch (e) {}
            };
            try { v189(); } catch (e) {}
        };
        try { invalidCallbacks.forEach(v187); } catch (e) {}
        function* f193() {
            throw "This line will not be executed";
        }
        try { arr.map(f193); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v200;
            try { v200 = newGlobal(); } catch (e) {}
            var map = v200?.[v2?.name]?.prototype?.map;
            var sum = 0;
            const v211 = [1,2,3];
            let v212;
            try { v212 = new v2(v211); } catch (e) {}
            const v213 = (a214) => {
                sum += a214;
                return a214;
            };
            try { map.call(v212, v213); } catch (e) {}
            const v219 = [1,3,6];
            try { new v2(v219); } catch (e) {}
        }
        let v227;
        try { v227 = Symbol(); } catch (e) {}
        const v228 = [];
        const v229 = {};
        const v230 = /./;
        let v232;
        try { v232 = new v2(); } catch (e) {}
        const v233 = {};
        let v234;
        try { v234 = new Proxy(v232, v233); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v227,v228,v229,v230,v234];
        const v237 = (a238) => {
            const v239 = () => {
                const v240 = () => {
                    return true;
                };
                const v243 = v2?.prototype?.filter;
                try { v243.call(a238, v240); } catch (e) {}
            };
            try { v239(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v237); } catch (e) {}
        const v248 = (a249) => {
            return a249;
        };
        const v253 = [1,2,3];
        let v254;
        try { v254 = new v2(v253); } catch (e) {}
        const v260 = {
            get() {
                let v259;
                try { v259 = new Error("length accessor called"); } catch (e) {}
                throw v259;
            },
        };
        let v261;
        try { v261 = Object.defineProperty(v254, "length", v260); } catch (e) {}
        try { v261.map(v248); } catch (e) {}
        const v266 = [1,2,3];
        try { new v2(v266); } catch (e) {}
    }
    for (const v268 of anyTypedArrayConstructors) {
        v268?.prototype?.filter?.length;
        const v273 = (a274) => {
            return a274 == a274;
        };
        const v279 = [1,2,3];
        let v280;
        try { v280 = new v268(v279); } catch (e) {}
        try { v280.filter(v273); } catch (e) {}
        const v285 = [1,2,3];
        try { new v268(v285); } catch (e) {}
        const v287 = (a288) => {
            return (a288 % 2) == 0;
        };
        const v297 = [1,2,3,4];
        let v298;
        try { v298 = new v268(v297); } catch (e) {}
        try { v298.filter(v287); } catch (e) {}
        const v302 = [2,4];
        try { new v268(v302); } catch (e) {}
        const v304 = (a305) => {
            return a305 < 4;
        };
        const v313 = [1,2,3,4,5];
        let v314;
        try { v314 = new v268(v313); } catch (e) {}
        try { v314.filter(v304); } catch (e) {}
        const v319 = [1,2,3];
        try { new v268(v319); } catch (e) {}
        const v321 = (a322) => {
            return (a322 * 2) == 4;
        };
        let v327;
        try { v327 = new v268(); } catch (e) {}
        try { v327.filter(v321); } catch (e) {}
        try { new v268(); } catch (e) {}
        const v335 = [1,2,3,4,5];
        let v336;
        try { v336 = new v268(v335); } catch (e) {}
        var arr = v336;
        var sum = 0;
        var count = 0;
        const v342 = (a343, a344, a345) => {
            count++;
            sum += a343;
            a343 - 1;
            return a343 < 4;
        };
        try { arr.filter(v342); } catch (e) {}
        const v355 = [1,2,3];
        try { new v268(v355); } catch (e) {}
        const v364 = [1,2,3,4,5];
        let v365;
        try { v365 = new v268(v364); } catch (e) {}
        var changeArr = v365;
        const v367 = (a368, a369) => {
            changeArr[a369] = a368 + 1;
            return true;
        };
        try { arr.filter(v367); } catch (e) {}
        const v379 = [1,2,3,4,5];
        try { new v268(v379); } catch (e) {}
        function assertThisArg(a382, a383) {
            function f384(a385) {
                return a385;
            }
            try { arr.filter(f384, a382); } catch (e) {}
            function f388(a389) {
                'use strict';
                return a389;
            }
            try { arr.filter(f388, a382); } catch (e) {}
            var self = this;
            const v394 = (a395) => {
                return a395;
            };
            try { arr.filter(v394, a382); } catch (e) {}
        }
        [1,2,3];
        [1,2,3];
        try { Object(1); } catch (e) {}
        try { Object("1"); } catch (e) {}
        try { Object(false); } catch (e) {}
        var sum = 0;
        var count = 0;
        var thrown = false;
        try {
            const v426 = (a427, a428, a429) => {
                count++;
                sum += a427;
                a427 - 1;
                if (a427 === 3) {
                    throw "filter";
                }
                return a427;
            };
            try { arr.filter(v426); } catch (e) {}
        } catch(e437) {
            thrown = true;
        }
        const v443 = () => {
            try { arr.filter(); } catch (e) {}
        };
        try { v443(); } catch (e) {}
        let v453;
        try { v453 = Symbol(); } catch (e) {}
        const v454 = [];
        var invalidCallbacks = [,null,1,false,"",v453,v454,{},/./];
        const v459 = (a460) => {
            const v461 = () => {
                try { arr.filter(a460); } catch (e) {}
            };
            try { v461(); } catch (e) {}
        };
        try { invalidCallbacks.forEach(v459); } catch (e) {}
        function* f465() {
            throw "This line will not be executed";
        }
        try { arr.filter(f465); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v472;
            try { v472 = newGlobal(); } catch (e) {}
            var filter = v472?.[v268?.name]?.prototype?.filter;
            var sum = 0;
            const v483 = [1,2,3];
            let v484;
            try { v484 = new v268(v483); } catch (e) {}
            const v485 = (a486) => {
                sum += a486;
                return true;
            };
            try { filter.call(v484, v485); } catch (e) {}
            const v492 = [1,2,3];
            try { new v268(v492); } catch (e) {}
        }
        let v500;
        try { v500 = Symbol(); } catch (e) {}
        const v501 = [];
        const v502 = {};
        const v503 = /./;
        let v505;
        try { v505 = new v268(); } catch (e) {}
        const v506 = {};
        let v507;
        try { v507 = new Proxy(v505, v506); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v500,v501,v502,v503,v507];
        const v510 = (a511) => {
            const v512 = () => {
                const v513 = () => {
                    return true;
                };
                const v516 = v268?.prototype?.filter;
                try { v516.call(a511, v513); } catch (e) {}
            };
            try { v512(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v510); } catch (e) {}
        const v521 = (a522) => {
            return true;
        };
        const v527 = [1,2,3];
        let v528;
        try { v528 = new v268(v527); } catch (e) {}
        const v534 = {
            get() {
                let v533;
                try { v533 = new Error("length accessor called"); } catch (e) {}
                throw v533;
            },
        };
        let v535;
        try { v535 = Object.defineProperty(v528, "length", v534); } catch (e) {}
        try { v535.filter(v521); } catch (e) {}
        const v540 = [1,2,3];
        try { new v268(v540); } catch (e) {}
    }
    const v546 = [1,2,3];
    let v547;
    try { v547 = new Uint16Array(v546); } catch (e) {}
    var arr = v547;
    var old = Array?.prototype?.[Symbol?.iterator];
    const v555 = () => {
        let v558;
        try { v558 = new Error("unreachable"); } catch (e) {}
        throw v558;
    };
    const t370 = Array?.prototype;
    t370[Symbol?.iterator] = v555;
    const v561 = (a562) => {
        return true;
    };
    try { arr.filter(v561); } catch (e) {}
    const t376 = Array?.prototype;
    t376[Symbol?.iterator] = old;
    const v567 = Array?.prototype;
    function f570() {
        return 1;
    }
    function f572() {
        this.b = 1;
    }
    const v575 = { configurable: true, get: f570, set: f572 };
    try { Object.defineProperty(v567, 0, v575); } catch (e) {}
    const v578 = (a579) => {
        return true;
    };
    const v584 = [1,2,3];
    let v585;
    try { v585 = new Uint16Array(v584); } catch (e) {}
    try { v585.filter(v578); } catch (e) {}
    const v590 = [1,2,3];
    try { new Uint16Array(v590); } catch (e) {}
    const t396 = Array?.prototype;
    delete t396?.[0];
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e601) {
}
