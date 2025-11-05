var s = "test";
function getTwoByteString() {
    return "ሴt";
}
function getCons() {
    return "testtesttesttest" + getTwoByteString();
}
function f8() {
    return 1;
}
var slowIndex1 = { valueOf: f8 };
function f12() {
    return "2";
}
var slowIndex2 = { toString: f12 };
function f16() {
    return -1;
}
var slowIndexOutOfRange = { valueOf: f16 };
function basicTest(a22, a23) {
    't';
    a22().charAt();
    a22().charAt("string");
    a22().charAt(null);
    const v36 = void 0;
    a22().charAt(v36);
    a22().charAt(false);
    a22().charAt(true);
    const v49 = -1;
    a22().charAt(v49);
    a22().charAt(a23);
    a22().charAt(slowIndexOutOfRange);
    const v61 = 1 / 0;
    a22().charAt(v61);
    const v68 = -1 / 0;
    a22().charAt(v68);
    a22().charAt(0);
    const v77 = -0;
    a22().charAt(v77);
    const v82 = -0.1;
    a22().charAt(v82);
    a22().charAt(0.4);
    a22().charAt(slowIndex1);
    a22().charAt(slowIndex2);
    a22().charAt(3);
    a22().charAt(3.4);
    a22().charAt(NaN);
    a22().charCodeAt();
    a22().charCodeAt("string");
    a22().charCodeAt(null);
    const v120 = void 0;
    a22().charCodeAt(v120);
    a22().charCodeAt(false);
    a22().charCodeAt(true);
    a22().charCodeAt(0);
    const v137 = -0;
    a22().charCodeAt(v137);
    const v142 = -0.1;
    a22().charCodeAt(v142);
    a22().charCodeAt(0.4);
    a22().charCodeAt(slowIndex1);
    a22().charCodeAt(slowIndex2);
    a22().charCodeAt(3);
    a22().charCodeAt(3.4);
    a22().charCodeAt(NaN);
    const v167 = -1;
    isNaN(a22().charCodeAt(v167));
    isNaN(a22().charCodeAt(a23));
    isNaN(a22().charCodeAt(slowIndexOutOfRange));
    const v180 = 1 / 0;
    isNaN(a22().charCodeAt(v180));
    const v187 = -1 / 0;
    isNaN(a22().charCodeAt(v187));
}
function f191() {
    return s;
}
basicTest(f191, s.length);
basicTest(getCons, getCons().length);
var alpha = ["@"];
for (let i201 = 1; i201 < 128; i201++) {
    var c = String.fromCharCode(i201);
    alpha[i201] = c.charAt(0);
}
var alphaStr = alpha.join("");
for (let i216 = 1; i216 < 128; i216++) {
    alpha[i216];
    alphaStr.charAt(i216);
    String.fromCharCode(i216);
    alphaStr.charAt(i216);
}
const v229 = String.prototype.charAt;
const v231 = String.prototype.charCodeAt;
function f232() {
    return "012";
}
function f234() {
    return "should not be called";
}
var o = { charAt: v229, charCodeAt: v231, toString: f232, valueOf: f234 };
function stealTest() {
    '0';
    o.charAt(0);
    o.charAt(1);
    o.charAt(1.4);
    o.charAt(slowIndex1);
    o.charAt(2);
    o.charAt(slowIndex2);
    o.charCodeAt(0);
    o.charCodeAt(1);
    o.charCodeAt(1.4);
    o.charCodeAt(slowIndex1);
    o.charCodeAt(2);
    o.charCodeAt(slowIndex2);
    o.charAt(-1);
    o.charAt(-1.4);
    o.charAt(10);
    o.charAt(slowIndexOutOfRange);
    isNaN(o.charCodeAt(-1));
    isNaN(o.charCodeAt(-1.4));
    isNaN(o.charCodeAt(10));
    isNaN(o.charCodeAt(slowIndexOutOfRange));
}
stealTest();
for (let i299 = 0; i299 < 20; i299++) {
    function f305() {
        return s;
    }
    basicTest(f305, s.length);
    basicTest(getCons, getCons().length);
    stealTest();
}
function f312() {
    return [];
}
var badToString = f312;
function testBadToString_charAt() {
    var goodToString = o.toString;
    var hasCaught = false;
    var numCalls = 0;
    var result;
    try {
        for (let i325 = 0; i325 < 20; i325++) {
            if (i325 == 10) {
                o.valueOf = badToString;
                o.toString = badToString;
            }
            result = o.charAt(1);
            numCalls++;
        }
    } catch(e336) {
        hasCaught = true;
    } finally {
        o.toString = goodToString;
    }
}
testBadToString_charAt();
function testBadToString_charCodeAt() {
    var goodToString = o.toString;
    var hasCaught = false;
    var numCalls = 0;
    var result;
    try {
        for (let i351 = 0; i351 < 20; i351++) {
            if (i351 == 10) {
                o.valueOf = badToString;
                o.toString = badToString;
            }
            result = o.charCodeAt(1);
            numCalls++;
        }
    } catch(e362) {
        hasCaught = true;
    } finally {
        o.toString = goodToString;
    }
}
testBadToString_charCodeAt();
var badIndex = { toString: badToString, valueOf: badToString };
function testBadIndex_charAt() {
    var index = 1;
    var hasCaught = false;
    var numCalls = 0;
    var result;
    try {
        for (let i379 = 0; i379 < 20; i379++) {
            if (i379 == 10) {
                index = badIndex;
            }
            result = o.charAt(index);
            numCalls++;
        }
    } catch(e389) {
        hasCaught = true;
    }
}
testBadIndex_charAt();
function testBadIndex_charCodeAt() {
    var index = 1;
    var hasCaught = false;
    var numCalls = 0;
    var result;
    try {
        for (let i404 = 0; i404 < 20; i404++) {
            if (i404 == 10) {
                index = badIndex;
            }
            result = o.charCodeAt(index);
            numCalls++;
        }
    } catch(e414) {
        hasCaught = true;
    }
}
testBadIndex_charCodeAt();
function testPrototypeChange_charAt() {
    var result;
    var oldResult;
    for (let i425 = 0; i425 < 20; i425++) {
        if (i425 == 10) {
            oldResult = result;
            function f433() {
                return "%";
            }
            const t224 = String.prototype;
            t224.charAt = f433;
        }
        result = s.charAt(1);
    }
    const t229 = String.prototype;
    delete t229.charAt;
}
testPrototypeChange_charAt();
function testPrototypeChange_charCodeAt() {
    var result;
    var oldResult;
    for (let i449 = 0; i449 < 20; i449++) {
        if (i449 == 10) {
            oldResult = result;
            function f457() {
                return 42;
            }
            const t242 = String.prototype;
            t242.charCodeAt = f457;
        }
        result = s.charCodeAt(1);
    }
    const t247 = String.prototype;
    delete t247.charCodeAt;
}
testPrototypeChange_charCodeAt();
