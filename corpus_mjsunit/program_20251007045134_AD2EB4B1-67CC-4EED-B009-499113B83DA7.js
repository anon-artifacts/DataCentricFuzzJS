var global = this;
var status = "pass";
const v4 = (a5) => {
    status = "SMASH";
};
const v7 = (a8) => {
    status = "SMASH";
};
const v10 = (a11) => {
    status = "SMASH";
};
var metaHandler = { get: v4, has: v7, invoke: v10 };
const v16 = {};
let v17;
try { v17 = new Proxy(v16, metaHandler); } catch (e) {}
var handler = v17;
let v21;
try { v21 = Object.create(null); } catch (e) {}
let v22;
try { v22 = new Proxy(v21, handler); } catch (e) {}
var angryProxy = v22;
let v25;
try { v25 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v25) {
    this.__proto__ = angryProxy;
    const t25 = Object?.prototype;
    t25.__proto__ = angryProxy;
}
this?.nonExistingProperty;
let v30;
try { v30 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v30) {
} else {
}
status = "pass";
