function f0() {
}
function getme() {
    return 42;
}
function setme(a4) {
}
const v9 = { value: 1, writable: true, configurable: true, enumerable: true };
const v14 = { value: 2, writable: false, configurable: true, enumerable: true };
const v19 = { value: 3, writable: true, configurable: false, enumerable: true };
const v24 = { value: 4, writable: false, configurable: false, enumerable: true };
const v27 = { get: getme, configurable: false, enumerable: true };
const v30 = { set: setme, configurable: false, enumerable: true };
const v33 = { get: getme, set: setme, configurable: false, enumerable: true };
const v34 = {
    all: v9,
    readOnly: v14,
    nonConfig: v19,
    none: v24,
    getter: v27,
    setter: v30,
    getandset: v33,
};
var properties = v34;
const v36 = {};
let v38;
try { v38 = Object.defineProperties(v36, properties); } catch (e) {}
var o = v38;
try { Object.freeze(o); } catch (e) {}
function getPropertyOf(a42) {
    function f43(a44) {
        let v45;
        try { v45 = Object.getOwnPropertyDescriptor(a42, a44); } catch (e) {}
        return v45;
    }
    return f43;
}
let v47;
try { v47 = Object.getOwnPropertyDescriptor(o, "all"); } catch (e) {}
const v52 = { value: 1, writable: false, enumerable: true, configurable: false };
try { deepEqual(v47, v52); } catch (e) {}
let v57;
try { v57 = Object.getOwnPropertyDescriptor(o, "readOnly"); } catch (e) {}
const v62 = { value: 2, writable: false, enumerable: true, configurable: false };
try { deepEqual(v57, v62); } catch (e) {}
let v66;
try { v66 = Object.getOwnPropertyDescriptor(o, "nonConfig"); } catch (e) {}
const v71 = { value: 3, writable: false, enumerable: true, configurable: false };
try { deepEqual(v66, v71); } catch (e) {}
let v75;
try { v75 = Object.getOwnPropertyDescriptor(o, "none"); } catch (e) {}
const v80 = { value: 4, writable: false, enumerable: true, configurable: false };
try { deepEqual(v75, v80); } catch (e) {}
let v84;
try { v84 = Object.getOwnPropertyDescriptor(o, "getter"); } catch (e) {}
const v86 = void 0;
const v89 = { get: getme, set: v86, enumerable: true, configurable: false };
try { deepEqual(v84, v89); } catch (e) {}
let v93;
try { v93 = Object.getOwnPropertyDescriptor(o, "setter"); } catch (e) {}
const v95 = void 0;
const v98 = { set: setme, get: v95, enumerable: true, configurable: false };
try { deepEqual(v93, v98); } catch (e) {}
let v102;
try { v102 = Object.getOwnPropertyDescriptor(o, "getandset"); } catch (e) {}
const v105 = { get: getme, set: setme, enumerable: true, configurable: false };
try { deepEqual(v102, v105); } catch (e) {}
try { f0(true, true); } catch (e) {}
