var global = this;
var status = "pass";
function get(a5, a6, a7) {
    status = "FAIL get";
}
function has(a10, a11) {
    status = "FAIL has";
}
var handler = { get: get, has: has };
let v16;
try { v16 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v16) {
    let v20;
    try { v20 = Object.create(null); } catch (e) {}
    let v21;
    try { v21 = new Proxy(v20, handler); } catch (e) {}
    const t16 = Object?.prototype;
    t16.__proto__ = v21;
}
