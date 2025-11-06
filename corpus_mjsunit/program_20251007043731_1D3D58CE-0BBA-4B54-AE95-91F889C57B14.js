let global = this;
const v374 = {
    FastElementsKind() {
        const v30 = {
            PACKED_SMI_ELEMENTS(a4) {
                let sum = 0;
                for (const v7 of a4) {
                    sum += v7;
                }
                return sum;
            },
            HOLEY_SMI_ELEMENTS(a9) {
                let sum = 0;
                for (const v12 of a9) {
                    if (v12) {
                        sum += v12;
                    }
                }
                return sum;
            },
            PACKED_ELEMENTS(a14) {
                let ret = "";
                for (const v17 of a14) {
                    ret += `> ${v17}`;
                }
                return ret;
            },
            HOLEY_ELEMENTS(a20) {
                let ret = "";
                for (const v23 of a20) {
                    ret += `> ${v23}`;
                }
                return ret;
            },
            PACKED_DOUBLE_ELEMENTS(a26) {
                let sum = 0;
                for (const v29 of a26) {
                    sum += v29;
                }
                return sum;
            },
        };
        let runners = v30;
        const v42 = [1,2,3,4,5,6,7,8,9,10];
        const v47 = [1,2,3];
        const v49 = { array: v42, expected: 55, array2: v47, expected2: 6 };
        const v56 = [1,,3,,5,,7,,9,,];
        const v61 = [1,,3];
        const v63 = { array: v56, expected: 25, array2: v61, expected2: 4 };
        const v74 = ["a","b","c","d","e","f","g","h","i","j"];
        const v79 = ["a","b","c"];
        const v81 = { array: v74, expected: "> a> b> c> d> e> f> g> h> i> j", array2: v79, expected2: "> a> b> c" };
        const v88 = ["a",,"c",,"e",,"g",,"i",,];
        const v91 = "> a> undefined> c> undefined> e> undefined> g" + "> undefined> i> undefined";
        const v95 = ["a",,"c"];
        const v97 = { array: v88, expected: v91, array2: v95, expected2: "> a> undefined> c" };
        const v108 = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
        const v113 = [0.6,0.4,0.2];
        const v115 = { array: v108, expected: 5.5, array2: v113, expected2: 1.2 };
        const v116 = {
            PACKED_SMI_ELEMENTS: v49,
            HOLEY_SMI_ELEMENTS: v63,
            PACKED_ELEMENTS: v81,
            HOLEY_ELEMENTS: v97,
            PACKED_DOUBLE_ELEMENTS: v115,
        };
        let tests = v116;
        for (const v120 of Object.keys(runners)) {
            let fn = runners[runners];
            let  = tests[tests];
            try { fn(array); } catch (e) {}
            try { fn(array); } catch (e) {}
            try { fn(array); } catch (e) {}
            try { fn(array); } catch (e) {}
            try { fn(array2); } catch (e) {}
            const v140 = [1,2,3];
            const v146 = {
                enumerable: false,
                configurable: false,
                get() {
                    return 7;
                },
            };
            let v147;
            try { v147 = Object.defineProperty(v140, 2, v146); } catch (e) {}
            let newArray = v147;
            try { fn(newArray); } catch (e) {}
        }
    },
    TypedArrays() {
        const v165 = new Uint8Array([1,2,3,4,5,6,7,8,-1,256]);
        const v171 = new Uint8Array([1,2,3]);
        const v173 = { array: v165, expected: 291, array2: v171, expected2: 6 };
        const v187 = new Int8Array([1,2,3,4,5,6,7,8,-129,128]);
        const v193 = new Int8Array([1,2,3]);
        const v195 = { array: v187, expected: 35, array2: v193, expected2: 6 };
        const v209 = new Uint16Array([1,2,3,4,5,6,7,8,-1,65536]);
        const v215 = new Uint16Array([1,2,3]);
        const v217 = { array: v209, expected: 65571, array2: v215, expected2: 6 };
        const v231 = new Int16Array([1,2,3,4,5,6,7,8,-32769,32767]);
        const v237 = new Int16Array([1,2,3]);
        const v239 = { array: v231, expected: 65570, array2: v237, expected2: 6 };
        const v253 = new Uint32Array([1,2,3,4,5,6,7,8,-1,4294967296]);
        const v259 = new Uint32Array([1,2,3]);
        const v261 = { array: v253, expected: 4294967331, array2: v259, expected2: 6 };
        const v275 = new Int32Array([1,2,3,4,5,6,7,8,-2147483649,2147483647]);
        const v281 = new Int32Array([1,2,3]);
        const v283 = { array: v275, expected: 4294967330, array2: v281, expected2: 6 };
        const v294 = new Float32Array([9.5,8,7,7,5,4,3,2]);
        const v300 = new Float32Array([10.5,5.5,1.5]);
        const v302 = { array: v294, expected: 45.5, array2: v300, expected2: 17.5 };
        const v313 = new Float64Array([9.5,8,7,7,5,4,3,2]);
        const v319 = new Float64Array([10.5,5.5,1.5]);
        const v321 = { array: v313, expected: 45.5, array2: v319, expected2: 17.5 };
        const v334 = new Uint8ClampedArray([4.3,7.45632,3.14,4.61,5.0004,6.493,7.12,8,1.7,3.6]);
        const v340 = new Uint8ClampedArray([1,2,3]);
        const v342 = { array: v334, expected: 51, array2: v340, expected2: 6 };
        const v343 = {
            Uint8Array: v173,
            Int8Array: v195,
            Uint16Array: v217,
            Int16Array: v239,
            Uint32Array: v261,
            Int32Array: v283,
            Float32Array: v302,
            Float64Array: v321,
            Uint8ClampedArray: v342,
        };
        let tests = v343;
        for (const v347 of Object.keys(tests)) {
            let test = tests[tests];
            let  = test;
            function f351(a352) {
                let ret = 0;
                for (const v355 of a352) {
                    ret += v355;
                }
                return ret;
            }
            let sum = f351;
            try { sum(array); } catch (e) {}
            try { sum(array); } catch (e) {}
            try { sum(array); } catch (e) {}
            try { sum(array2); } catch (e) {}
            const v367 = array?.constructor;
            let v368;
            try { v368 = new v367(array); } catch (e) {}
            let clone = v368;
            const v370 = () => {
                let v371;
                try { v371 = sum(clone); } catch (e) {}
                return v371;
            };
            try { v370(); } catch (e) {}
        }
    },
};
let tests = v374;
for (const v378 of Object.keys(tests)) {
    let test = tests[tests];
    try { test(); } catch (e) {}
}
