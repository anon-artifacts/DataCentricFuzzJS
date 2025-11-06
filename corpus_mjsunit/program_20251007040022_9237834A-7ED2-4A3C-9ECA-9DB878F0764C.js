Array.prototype.find.length;
var a = [21,22,23,24];
function f12() {
    return false;
}
a.find(f12);
function f16() {
    return true;
}
a.find(f16);
function f20(a21) {
    return 121 === a21;
}
a.find(f20);
function f26(a27) {
    return 24 === a27;
}
a.find(f26);
function f32(a33) {
    return 23 === a33;
}
a.find(f32);
function f39(a40) {
    return 22 === a40;
}
a.find(f39);
function f45() {
    var a = [];
    var l = -1;
    var o = -1;
    var v = -1;
    var k = -1;
    function f60(a61, a62, a63) {
        o = a63;
        l = a63.length;
        v = a61;
        k = a62;
        return false;
    }
    a.find(f60);
    -1;
    -1;
    -1;
    -1;
}
f45();
function f76() {
    var a = ["b"];
    var l = -1;
    var o = -1;
    var v = -1;
    var k = -1;
    function f92(a93, a94, a95) {
        o = a95;
        l = a95.length;
        v = a93;
        k = a94;
        return false;
    }
    var found = a.find(f92);
    a.length;
}
f76();
function f105() {
    var a = [1,2,3,4,5];
    var l = 0;
    function f115() {
        l++;
        return false;
    }
    var found = a.find(f115);
    a.length;
}
f105();
function f123() {
    var a = "abcd";
    var l = -1;
    var o = -1;
    var v = -1;
    var k = -1;
    function f138(a139, a140, a141) {
        o = a141.toString();
        l = a141.length;
        v = a139;
        k = a140;
        return false;
    }
    var found = Array.prototype.find.call(a, f138);
    a.length;
    function f153(a154, a155, a156) {
        o = a156.toString();
        l = a156.length;
        v = a154;
        k = a155;
        return true;
    }
    const v160 = [f153];
    found = Array.prototype.find.apply(a, v160);
    a.length;
}
f123();
function f169() {
    var l = -1;
    var o = -1;
    var v = -1;
    var k = -1;
    function f184() {
        return (this.prop1 === "val1") && (this.prop2 === "val2");
    }
    var a = { prop1: "val1", prop2: "val2", isValid: f184 };
    const v199 = [30,31,32];
    Array.prototype.push.apply(a, v199);
    function f203(a204, a205, a206) {
        o = a206;
        l = a206.length;
        v = a204;
        k = a205;
        return !a206.isValid();
    }
    var found = Array.prototype.find.call(a, f203);
}
f169();
function f219() {
    var a = [1,2,3];
    function f225(a226) {
        a.push(a226);
        return false;
    }
    var found = a.find(f225);
    [1,2,3,1,2,3];
    a.length;
    a = [1,2,3];
    function f245(a246, a247) {
        a[a247] = ++a246;
        return false;
    }
    found = a.find(f245);
    [2,3,4];
    a.length;
}
f219();
function f259() {
    const v261 = new Array(30);
    var a = v261;
    a[11] = 21;
    a[7] = 10;
    a[29] = 31;
    var count = 0;
    function f268() {
        count++;
        return false;
    }
    a.find(f268);
}
f259();
function f274() {
    var a = [0,1,,3];
    var count = 0;
    function f283(a284) {
        return a284 === undefined;
    }
    var found = a.find(f283);
}
f274();
function f291() {
    var a = [0,1,,3];
    const v298 = Array.prototype;
    a.__proto__ = { __proto__: v298, 2: 42 };
    var count = 0;
    function f303(a304) {
        return a304 === 42;
    }
    var found = a.find(f303);
}
f291();
function f311() {
    const obj = { 0: 0, 2: 2, length: 3 };
    const received = [];
    const v319 = (a320) => {
        received.push(a320);
        return false;
    };
    const predicate = v319;
    const found = Array.prototype.find.call(obj, predicate);
    [0,,2];
}
f311();
function f334() {
    const a = [0,,2];
    const received = [];
    const v342 = (a343) => {
        a.__proto__ = null;
        received.push(a343);
        return false;
    };
    const predicate = v342;
    const found = Array.prototype.find.call(a, predicate);
    [0,,2];
}
f334();
function f358() {
    function f359(a360, a361) {
        return this.charAt(Number(a361)) === String(a360);
    }
    var found = ([1,2,3]).find(f359, "321");
    function f377(a378) {
        return this[a378];
    }
    var thisArg = { elementAt: f377 };
    const v386 = ["c","b","a"];
    Array.prototype.push.apply(thisArg, v386);
    function f390(a391, a392) {
        return this.elementAt(a392) === a391;
    }
    found = (["a","b","c"]).find(f390, thisArg);
    a = [];
    function f403() {
        a.push(this);
    }
    ([1,2]).find(f403, "");
    a[0] !== a[1];
    a = [];
    function f415() {
        a.push(this);
    }
    const v418 = {};
    ([1,2]).find(f415, v418);
    a[0];
    a[1];
    a = [];
    function f426() {
        'use strict';
        a.push(this);
    }
    ([1,2]).find(f426, "");
    a[0];
    a[0];
    a[1];
}
f358();
