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
    String.prototype.match.call(null, v20);
}
shouldThrow(f18, "TypeError: String.prototype.match requires that |this| not be null or undefined");
function f27() {
    const v29 = /Cocoa/;
    String.prototype.match.call(undefined, v29);
}
shouldThrow(f27, "TypeError: String.prototype.match requires that |this| not be null or undefined");
function f36() {
    string.match(errorKey);
}
shouldThrow(f36, "Error: out");
shouldBe(("Cocoa").match(/Cocoa/), "Cocoa");
shouldBe(string.match(/Rize/), "Rize");
shouldBe(string.match("Rize"), "Rize");
shouldBe(string.match(/Matcha/), "Matcha");
shouldBe(string.match("Matcha"), "Matcha");
shouldBe(("    undefined").match(), "");
shouldBe(("    undefined").match("undefined"), "undefined");
shouldBe(/Cocoa/[Symbol.match]("Cocoa"), "Cocoa");
var primitives = ["","string",42,Symbol("Cocoa")];
for (const v84 of primitives) {
    function f85() {
        RegExp.prototype[Symbol.match].call(v84);
    }
    shouldThrow(f85, "TypeError: RegExp.prototype.@@match requires that |this| be an Object");
}
function f93() {
    /Cocoa/[Symbol.match](errorKey);
}
shouldThrow(f93, "Error: out");
function testRegExpMatch(a100, a101, a102, a103) {
    shouldBe(a100[Symbol.match](a101), a102);
    shouldBe(a100.lastIndex, a103);
}
function testMatch(a110, a111, a112, a113) {
    shouldBe(a111.match(a110), a112);
    shouldBe(a110.lastIndex, a113);
}
function testBoth(a119, a120, a121, a122) {
    testMatch(a119, a120, a121, a122);
    testRegExpMatch(a119, a120, a121, a122);
}
var cocoa = /Cocoa/;
cocoa.lastIndex = 20;
testBoth(cocoa, "Cocoa", "Cocoa", 20);
testBoth(cocoa, "  Cocoa", "Cocoa", 20);
testBoth(cocoa, "  ", null, 20);
var multibyte = /ココア/;
multibyte.lastIndex = 20;
testBoth(multibyte, "ココア", "ココア", 20);
testBoth(multibyte, "  Cocoa", null, 20);
testBoth(multibyte, "カプチーノ", null, 20);
function alwaysUnmatch(a156) {
    return null;
}
const v160 = new RegExp("ココア");
var regexp = v160;
regexp[Symbol.match] = alwaysUnmatch;
shouldBe(regexp[Symbol.match], alwaysUnmatch);
testBoth(regexp, "ココア", null, 0);
