function fac(a1) {
    if (a1 > 0) {
        return fac(a1 - 1) * a1;
    } else {
        return 1;
    }
}
function testFac() {
    if (fac(6) != 720) {
        throw "Error";
    }
}
function testRegExp() {
    var input = "123456789";
    var result = input.replace(/[4-6]+/g, "xxx");
    if (result != "123xxx789") {
        throw "Error";
    }
}
function main() {
    testFac();
    testRegExp();
}
main();
