var handler = {};
const v5 = new Proxy(Math.sin, handler);
var p = v5;
var r = Proxy.revocable(Math.sin, handler).proxy;
const v11 = () => {
    let v12;
    try { v12 = new p(); } catch (e) {}
    return v12;
};
v11();
const v16 = () => {
    let v17;
    try { v17 = new r(); } catch (e) {}
    return v17;
};
v16();
const v20 = () => {
    return {};
};
handler.construct = v20;
const v22 = () => {
    let v23;
    try { v23 = new p(); } catch (e) {}
    return v23;
};
v22();
const v26 = () => {
    let v27;
    try { v27 = new r(); } catch (e) {}
    return v27;
};
v26();
