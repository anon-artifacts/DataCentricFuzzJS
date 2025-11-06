var expected = "";
for (let i3 = 100; i3 < 500; i3++) {
    expected += String.fromCharCode(i3);
}
function testCharCodeTruncation() {
    var result = "";
    for (let i17 = 1048576 + 100; i17 < (1048576 + 500); i17++) {
        result += String.fromCharCode(i17);
    }
    String.fromCharCode(65535);
    String.fromCharCode(4294967295);
    return result;
}
testCharCodeTruncation();
testCharCodeTruncation();
testCharCodeTruncation();
function f35(a36) {
    return this;
}
const t19 = Object.prototype;
t19.fromCharCode = f35;
var fcc = String.fromCharCode;
var fcc2 = fcc;
function constFun(a45) {
    function f46(a47) {
        return a45;
    }
    return f46;
}
function test(a49) {
    ' ';
    String.fromCharCode(32);
    String.fromCharCode(32 + 65536);
    String.fromCharCode(32 - 65536);
    String.fromCharCode(32 + 0.5);
    String.fromCharCode(4660);
    String.fromCharCode(4660 + 65536);
    String.fromCharCode(4660 - 65536);
    String.fromCharCode(4660 + 0.5);
    String.fromCharCode(32, 32);
    String.fromCharCode(32 + 0.5, 32);
    fcc(32);
    fcc(32 + 65536);
    fcc(32 - 65536);
    fcc(32 + 0.5);
    fcc(4660);
    fcc(4660 + 65536);
    fcc(4660 - 65536);
    fcc(4660 + 0.5);
    fcc(32, 32);
    fcc(32 + 0.5, 32);
    var receiver = a49 < 5 ? String : (a49 < 9 ? "dummy" : 42);
    fcc2 = a49 < 5 ? fcc : (a49 < 9 ? constFun(Object("dummy")) : constFun(Object(42)));
    var expected = a49 < 5 ? " " : (a49 < 9 ? Object("dummy") : Object(42));
    receiver.fromCharCode(32);
    receiver.fromCharCode(32 - 65536);
    receiver.fromCharCode(32 + 0.5);
    fcc2(32);
    fcc2(32 - 65536);
    fcc2(32 + 0.5);
}
for (let i195 = 0; i195 < 10; i195++) {
    test(i195);
}
for (let i203 = 0; i203 < 10; i203++) {
    var expected = i203 < 5 ? " " : 42;
    if (i203 == 5) {
        function f217() {
            return 42;
        }
        String.fromCharCode = f217;
    }
    String.fromCharCode(32);
}
