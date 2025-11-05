function f0() {
}
var gTestfile = "15.2.3.10-01.js";
var BUGNUMBER = 492849;
var summary = "ES5: Implement Object.preventExtensions, Object.isExtensible";
f0((BUGNUMBER + ": ") + summary);
function trySetProperty(a12, a13, a14, a15) {
    function strictSetProperty() {
        'use strict';
        a12[a13] = a14;
    }
    function setProperty() {
        a12[a13] = a14;
    }
    Object.prototype.hasOwnProperty.call(a12, a13);
    try {
        if (a15) {
            strictSetProperty();
        } else {
            setProperty();
        }
        if (a12[a13] === a14) {
            return "set";
        }
        if (a13 in a12) {
            return "set-converted";
        }
        return "swallowed";
    } catch(e31) {
        return "throw";
    }
}
function tryDefineProperty(a34, a35, a36) {
    Object.prototype.hasOwnProperty.call(a34, a35);
    try {
        Object.defineProperty(a34, a35, { value: a36 });
        if (a34[a35] === a36) {
            return "set";
        }
        if (a35 in a34) {
            return "set-converted";
        }
        return "swallowed";
    } catch(e50) {
        return "throw";
    }
}
typeof Object.preventExtensions;
Object.preventExtensions.length;
var slowArray = [1,2,3];
slowArray.slow = 5;
const v65 = {};
const v67 = { 1: 2 };
const v69 = { a: 3 };
const v70 = [];
const v72 = [1];
const v75 = [,1];
function a() {
}
var objs = [v65,v67,v69,v70,v72,v75,slowArray,a,/a/];
for (let i82 = 0, i83 = objs.length; i82 < i83; i82++) {
    var o = objs[i82];
    Object.isExtensible(o);
    ("object " + i82) + " not extensible?";
    var o2 = Object.preventExtensions(o);
    Object.isExtensible(o);
    ("object " + i82) + " is extensible?";
    trySetProperty(o, "baz", 17, true);
    ("unexpected behavior for strict-mode property-addition to " + "object ") + i82;
    trySetProperty(o, "baz", 17, false);
    "unexpected behavior for property-addition to object " + i82;
    tryDefineProperty(o, "baz", 17);
    "unexpected behavior for new property definition on object " + i82;
}
f0(true, true);
f0("All tests passed!");
