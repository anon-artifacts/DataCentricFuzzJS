function f0() {
}
var toLocaleString = Object?.prototype?.toLocaleString;
try {
    try { toLocaleString.call(); } catch (e) {}
    try { toLocaleString.call(undefined); } catch (e) {}
    try { toLocaleString.call(null); } catch (e) {}
} catch(e10) {
}
var o = { toString: "non-object" };
try { toLocaleString.call(o); } catch (e) {}
try {
    const v19 = {
        get toString() {
            let v18;
            try { v18 = TypeError("get toString"); } catch (e) {}
            throw v18;
        },
    };
    o = v19;
    try { toLocaleString.call(o); } catch (e) {}
} catch(e21) {
}
const v24 = {
    get toString() {
        return "non-object";
    },
};
o = v24;
try { toLocaleString.call(o); } catch (e) {}
let v27;
try { v27 = Object.create(null); } catch (e) {}
o = v27;
try { toLocaleString.call(o); } catch (e) {}
try {
    const v35 = {
        toString() {
            try { f0(o, this, "This argument passed to toString function should be the same object passed to toLocaleString"); } catch (e) {}
            let v34;
            try { v34 = TypeError("toString"); } catch (e) {}
            throw v34;
        },
    };
    o = v35;
    try { toLocaleString.call(o); } catch (e) {}
} catch(e37) {
}
function f38() {
    'use strict';
    function f39() {
        return typeof this;
    }
    const t52 = Boolean?.prototype;
    t52.toString = f39;
    let v46;
    try { v46 = true.toLocaleString(); } catch (e) {}
    try { f0("boolean", v46, "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString"); } catch (e) {}
    let v51;
    try { v51 = toLocaleString.call(false); } catch (e) {}
    try { f0("boolean", v51, "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString - even if we apply/call it"); } catch (e) {}
    let v56;
    try { v56 = toLocaleString.call(5); } catch (e) {}
    try { f0("5", v56, "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call Object#toString(5)"); } catch (e) {}
    const v59 = Boolean?.prototype;
    function f61() {
        const v62 = () => {
            return typeof this;
        };
        return v62;
    }
    const v65 = { get: f61 };
    try { Object.defineProperty(v59, "toString", v65); } catch (e) {}
    let v69;
    try { v69 = true.toLocaleString(); } catch (e) {}
    try { f0("boolean", v69, "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString"); } catch (e) {}
    let v74;
    try { v74 = toLocaleString.call(false); } catch (e) {}
    try { f0("boolean", v74, "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString - even if we apply/call it"); } catch (e) {}
}
try { f38(); } catch (e) {}
