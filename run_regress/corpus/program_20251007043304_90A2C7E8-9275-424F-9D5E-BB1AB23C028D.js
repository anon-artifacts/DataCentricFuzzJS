function f0() {
}
let v2;
try { v2 = saveStack(); } catch (e) {}
let v4;
try { v4 = Object.getPrototypeOf(v2); } catch (e) {}
let proto = v4;
try { f0("Testing constructor"); } catch (e) {}
const v8 = () => {
    const v9 = proto?.constructor;
    try { new v9(); } catch (e) {}
};
try { v8(); } catch (e) {}
for (const v19 of ["source","line","column","functionDisplayName","parent"]) {
    const v21 = "Testing getter: " + v19;
    try { f0(v21); } catch (e) {}
    const v23 = () => {
        return proto?.[v19];
    };
    try { v23(); } catch (e) {}
    let o = {};
    let v28;
    try { v28 = Object.getOwnPropertyDescriptor(proto, v19); } catch (e) {}
    try { Object.defineProperty(o, v19, v28); } catch (e) {}
    const v30 = () => {
        return o?.[v19];
    };
    try { v30(); } catch (e) {}
}
