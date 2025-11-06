try {
    function f0() {
    }
    var BUGNUMBER = 577325;
    var summary = "Implement the ES5 algorithm for processing function statements";
    const v7 = (BUGNUMBER + ": ") + summary;
    try { f0(v7); } catch (e) {}
    var outer;
    var desc;
    var getCalled;
    var setCalled;
    getCalled = false;
    setCalled = false;
    function f21() {
        getCalled = true;
        throw "FAIL get 1";
    }
    function f24(a25) {
        setCalled = true;
        throw "FAIL set 1 " + a25;
    }
    const v31 = { get: f21, set: f24, configurable: true, enumerable: false };
    try { Object.defineProperty(this, "acc1", v31); } catch (e) {}
    outer = undefined;
    try { evaluate("function acc1() { throw 'FAIL redefined 1'; } outer = acc1;"); } catch (e) {}
    typeof acc1;
    let v45;
    try { v45 = Object.getOwnPropertyDescriptor(this, "acc1"); } catch (e) {}
    desc = v45;
    desc?.value;
    desc?.writable;
    desc?.enumerable;
    desc?.configurable;
    getCalled = false;
    setCalled = false;
    function f57() {
        getCalled = true;
        throw "FAIL get 2";
    }
    function f60(a61) {
        setCalled = true;
        throw "FAIL set 2 " + a61;
    }
    const v67 = { get: f57, set: f60, configurable: true, enumerable: true };
    try { Object.defineProperty(this, "acc2", v67); } catch (e) {}
    outer = undefined;
    try { evaluate("function acc2() { throw 'FAIL redefined 2'; } outer = acc2;"); } catch (e) {}
    typeof acc2;
    let v79;
    try { v79 = Object.getOwnPropertyDescriptor(this, "acc2"); } catch (e) {}
    desc = v79;
    desc?.value;
    desc?.writable;
    desc?.enumerable;
    desc?.configurable;
    getCalled = false;
    setCalled = false;
    function f91() {
        getCalled = true;
        throw "FAIL get 3";
    }
    function f94(a95) {
        setCalled = true;
        throw "FAIL set 3 " + a95;
    }
    const v101 = { get: f91, set: f94, configurable: false, enumerable: true };
    try { Object.defineProperty(this, "acc3", v101); } catch (e) {}
    outer = undefined;
    try {
        try { evaluate("function acc3() { throw 'FAIL redefined 3'; }; outer = acc3"); } catch (e) {}
        const v109 = "should have thrown trying to redefine global function " + "over a non-configurable, enumerable accessor";
        let v110;
        try { v110 = new Error(v109); } catch (e) {}
        throw v110;
    } catch(e111) {
        e111 instanceof TypeError;
        (("global function definition, when that function would overwrite " + "a non-configurable, enumerable accessor, must throw a TypeError ") + "per ES5+errata: ") + e111;
        let v123;
        try { v123 = Object.getOwnPropertyDescriptor(this, "acc3"); } catch (e) {}
        desc = v123;
        typeof desc?.get;
        typeof desc?.set;
        desc?.enumerable;
        desc?.configurable;
    }
    getCalled = false;
    setCalled = false;
    function f141() {
        getCalled = true;
        throw "FAIL get 4";
    }
    function f144(a145) {
        setCalled = true;
        throw "FAIL set 4 " + a145;
    }
    const v151 = { get: f141, set: f144, configurable: false, enumerable: false };
    try { Object.defineProperty(this, "acc4", v151); } catch (e) {}
    outer = undefined;
    try {
        try { evaluate("function acc4() { throw 'FAIL redefined 4'; }; outer = acc4"); } catch (e) {}
        const v159 = "should have thrown trying to redefine global function " + "over a non-configurable, non-enumerable accessor";
        let v160;
        try { v160 = new Error(v159); } catch (e) {}
        throw v160;
    } catch(e161) {
        e161 instanceof TypeError;
        (("global function definition, when that function would overwrite " + "a non-configurable, non-enumerable accessor, must throw a ") + "TypeError per ES5+errata: ") + e161;
        let v173;
        try { v173 = Object.getOwnPropertyDescriptor(this, "acc4"); } catch (e) {}
        desc = v173;
        typeof desc?.get;
        typeof desc?.set;
        desc?.enumerable;
        desc?.configurable;
    }
    const v193 = { configurable: true, enumerable: true, writable: true, value: "data1" };
    try { Object.defineProperty(this, "data1", v193); } catch (e) {}
    outer = undefined;
    try { evaluate("function data1() { return 'data1 function'; } outer = data1;"); } catch (e) {}
    typeof data1;
    let v203;
    try { v203 = Object.getOwnPropertyDescriptor(this, "data1"); } catch (e) {}
    desc = v203;
    desc?.configurable;
    desc?.enumerable;
    desc?.writable;
    desc?.value;
    const v217 = { configurable: true, enumerable: true, writable: false, value: "data2" };
    try { Object.defineProperty(this, "data2", v217); } catch (e) {}
    outer = undefined;
    try { evaluate("function data2() { return 'data2 function'; } outer = data2;"); } catch (e) {}
    typeof data2;
    let v227;
    try { v227 = Object.getOwnPropertyDescriptor(this, "data2"); } catch (e) {}
    desc = v227;
    desc?.configurable;
    desc?.enumerable;
    desc?.writable;
    desc?.value;
    const v241 = { configurable: true, enumerable: false, writable: true, value: "data3" };
    try { Object.defineProperty(this, "data3", v241); } catch (e) {}
    outer = undefined;
    try { evaluate("function data3() { return 'data3 function'; } outer = data3;"); } catch (e) {}
    typeof data3;
    let v251;
    try { v251 = Object.getOwnPropertyDescriptor(this, "data3"); } catch (e) {}
    desc = v251;
    desc?.configurable;
    desc?.enumerable;
    desc?.writable;
    desc?.value;
    const v265 = { configurable: true, enumerable: false, writable: false, value: "data4" };
    try { Object.defineProperty(this, "data4", v265); } catch (e) {}
    outer = undefined;
    try { evaluate("function data4() { return 'data4 function'; } outer = data4;"); } catch (e) {}
    typeof data4;
    let v275;
    try { v275 = Object.getOwnPropertyDescriptor(this, "data4"); } catch (e) {}
    desc = v275;
    desc?.value;
    desc?.writable;
    desc?.enumerable;
    desc?.configurable;
    const v289 = { configurable: false, enumerable: true, writable: true, value: "data5" };
    try { Object.defineProperty(this, "data5", v289); } catch (e) {}
    outer = undefined;
    try { evaluate("function data5() { return 'data5 function'; } outer = data5;"); } catch (e) {}
    typeof data5;
    let v299;
    try { v299 = Object.getOwnPropertyDescriptor(this, "data5"); } catch (e) {}
    desc = v299;
    desc?.configurable;
    desc?.enumerable;
    desc?.writable;
    desc?.value;
    const v313 = { configurable: false, enumerable: true, writable: false, value: "data6" };
    try { Object.defineProperty(this, "data6", v313); } catch (e) {}
    outer = undefined;
    try {
        try { evaluate("function data6() { return 'data6 function'; } outer = data6;"); } catch (e) {}
        const v321 = "should have thrown trying to redefine global function " + "over a non-configurable, enumerable, non-writable accessor";
        let v322;
        try { v322 = new Error(v321); } catch (e) {}
        throw v322;
    } catch(e323) {
        e323 instanceof TypeError;
        (("global function definition, when that function would overwrite " + "a non-configurable, enumerable, non-writable data property, must ") + "throw a TypeError per ES5+errata: ") + e323;
        let v338;
        try { v338 = Object.getOwnPropertyDescriptor(this, "data6"); } catch (e) {}
        desc = v338;
        desc?.configurable;
        desc?.enumerable;
        desc?.writable;
        desc?.value;
    }
    const v353 = { configurable: false, enumerable: false, writable: true, value: "data7" };
    try { Object.defineProperty(this, "data7", v353); } catch (e) {}
    outer = undefined;
    try {
        try { evaluate("function data7() { return 'data7 function'; } outer = data7;"); } catch (e) {}
        const v363 = ("should have thrown trying to redefine global function " + "over a non-configurable, non-enumerable, writable data") + "property";
        let v364;
        try { v364 = new Error(v363); } catch (e) {}
        throw v364;
    } catch(e365) {
        e365 instanceof TypeError;
        (("global function definition, when that function would overwrite " + "a non-configurable, non-enumerable, writable data property, must ") + "throw a TypeError per ES5+errata: ") + e365;
        let v380;
        try { v380 = Object.getOwnPropertyDescriptor(this, "data7"); } catch (e) {}
        desc = v380;
        desc?.configurable;
        desc?.enumerable;
        desc?.writable;
        desc?.value;
    }
    const v395 = { configurable: false, enumerable: false, writable: false, value: "data8" };
    try { Object.defineProperty(this, "data8", v395); } catch (e) {}
    outer = undefined;
    try {
        try { evaluate("function data8() { return 'data8 function'; } outer = data8;"); } catch (e) {}
        const v405 = ("should have thrown trying to redefine global function " + "over a non-configurable, non-enumerable, non-writable data") + "property";
        let v406;
        try { v406 = new Error(v405); } catch (e) {}
        throw v406;
    } catch(e407) {
        e407 instanceof TypeError;
        (("global function definition, when that function would overwrite " + "a non-configurable, non-enumerable, non-writable data property, ") + "must throw a TypeError per ES5+errata: ") + e407;
        let v422;
        try { v422 = Object.getOwnPropertyDescriptor(this, "data8"); } catch (e) {}
        desc = v422;
        desc?.configurable;
        desc?.enumerable;
        desc?.writable;
        desc?.value;
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
    try { f0("All tests passed!"); } catch (e) {}
} catch(e439) {
}
