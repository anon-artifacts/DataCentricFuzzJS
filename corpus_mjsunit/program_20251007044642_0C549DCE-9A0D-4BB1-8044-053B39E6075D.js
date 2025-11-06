console.log("This test checks that automatic semicolon insertion for parsing and reparsing agree. In a debug build, this test will fail with an assertion failure if they do not.");
function commaTest() {
    a = 1;
}
try {
    commaTest();
} catch(e7) {
}
function varCommaTest() {
    var a = 1;
}
try {
    varCommaTest();
} catch(e12) {
}
function constCommaTest() {
    const a = 1;
}
try {
    constCommaTest();
} catch(e17) {
}
function commaParenTest() {
}
try {
    commaParenTest();
} catch(e21) {
}
function commaParenThrowTest() {
}
try {
    commaParenThrowTest();
} catch(e25) {
}
