function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var error = null;
    try {
        a4();
    } catch(e9) {
        error = e9;
    }
    shouldBe(String(error), a5);
}
const v14 = {
    toString() {
    },
};
var errorKey = v14;
var string = "Cocoa, Cappuccino, Rize, Matcha, Kilimanjaro";
function f18() {
    const v20 = /Cocoa/;
    String.prototype.search.call(null, v20);
}
shouldThrow(f18, "TypeError: String.prototype.search requires that |this| not be null or undefined");
function f27() {
    const v29 = /Cocoa/;
    String.prototype.search.call(undefined, v29);
}
shouldThrow(f27, "TypeError: String.prototype.search requires that |this| not be null or undefined");
function f36() {
    string.search(errorKey);
}
shouldThrow(f36, "Error: out");
shouldBe(("Cocoa").search(/Cocoa/), 0);
shouldBe(string.search(/Rize/), 19);
shouldBe(string.search("Rize"), 19);
shouldBe(string.search(/Matcha/), 25);
shouldBe(string.search("Matcha"), 25);
shouldBe(("    undefined").search(), 0);
shouldBe(("    undefined").search("undefined"), 4);
shouldBe(/Cocoa/[Symbol.search]("Cocoa"), 0);
var primitives = ["","string",null,,42,Symbol("Cocoa")];
for (const v86 of primitives) {
    function f87() {
        RegExp.prototype[Symbol.search].call(v86);
    }
    shouldThrow(f87, "TypeError: RegExp.prototype.@@search requires that |this| be an Object");
}
function f95() {
    /Cocoa/[Symbol.search](errorKey);
}
shouldThrow(f95, "Error: out");
function testRegExpSearch(a102, a103, a104, a105) {
    shouldBe(a102[Symbol.search](a103), a104);
    shouldBe(a102.lastIndex, a105);
}
function testSearch(a112, a113, a114, a115) {
    shouldBe(a113.search(a112), a114);
    shouldBe(a112.lastIndex, a115);
}
function testBoth(a121, a122, a123, a124) {
    testSearch(a121, a122, a123, a124);
    testRegExpSearch(a121, a122, a123, a124);
}
var cocoa = /Cocoa/;
cocoa.lastIndex = 20;
testBoth(cocoa, "Cocoa", 0, 20);
testBoth(cocoa, "  Cocoa", 2, 20);
testBoth(cocoa, "  ", -1, 20);
var multibyte = /ココア/;
multibyte.lastIndex = 20;
testBoth(multibyte, "ココア", 0, 20);
testBoth(multibyte, "  Cocoa", -1, 20);
testBoth(multibyte, "カプチーノ", -1, 20);
function alwaysUnmatch(a161) {
    return -1;
}
const v166 = new RegExp("ココア");
var regexp = v166;
regexp[Symbol.search] = alwaysUnmatch;
shouldBe(regexp[Symbol.search], alwaysUnmatch);
testBoth(regexp, "ココア", -1, 0);
