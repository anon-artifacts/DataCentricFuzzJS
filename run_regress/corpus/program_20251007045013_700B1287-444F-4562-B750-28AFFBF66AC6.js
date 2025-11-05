var gTestfile = "toJSON-01.js";
var BUGNUMBER = 584811;
var summary = "Date.prototype.toJSON isn't to spec";
print((BUGNUMBER + ": ") + summary);
var called;
var dateToJSON = Date.prototype.toJSON;
Date.prototype.hasOwnProperty("toJSON");
typeof dateToJSON;
const v23 = new Date();
var invalidDate = v23;
invalidDate.setTime(NaN);
JSON.stringify({ p: invalidDate });
dateToJSON.length;
try {
    dateToJSON.call(null);
    const v37 = new Error("should have thrown a TypeError");
    throw v37;
} catch(e38) {
    e38 instanceof TypeError;
}
try {
    dateToJSON.call(undefined);
    const v47 = new Error("should have thrown a TypeError");
    throw v47;
} catch(e48) {
    e48 instanceof TypeError;
}
try {
    const v55 = {
        get valueOf() {
            throw 17;
        },
    };
    var r = dateToJSON.call(v55);
    const v61 = new Error("didn't throw, returned: " + r);
    throw v61;
} catch(e62) {
    "bad exception: " + e62;
}
called = false;
function f68() {
    called = true;
    return 12;
}
function f71() {
    return "ohai";
}
dateToJSON.call({ valueOf: null, toString: f68, toISOString: f71 });
called = false;
function f78() {
    called = true;
    return 42;
}
function f81() {
    return null;
}
dateToJSON.call({ valueOf: f78, toISOString: f81 });
try {
    called = false;
    function f88() {
        called = true;
        return {};
    }
    const v93 = {
        valueOf: f88,
        get toString() {
            throw 42;
        },
    };
    dateToJSON.call(v93);
} catch(e95) {
    "bad exception: " + e95;
}
called = false;
function f101() {
    called = true;
    return {};
}
function f104() {
    return true;
}
const v109 = {
    valueOf: f101,
    get toString() {
        function f107() {
            return 8675309;
        }
        return f107;
    },
    toISOString: f104,
};
dateToJSON.call(v109);
var asserted = false;
called = false;
function f116() {
    called = true;
    return {};
}
function f119() {
    return NaN;
}
const v125 = {
    valueOf: f116,
    get toString() {
        asserted = true;
        function f123() {
            return 8675309;
        }
        return f123;
    },
    toISOString: f119,
};
dateToJSON.call(v125);
try {
    const v134 = {
        valueOf: null,
        toString: null,
        get toISOString() {
            const v133 = new Error("shouldn't have been gotten");
            throw v133;
        },
    };
    var r = dateToJSON.call(v134);
    const v140 = new Error("didn't throw, returned: " + r);
    throw v140;
} catch(e141) {
    e141 instanceof TypeError;
    "bad exception: " + e141;
}
function f147() {
    return Infinity;
}
dateToJSON.call({ valueOf: f147 });
function f152() {
    return -Infinity;
}
dateToJSON.call({ valueOf: f152 });
function f158() {
    return NaN;
}
dateToJSON.call({ valueOf: f158 });
function f162() {
    return Infinity;
}
function f164() {
    return {};
}
dateToJSON.call({ valueOf: f162, toISOString: f164 });
function f169() {
    return -Infinity;
}
function f172() {
    return [];
}
dateToJSON.call({ valueOf: f169, toISOString: f172 });
function f177() {
    return NaN;
}
function f178() {
    return undefined;
}
dateToJSON.call({ valueOf: f177, toISOString: f178 });
try {
    const v185 = {
        get toISOString() {
            throw 42;
        },
    };
    var r = dateToJSON.call(v185);
    const v191 = new Error("didn't throw, returned: " + r);
    throw v191;
} catch(e192) {
    "bad exception: " + e192;
}
try {
    var r = dateToJSON.call({ toISOString: null });
    const v203 = new Error("didn't throw, returned: " + r);
    throw v203;
} catch(e204) {
    e204 instanceof TypeError;
    "bad exception: " + e204;
}
try {
    var r = dateToJSON.call({ toISOString: undefined });
    const v217 = new Error("didn't throw, returned: " + r);
    throw v217;
} catch(e218) {
    e218 instanceof TypeError;
    "bad exception: " + e218;
}
try {
    var r = dateToJSON.call({ toISOString: "oogabooga" });
    const v231 = new Error("didn't throw, returned: " + r);
    throw v231;
} catch(e232) {
    e232 instanceof TypeError;
    "bad exception: " + e232;
}
try {
    const v239 = Math.PI;
    var r = dateToJSON.call({ toISOString: v239 });
    const v246 = new Error("didn't throw, returned: " + r);
    throw v246;
} catch(e247) {
    e247 instanceof TypeError;
    "bad exception: " + e247;
}
function f253(a254) {
    called = true;
    arguments.length;
    return obj;
}
var o = { toISOString: f253 };
var obj = {};
called = false;
dateToJSON.call(o);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
