function TestOctalLiteral() {
}
TestOctalLiteral();
function TestOctalLiteralUsingNumberFunction() {
    Number("0o0");
    Number("0O0");
    Number("0o1");
    Number("0o7");
    Number("0o10");
    Number("0o77");
}
TestOctalLiteralUsingNumberFunction();
function TestBinaryLiteral() {
}
TestBinaryLiteral();
function TestBinaryLiteralUsingNumberFunction() {
    Number("0b0");
    Number("0B0");
    Number("0b1");
    Number("0b10");
    Number("0b11");
}
TestBinaryLiteralUsingNumberFunction();
function TestParseIntDoesNotSupportOctalNorBinary() {
    parseInt("0o77");
    parseInt("0o77", 8);
    parseInt("0b11");
    parseInt("0b11", 2);
}
TestParseIntDoesNotSupportOctalNorBinary();
function TestParseFloatDoesNotSupportOctalNorBinary() {
    parseFloat("0o77");
    parseFloat("0b11");
}
TestParseFloatDoesNotSupportOctalNorBinary();
