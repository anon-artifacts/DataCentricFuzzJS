console.log("This test checks that toLowerCase and toUpperCase handle certain non-trivial cases correctly.");
String("A𐐀").toLowerCase();
String("a𐐨").toUpperCase();
String("ΚΟΣΜΟΣ ΚΟΣΜΟΣ").toLowerCase();
String("ß").toUpperCase();
String("ŉ").toUpperCase();
String("ǰ").toUpperCase();
String("ﬃ").toUpperCase();
String("FFI").toLowerCase();
String("Ĳ").toLowerCase();
function createExpected() {
    expected = {};
    for (let i35 = 0; i35 < arguments.length; i35++) {
        var s = String.fromCharCode(arguments[i35]);
        expected[s] = true;
    }
    return expected;
}
var expected = createExpected(42893, 613);
expected[String.fromCharCode(42893).toLowerCase()];
expected[String.fromCharCode(613).toUpperCase()];
var expected = createExpected(4295, 11559);
expected[String.fromCharCode(4295).toLowerCase()];
expected[String.fromCharCode(11559).toUpperCase()];
var expected = createExpected(4301, 11565);
expected[String.fromCharCode(11565).toLowerCase()];
expected[String.fromCharCode(4301).toUpperCase()];
var expected = createExpected(11506, 11507);
expected[String.fromCharCode(11506).toLowerCase()];
expected[String.fromCharCode(11507).toUpperCase()];
var expected = createExpected(42898, 42899);
expected[String.fromCharCode(42898).toLowerCase()];
expected[String.fromCharCode(42899).toUpperCase()];
var expected = createExpected(42922, 614);
expected[String.fromCharCode(42922).toLowerCase()];
expected[String.fromCharCode(614).toUpperCase()];
