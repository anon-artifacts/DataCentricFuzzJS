console.log("This page tests for assertion failures in edge cases of property lookup on primitive values.");
var didNotCrash = true;
function f5() {
    const t3 = String.prototype;
    delete t3.constructor;
    for (let i10 = 0; i10 < 3; ++i10) {
        ("").replace;
    }
}
f5();
function f19() {
    const v22 = { x: 1, y: 1 };
    const t12 = String.prototype;
    t12.__proto__ = v22;
    const t14 = String.prototype.__proto__;
    delete t14.x;
    for (let i29 = 0; i29 < 3; ++i29) {
        ("").y;
    }
}
f19();
function f38() {
    function f(a40) {
        a40.y;
    }
    const t25 = String.prototype;
    t25.x = 1;
    const t27 = String.prototype;
    t27.y = 1;
    const t29 = String.prototype;
    delete t29.x;
    const t30 = Number.prototype;
    t30.x = 1;
    const t33 = Number.prototype;
    t33.y = 1;
    const t35 = Number.prototype;
    delete t35.x;
    for (let i57 = 0; i57 < 3; ++i57) {
        f("");
    }
    for (let i66 = 0; i66 < 3; ++i66) {
        f(0.5);
    }
}
f38();
var checkOkay;
function checkGet(a78, a79) {
    checkOkay = false;
    const v81 = a79.prototype;
    function f83() {
        checkOkay = typeof this === "object";
    }
    Object.defineProperty(v81, "foo", { get: f83, configurable: true });
    a78.foo;
    const t52 = a79.prototype;
    delete t52.foo;
    return checkOkay;
}
function checkSet(a96, a97) {
    checkOkay = false;
    const v99 = a97.prototype;
    function f101() {
        checkOkay = typeof this === "object";
    }
    Object.defineProperty(v99, "foo", { set: f101, configurable: true });
    a96.foo = null;
    const t66 = a97.prototype;
    delete t66.foo;
    return checkOkay;
}
function checkGetStrict(a114, a115) {
    checkOkay = false;
    const v117 = a115.prototype;
    function f119() {
        'use strict';
        checkOkay = typeof this !== "object";
    }
    Object.defineProperty(v117, "foo", { get: f119, configurable: true });
    a114.foo;
    const t77 = a115.prototype;
    delete t77.foo;
    return checkOkay;
}
function checkSetStrict(a132, a133) {
    checkOkay = false;
    const v135 = a133.prototype;
    function f137() {
        'use strict';
        checkOkay = typeof this !== "object";
    }
    Object.defineProperty(v135, "foo", { set: f137, configurable: true });
    a132.foo = null;
    const t92 = a133.prototype;
    delete t92.foo;
    return checkOkay;
}
checkGet(1, Number);
checkGet("hello", String);
checkGet(true, Boolean);
checkSet(1, Number);
checkSet("hello", String);
checkSet(true, Boolean);
checkGetStrict(1, Number);
checkGetStrict("hello", String);
checkGetStrict(true, Boolean);
checkSetStrict(1, Number);
checkSetStrict("hello", String);
checkSetStrict(true, Boolean);
function checkRead(a177, a178) {
    return a177.foo === undefined;
}
function checkWrite(a183, a184) {
    a183.foo = null;
    return a183.foo === undefined;
}
function checkReadStrict(a190, a191) {
    'use strict';
    return a190.foo === undefined;
}
function checkWriteStrict(a196, a197) {
    'use strict';
    a196.foo = null;
    return a196.foo === undefined;
}
checkRead(1, Number);
checkRead("hello", String);
checkRead(true, Boolean);
checkWrite(1, Number);
checkWrite("hello", String);
checkWrite(true, Boolean);
checkReadStrict(1, Number);
checkReadStrict("hello", String);
checkReadStrict(true, Boolean);
try {
    checkWriteStrict(1, Number);
} catch(e222) {
}
try {
    checkWriteStrict("hello", String);
} catch(e225) {
}
try {
    checkWriteStrict(true, Boolean);
} catch(e228) {
}
function checkNumericGet(a230, a231) {
    checkOkay = false;
    const v233 = a231.prototype;
    function f235() {
        checkOkay = typeof this === "object";
    }
    Object.defineProperty(v233, 42, { get: f235, configurable: true });
    a230[42];
    const t151 = a231.prototype;
    delete t151[42];
    return checkOkay;
}
function checkNumericSet(a249, a250) {
    checkOkay = false;
    const v252 = a250.prototype;
    function f254() {
        checkOkay = typeof this === "object";
    }
    Object.defineProperty(v252, 42, { set: f254, configurable: true });
    a249[42] = null;
    const t165 = a250.prototype;
    delete t165[42];
    return checkOkay;
}
function checkNumericGetStrict(a268, a269) {
    checkOkay = false;
    const v271 = a269.prototype;
    function f273() {
        'use strict';
        checkOkay = typeof this !== "object";
    }
    Object.defineProperty(v271, 42, { get: f273, configurable: true });
    a268[42];
    const t176 = a269.prototype;
    delete t176[42];
    return checkOkay;
}
function checkNumericSetStrict(a287, a288) {
    checkOkay = false;
    const v290 = a288.prototype;
    function f292() {
        'use strict';
        checkOkay = typeof this !== "object";
    }
    Object.defineProperty(v290, 42, { set: f292, configurable: true });
    a287[42] = null;
    const t191 = a288.prototype;
    delete t191[42];
    return checkOkay;
}
checkNumericGet(1, Number);
checkNumericGet("hello", String);
checkNumericGet(true, Boolean);
checkNumericSet(1, Number);
checkNumericSet("hello", String);
checkNumericSet(true, Boolean);
checkNumericGetStrict(1, Number);
checkNumericGetStrict("hello", String);
checkNumericGetStrict(true, Boolean);
checkNumericSetStrict(1, Number);
checkNumericSetStrict("hello", String);
checkNumericSetStrict(true, Boolean);
function checkNumericRead(a330, a331) {
    return a330[42] === undefined;
}
function checkNumericWrite(a336, a337) {
    a336[42] = null;
    return a336[42] === undefined;
}
function checkNumericReadStrict(a343, a344) {
    'use strict';
    return a343[42] === undefined;
}
function checkNumericWriteStrict(a349, a350) {
    'use strict';
    a349[42] = null;
    return a349[42] === undefined;
}
checkNumericRead(1, Number);
checkNumericRead("hello", String);
checkNumericRead(true, Boolean);
checkNumericWrite(1, Number);
checkNumericWrite("hello", String);
checkNumericWrite(true, Boolean);
checkNumericReadStrict(1, Number);
checkNumericReadStrict("hello", String);
checkNumericReadStrict(true, Boolean);
try {
    checkNumericWriteStrict(1, Number);
} catch(e375) {
}
try {
    checkNumericWriteStrict("hello", String);
} catch(e378) {
}
try {
    checkNumericWriteStrict(true, Boolean);
} catch(e381) {
}
