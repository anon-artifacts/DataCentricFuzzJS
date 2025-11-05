function f0() {
    const v15 = {
        [536870912]: -3,
        ..."8IV",
        g: -3,
        c: "8IV",
        b: "8IV",
        ["8IV"]: 536870912,
        ..."8IV",
        e: -3,
        set h(a5) {
            var set = Set();
            gc({ execution: "async", type: "major" });
        },
    };
    return v15;
}
const v16 = f0();
const v17 = f0();
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v17;
}
new F18(F18);
const v22 = new F18(v16);
new F18(v22);
new BigInt64Array(127);
new Float32Array(1000);
new Uint8ClampedArray(1540);
function f33(a34, a35) {
    if (a34 !== a35) {
        new Promise(Error);
        z = { valueOf: Function };
        function g() {
        }
        const v45 = { g: g };
        const v46 = `bad value: ${a34}`;
        let v47;
        try { v47 = Error(v46); } catch (e) {}
        throw v47;
    }
}
function f48(a49, a50) {
    if (a49) {
        let v52;
        try { v52 = Number(a50); } catch (e) {}
        return v52;
    }
    return a50;
}
try { noInline(f48); } catch (e) {}
const v57 = {
    valueOf() {
        return 41;
    },
};
var object = v57;
for (let i60 = 0; i60 < 10000; ++i60) {
    let v67;
    try { v67 = f48(false, object); } catch (e) {}
    try { f33(v67, object); } catch (e) {}
}
for (let i70 = 0; i70 < 10000; ++i70) {
    let v77;
    try { v77 = f48(true, object); } catch (e) {}
    try { f33(v77, 41); } catch (e) {}
}
