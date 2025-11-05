try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        v2?.prototype?.every?.length;
        const v7 = (a8) => {
            return a8 % 2;
        };
        const v14 = [1,3,5];
        let v15;
        try { v15 = new v2(v14); } catch (e) {}
        try { v15.every(v7); } catch (e) {}
        const v18 = (a19) => {
            return a19 > 2;
        };
        const v25 = [1,3,5];
        let v26;
        try { v26 = new v2(v25); } catch (e) {}
        try { v26.every(v18); } catch (e) {}
        const v29 = (a30) => {
            return a30 === 0;
        };
        let v34;
        try { v34 = new v2(10); } catch (e) {}
        try { v34.every(v29); } catch (e) {}
        const v37 = (a38) => {
            return a38 > 1;
        };
        let v41;
        try { v41 = new v2(); } catch (e) {}
        try { v41.every(v37); } catch (e) {}
        const v49 = [1,2,3,4,5];
        let v50;
        try { v50 = new v2(v49); } catch (e) {}
        var arr = v50;
        var sum = 0;
        var count = 0;
        const v56 = (a57, a58, a59) => {
            count++;
            sum += a57;
            a57 - 1;
            return a57 < 3;
        };
        try { arr.every(v56); } catch (e) {}
        function assertThisArg(a70, a71) {
            function f72() {
                return true;
            }
            try { arr.every(f72, a70); } catch (e) {}
            function f77() {
                'use strict';
                return true;
            }
            try { arr.every(f77, a70); } catch (e) {}
            var self = this;
            const v84 = () => {
                return true;
            };
            try { arr.every(v84, a70); } catch (e) {}
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
            const v117 = (a118, a119, a120) => {
                count++;
                sum += a118;
                a118 - 1;
                if (a118 === 3) {
                    throw "every";
                }
                return true;
            };
            try { arr.every(v117); } catch (e) {}
        } catch(e129) {
            thrown = true;
        }
        const v135 = () => {
            try { arr.every(); } catch (e) {}
        };
        try { v135(); } catch (e) {}
        let v145;
        try { v145 = Symbol(); } catch (e) {}
        const v146 = [];
        var invalidCallbacks = [,null,1,false,"",v145,v146,{},/./];
        const v151 = (a152) => {
            const v153 = () => {
                try { arr.every(a152); } catch (e) {}
            };
            try { v153(); } catch (e) {}
        };
        try { invalidCallbacks.forEach(v151); } catch (e) {}
        function* f157() {
            throw "This line will not be executed";
        }
        try { arr.every(f157); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v164;
            try { v164 = newGlobal(); } catch (e) {}
            var every = v164?.[v2?.name]?.prototype?.every;
            var sum = 0;
            const v175 = [1,2,3];
            let v176;
            try { v176 = new v2(v175); } catch (e) {}
            const v177 = (a178) => {
                sum += a178;
                return a178;
            };
            try { every.call(v176, v177); } catch (e) {}
        }
        let v187;
        try { v187 = Symbol(); } catch (e) {}
        const v188 = [];
        const v189 = {};
        const v190 = /./;
        let v192;
        try { v192 = new v2(); } catch (e) {}
        const v193 = {};
        let v194;
        try { v194 = new Proxy(v192, v193); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v187,v188,v189,v190,v194];
        const v197 = (a198) => {
            const v199 = () => {
                const v200 = () => {
                    return true;
                };
                const v203 = v2?.prototype?.every;
                try { v203.call(a198, v200); } catch (e) {}
            };
            try { v199(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v197); } catch (e) {}
        const v208 = () => {
            return true;
        };
        const v213 = [1,2,3];
        let v214;
        try { v214 = new v2(v213); } catch (e) {}
        const v220 = {
            get() {
                let v219;
                try { v219 = new Error("length accessor called"); } catch (e) {}
                throw v219;
            },
        };
        let v221;
        try { v221 = Object.defineProperty(v214, "length", v220); } catch (e) {}
        try { v221.every(v208); } catch (e) {}
    }
    let v225;
    try { v225 = anyTypedArrayConstructors.filter(isFloatConstructor); } catch (e) {}
    for (const v226 of v225) {
        const v227 = (a228) => {
            let v231;
            try { v231 = Object.is(a228, NaN); } catch (e) {}
            return v231;
        };
        const v235 = [,,NaN];
        let v236;
        try { v236 = new v226(v235); } catch (e) {}
        try { v236.every(v227); } catch (e) {}
    }
    for (const v239 of anyTypedArrayConstructors) {
        v239?.prototype?.some?.length;
        const v244 = (a245) => {
            return a245 % 2;
        };
        const v251 = [1,2,3];
        let v252;
        try { v252 = new v239(v251); } catch (e) {}
        try { v252.some(v244); } catch (e) {}
        const v255 = (a256) => {
            return a256 % 2;
        };
        const v262 = [0,2,4];
        let v263;
        try { v263 = new v239(v262); } catch (e) {}
        try { v263.some(v255); } catch (e) {}
        const v266 = (a267) => {
            return a267 > 2;
        };
        const v273 = [1,3,5];
        let v274;
        try { v274 = new v239(v273); } catch (e) {}
        try { v274.some(v266); } catch (e) {}
        const v277 = (a278) => {
            return a278 < 0;
        };
        const v284 = [1,3,5];
        let v285;
        try { v285 = new v239(v284); } catch (e) {}
        try { v285.some(v277); } catch (e) {}
        const v288 = (a289) => {
            return a289 !== 0;
        };
        let v293;
        try { v293 = new v239(10); } catch (e) {}
        try { v293.some(v288); } catch (e) {}
        const v296 = (a297) => {
            return a297 > 1;
        };
        let v300;
        try { v300 = new v239(); } catch (e) {}
        try { v300.some(v296); } catch (e) {}
        const v308 = [1,2,3,4,5];
        let v309;
        try { v309 = new v239(v308); } catch (e) {}
        var arr = v309;
        var sum = 0;
        var count = 0;
        const v315 = (a316, a317, a318) => {
            count++;
            sum += a316;
            a316 - 1;
            return a316 > 2;
        };
        try { arr.some(v315); } catch (e) {}
        function assertThisArg(a329, a330) {
            function f331() {
                return false;
            }
            try { arr.some(f331, a329); } catch (e) {}
            function f336() {
                'use strict';
                return false;
            }
            try { arr.some(f336, a329); } catch (e) {}
            var self = this;
            const v343 = () => {
                return false;
            };
            try { arr.some(v343, a329); } catch (e) {}
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
            const v376 = (a377, a378, a379) => {
                count++;
                sum += a377;
                a377 - 1;
                if (a377 === 3) {
                    throw "some";
                }
                return false;
            };
            try { arr.some(v376); } catch (e) {}
        } catch(e388) {
            thrown = true;
        }
        const v394 = () => {
            try { arr.some(); } catch (e) {}
        };
        try { v394(); } catch (e) {}
        let v404;
        try { v404 = Symbol(); } catch (e) {}
        const v405 = [];
        var invalidCallbacks = [,null,1,false,"",v404,v405,{},/./];
        const v410 = (a411) => {
            const v412 = () => {
                try { arr.some(a411); } catch (e) {}
            };
            try { v412(); } catch (e) {}
        };
        try { invalidCallbacks.forEach(v410); } catch (e) {}
        function* f416() {
            throw "This line will not be executed";
        }
        try { arr.some(f416); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v423;
            try { v423 = newGlobal(); } catch (e) {}
            var some = v423?.[v239?.name]?.prototype?.some;
            var sum = 0;
            const v434 = [1,2,3];
            let v435;
            try { v435 = new v239(v434); } catch (e) {}
            const v436 = (a437) => {
                sum += a437;
                return false;
            };
            try { some.call(v435, v436); } catch (e) {}
        }
        let v447;
        try { v447 = Symbol(); } catch (e) {}
        const v448 = [];
        const v449 = {};
        const v450 = /./;
        let v452;
        try { v452 = new v239(); } catch (e) {}
        const v453 = {};
        let v454;
        try { v454 = new Proxy(v452, v453); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v447,v448,v449,v450,v454];
        const v457 = (a458) => {
            const v459 = () => {
                const v460 = () => {
                    return true;
                };
                const v463 = v239?.prototype?.some;
                try { v463.call(a458, v460); } catch (e) {}
            };
            try { v459(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v457); } catch (e) {}
        const v468 = () => {
            return false;
        };
        const v473 = [1,2,3];
        let v474;
        try { v474 = new v239(v473); } catch (e) {}
        const v480 = {
            get() {
                let v479;
                try { v479 = new Error("length accessor called"); } catch (e) {}
                throw v479;
            },
        };
        let v481;
        try { v481 = Object.defineProperty(v474, "length", v480); } catch (e) {}
        try { v481.some(v468); } catch (e) {}
    }
    let v484;
    try { v484 = anyTypedArrayConstructors.filter(isFloatConstructor); } catch (e) {}
    for (const v485 of v484) {
        const v486 = (a487) => {
            return a487 === a487;
        };
        const v492 = [,,NaN];
        let v493;
        try { v493 = new v485(v492); } catch (e) {}
        try { v493.some(v486); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e502) {
}
