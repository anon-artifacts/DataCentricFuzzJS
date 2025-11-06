function f0() {
}
var BUGNUMBER = 1151149;
var summary = "Proxy constructor should throw if either the target or handler is a revoked proxy.";
const v7 = (BUGNUMBER + ": ") + summary;
try { f0(v7); } catch (e) {}
const v10 = {};
const v11 = {};
let v12;
try { v12 = new Proxy(v10, v11); } catch (e) {}
var p = v12;
const v14 = {};
try { new Proxy(p, v14); } catch (e) {}
const v16 = {};
try { new Proxy(v16, p); } catch (e) {}
const v18 = {};
const v19 = {};
let v20;
try { v20 = Proxy.revocable(v18, v19); } catch (e) {}
var r = v20;
p = r?.proxy;
const v23 = {};
try { new Proxy(p, v23); } catch (e) {}
const v25 = {};
try { new Proxy(v25, p); } catch (e) {}
try { r.revoke(); } catch (e) {}
const v28 = () => {
    const v29 = {};
    let v30;
    try { v30 = new Proxy(p, v29); } catch (e) {}
    return v30;
};
try { v28(); } catch (e) {}
const v33 = () => {
    const v34 = {};
    let v35;
    try { v35 = new Proxy(v34, p); } catch (e) {}
    return v35;
};
try { v33(); } catch (e) {}
const v37 = {};
const v38 = {};
let v39;
try { v39 = Proxy.revocable(v37, v38); } catch (e) {}
var r2 = v39;
const v41 = r2?.proxy;
const v42 = {};
let v43;
try { v43 = Proxy.revocable(v41, v42); } catch (e) {}
p = (r = v43)?.proxy;
const v45 = {};
try { new Proxy(p, v45); } catch (e) {}
const v47 = {};
try { new Proxy(v47, p); } catch (e) {}
try { r2.revoke(); } catch (e) {}
const v50 = {};
try { new Proxy(p, v50); } catch (e) {}
const v52 = {};
try { new Proxy(v52, p); } catch (e) {}
try { r.revoke(); } catch (e) {}
const v55 = () => {
    const v56 = {};
    let v57;
    try { v57 = new Proxy(p, v56); } catch (e) {}
    return v57;
};
try { v55(); } catch (e) {}
const v59 = () => {
    const v60 = {};
    let v61;
    try { v61 = new Proxy(v60, p); } catch (e) {}
    return v61;
};
try { v59(); } catch (e) {}
let v64;
try { v64 = newGlobal(); } catch (e) {}
var g = v64;
const v66 = `var r = Proxy.revocable({}, {}); r.proxy;`;
let v67;
try { v67 = g.eval(v66); } catch (e) {}
p = v67;
const v68 = {};
try { new Proxy(p, v68); } catch (e) {}
const v70 = {};
try { new Proxy(v70, p); } catch (e) {}
const v72 = `r.revoke();`;
try { g.eval(v72); } catch (e) {}
const v74 = () => {
    const v75 = {};
    let v76;
    try { v76 = new Proxy(p, v75); } catch (e) {}
    return v76;
};
try { v74(); } catch (e) {}
const v78 = () => {
    const v79 = {};
    let v80;
    try { v80 = new Proxy(v79, p); } catch (e) {}
    return v80;
};
try { v78(); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
