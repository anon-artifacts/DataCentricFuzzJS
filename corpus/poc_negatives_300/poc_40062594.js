function opt(opt_param){
const v1 = [-249721.47103097814,-249721.47103097814,-249721.47103097814];
let [,v2,v3,v4] = v1;
function v5(v6) {
    const v7 = delete v1[-249721.47103097814];
    const v8 = 563754.6853040128;
    for (const v9 in v6) {
        function v10(v11,v12) {
            v12[65536] = v12;
            const v14 = typeof -1000.0;
            const v17 = new Array(717521062);
            const v18 = v17[-2147483647];
            return Array;
        }
    }
}
function v19(v20,v21) {
    const v22 = [];
    const v23 = 30306;
    const v24 = {"__proto__":v1,"c":v20,"constructor":v4,"d":v21,"e":v20,"toString":-249721.47103097814};
}
function v25(v26,v27,v28,v29) {
    const v30 = v1.constructor;
    let v31 = Object;
    v30[6] = v28;
    v31 = v19;
    const v34 = {"get":v19};
    const v36 = Object.defineProperty(v26,"valueOf",v34);
    const v37 = v30 && v36;
    const v38 = class V38 {
        constructor(v40,v41,v42,v43) {
        }
        getPrototypeOf(v45,v46,v47) {
            const v48 = super.charCodeAt();
        }
    };
    const v49 = v3 == "valueOf";
    const v50 = v49 ? v3 : "valueOf";
    const v51 = Array;
    const v52 = v1[4294967296];
    const v53 = NaN;
    const v56 = new Uint8ClampedArray(5381);
    function v57() {
        const v60 = Math.min(5381,7);
    }
    function v61(v62,v63,v64,v65) {
        let v66 = 0;
        do {
            const v69 = v64.m(Object,5,5381);
            const v70 = Object !== v56;
            const v71 = v70 ? Object : v56;
            const v72 = v66++;
        } while (v66 < 5);
        const v73 = [5,5,5];
        const v74 = v73[v73];
        const v75 = v31 << 5381;
        const v76 = 1405826753;
        let v77 = 0;
        while (v77 < 9) {
            function v79(v80,v81) {
                const v82 = v81 < v77;
                return v56;
            }
            const v83 = v77++;
        }
    }
    function v84(v85,v86,v87,v88) {
        v87[5] = v86;
        const v89 = /CHK?/imsy;
        const v90 = v89 && v89;
        const v92 = [981024.9128267472];
        const v93 = v92.length;
        const v94 = 1;
        function v97(v98,v99) {
            const v100 = v99 < 0;
            return 1405826753;
        }
        const v101 = /O0\W/isy;
        let v102 = 8;
        v102 -= v101;
    }
    const v106 = new Array(1);
    const v107 = {"b":-2828438571,"d":"1","m":v31};
    const v109 = v61(v106,v106,v107,-1e-15);
    for (let v113 = 0; v113 < 100; v113++) {
        const v115 = new Array(1);
        const v116 = {"c":v115,"d":v115,"m":v61,"o":Array};
        const v117 = {"a":Array,"b":5381,"m":Array,"n":v57};
        const v118 = {"a":v56,"d":v115,"n":Array,"o":v84};
        const v119 = v84(v116,v117,v118,v115);
    }
}
function v120(v121,v122,v123,v124,v125) {
}
const v126 = {};
const v127 = {};
const v129 = Object.defineProperty(v126,v120,v127);
for (let v133 = 0; v133 < 100; v133++) {
    const v134 = v25(v1,100,1,v1);
}
const v135 = v126[v129];
for (const v136 in v127) {
    const v137 = [];
    function v138(v139,v140,v141,v142) {
    }
    function v143(v144,v145,v146,v147) {
        let v148 = 7081;
        Proxy.valueOf = Proxy;
        const v151 = Proxy[Proxy];
        let v152 = 0;
        while (v152 < 1) {
            const v154 = delete (1)[1];
            const v155 = v152++;
        }
        for (let v158 = 0; v158 < 9; v158++) {
            v148 &&= v158;
        }
        with (v137) {
            e = v138;
            const v159 = [];
            const v160 = -2772550920;
            const v161 = [];
            const v162 = v161.__proto__;
            for (let v165 = 0; v165 < 0; v165++) {
                function v166(v167,v168,v169,v170) {
                    return v165;
                }
            }
        }
        const v171 = {};
        const v172 = Math;
    }
}
const v173 = v25(v1,1,1,v1);
for (let v177 = 0; v177 < 100; v177++) {
    const v178 = v25(v1,1,1,v1);
}
const v181 = new Float32Array(23128);
with (v181) {
    const v184 = Symbol.split;
    arguments[v184] = Symbol;
}
const v185 = v25(v1,100,0,v1);
return v185;
}
opt(false);
opt(true);
opt(false);
%PrepareFunctionForOptimization(opt);
opt(true);
%OptimizeFunctionOnNextCall(opt);
opt(false);
// CRASH INFO
// ==========
// TERMSIG: 5
// STDERR:
// halting because of unreachable code at src/builtins/torque-internal.tq:101:45
// STDOUT:
// ARGS: /home/r00t/v8/out/fuzzbuild/d8 --expose-gc --future --harmony --harmony-rab-gsab --allow-natives-syntax --interrupt-budget=1000 --fuzzing --maglev --maglev-inlining --maglev-reuse-stack-slots --stress-maglev --maglev-assert --maglev-function-context-specialization --maglev-ool-prologue --sparkplug --lazy --no-always-osr --force-slow-path --turbo-move-optimization --turbo-jt --turbo-loop-peeling --turbo-loop-variable --turbo-loop-rotation --turbo-cf-optimization --turbo-escape --turbo-allocation-folding --turbo-instruction-scheduling --turbo-stress-instruction-scheduling --turbo-store-elimination --turbo-rewrite-far-jumps --turbo-optimize-apply --no-enable-sse4-2 --turbo-load-elimination --turbo-inlining --turbo-splitting
