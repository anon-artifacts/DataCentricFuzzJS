var counter = 0;
function f2() {
    counter++;
    return 256;
}
var a = { valueOf: f2 };
String.fromCharCode(65, a, a, a);
