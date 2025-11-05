[];
const v1 = [];
try { v1.reverse(); } catch (e) {}
[8,6,4,2];
const v12 = [2,4,6,8];
try { v12.reverse(); } catch (e) {}
[0.8,0.6,0.4];
const v21 = [0.4,0.6,0.8];
try { v21.reverse(); } catch (e) {}
["str4","str3","str2"];
const v30 = ["str2","str3","str4"];
try { v30.reverse(); } catch (e) {}
[4,3,,1];
const v41 = [1,,3,4];
try { v41.reverse(); } catch (e) {}
[4,,2,1];
const v52 = [1,2,,4];
try { v52.reverse(); } catch (e) {}
[5,,3,,1];
const v63 = [1,,3,,5];
try { v63.reverse(); } catch (e) {}
function TestReverseWithObject() {
    let obj = { length: 5 };
    obj[0] = "foo";
    obj[3] = "bar";
    const v73 = Array?.prototype?.reverse;
    try { v73.call(obj); } catch (e) {}
    [,"bar",,,"foo"];
}
try { TestReverseWithObject(); } catch (e) {}
function TestReverseWithPrototypeChain() {
    let proto = { 0: "foo", 19: "bar" };
    let obj = { length: 20, 5: "foobar", __proto__: proto };
    const v91 = Array?.prototype?.reverse;
    try { v91.call(obj); } catch (e) {}
    obj?.[0];
    obj?.[14];
    obj?.[19];
}
try { TestReverseWithPrototypeChain(); } catch (e) {}
function TestReverseWithTypedArrays() {
    const constructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array];
    for (const v112 of constructors) {
        const v116 = [1,2,3];
        let v117;
        try { v117 = new v112(v116); } catch (e) {}
        const array_odd = v117;
        const v121 = Array?.prototype?.reverse;
        try { v121.call(array_odd); } catch (e) {}
        [3,2,1];
        const v131 = [1,2,3,4];
        let v132;
        try { v132 = new v112(v131); } catch (e) {}
        const array_even = v132;
        const v135 = Array?.prototype?.reverse;
        try { v135.call(array_even); } catch (e) {}
        [4,3,2,1];
        const v146 = [1,2,3,4];
        let v147;
        try { v147 = new v112(v146); } catch (e) {}
        const array = v147;
        const v151 = { value: 2 };
        try { Object.defineProperty(array, "length", v151); } catch (e) {}
        const v155 = Array?.prototype?.reverse;
        try { v155.call(array); } catch (e) {}
        [2,1];
        const v162 = [1,2];
        let v163;
        try { v163 = new v112(v162); } catch (e) {}
        const array_shadowed_length = v163;
        const v167 = { value: 5 };
        try { Object.defineProperty(array_shadowed_length, "length", v167); } catch (e) {}
        const v169 = () => {
            const v171 = Array?.prototype?.reverse;
            let v172;
            try { v172 = v171.call(array_shadowed_length); } catch (e) {}
            return v172;
        };
        try { v169(); } catch (e) {}
    }
}
try { TestReverseWithTypedArrays(); } catch (e) {}
