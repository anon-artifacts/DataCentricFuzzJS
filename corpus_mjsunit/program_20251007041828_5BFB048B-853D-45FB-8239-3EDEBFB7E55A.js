("foo").charCodeAt(-123);
("foo").charCodeAt(-0);
("foo").charCodeAt(0);
("foo").charCodeAt(2);
("foo").charCodeAt(3.4);
("foo").charCodeAt();
("").charCodeAt();
("").charCodeAt(0);
function charCodeAt1(a30) {
    return ("abc").charCodeAt(a30);
}
charCodeAt1(-1);
charCodeAt1(0);
charCodeAt1(1);
charCodeAt1(2);
charCodeAt1(3);
charCodeAt1(1234);
function charCodeAt2(a50) {
    return ("abc").charCodeAt(a50);
}
charCodeAt2(-1.3);
charCodeAt2(-0);
charCodeAt2(2);
charCodeAt2(2.3);
charCodeAt2(3.14);
charCodeAt2(NaN);
function charCodeAt3(a71, a72) {
    var s2 = ("abcdef" + a71) + "12345";
    return s2.charCodeAt(a72);
}
charCodeAt3("abcdef", 14);
charCodeAt3("a" + "b", 1);
charCodeAt3("abcdefg" + "hijklmnop", 10);
const v97 = new Number(123);
var n = v97;
n.charCodeAt = String.prototype.charCodeAt;
n.charCodeAt(1);
