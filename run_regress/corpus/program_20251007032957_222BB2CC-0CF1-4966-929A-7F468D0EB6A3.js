function f0() {
}
let v2;
try { v2 = Symbol(); } catch (e) {}
let v4;
try { v4 = Symbol("ponies"); } catch (e) {}
let v6;
try { v6 = Symbol.for("sym"); } catch (e) {}
var symbols = [v2,v4,v6,Symbol?.iterator];
var gets;
var sets;
const v14 = Symbol?.prototype;
function f16() {
    'use strict';
    gets++;
    typeof this;
    return "got";
}
function f24(a25) {
    'use strict';
    sets++;
    typeof this;
}
const v33 = { get: f16, set: f24 };
try { Object.defineProperty(v14, "prop", v33); } catch (e) {}
for (const v36 of symbols) {
    v36?.constructor;
    try { v36.hasOwnProperty("constructor"); } catch (e) {}
    try { v36.toLocaleString(); } catch (e) {}
    try { v36.toString(); } catch (e) {}
    function f43(a44) {
        this instanceof Symbol;
        try { this.valueOf(); } catch (e) {}
        return 13;
    }
    const t35 = Symbol?.prototype;
    t35.nonStrictMethod = f43;
    try { v36.nonStrictMethod("ok"); } catch (e) {}
    function f56(a57) {
        'use strict';
        return 14;
    }
    const t42 = Symbol?.prototype;
    t42.strictMethod = f56;
    try { v36.strictMethod("ok2"); } catch (e) {}
    gets = 0;
    sets = 0;
    var propname = "prop";
    v36?.prop;
    v36?.[propname];
    v36.prop = "newvalue";
    v36[propname] = "newvalue";
    v36?.noSuchProp;
    var noSuchPropName = "nonesuch";
    v36?.[noSuchPropName];
    const v87 = () => {
        let v88;
        try { v88 = v36.noSuchProp(); } catch (e) {}
        return v88;
    };
    try { v87(); } catch (e) {}
    const v91 = () => {
        let v92;
        try { v92 = v36[noSuchPropName](); } catch (e) {}
        return v92;
    };
    try { v91(); } catch (e) {}
}
if (typeof f0 === "function") {
    try { f0(0, 0); } catch (e) {}
}
