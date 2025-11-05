function Cons() {
    return "Te" + "st testing 123";
}
function Deep() {
    var a = "T";
    a += "e";
    a += "s";
    a += "ting testing 123";
    return a;
}
function Slice() {
    return ("testing Testing testing 123456789012345").substring(8, 22);
}
function Flat() {
    return "Testing testing 123";
}
function Cons16() {
    return "Te" + "ሴt testing 123";
}
function Deep16() {
    var a = "T";
    a += "e";
    a += "ሴ";
    a += "ting testing 123";
    return a;
}
function Slice16Beginning() {
    return ("Teሴt testing testing 123").substring(0, 14);
}
function Slice16Middle() {
    return ("test Teሴt testing testing 123").substring(5, 19);
}
function Slice16End() {
    return ("test Teሴt").substring(5, 9);
}
function Flat16() {
    return "Teሴting testing 123";
}
function Thing() {
}
function NotAString() {
    const v46 = new Thing();
    var n = v46;
    function f48() {
        return "Test";
    }
    n.toString = f48;
    n.charCodeAt = String.prototype.charCodeAt;
    return n;
}
function NotAString16() {
    const v54 = new Thing();
    var n = v54;
    function f56() {
        return "Teሴt";
    }
    n.toString = f56;
    n.charCodeAt = String.prototype.charCodeAt;
    return n;
}
function TestStringType(a62, a63) {
    var g = a62;
    var len = g().toString().length;
    var t = a63 ? "t" : "f";
    t += a62.name;
    const v75 = -1e+19;
    isNaN(g().charCodeAt(v75));
    1 + t;
    const v83 = -2147483649;
    isNaN(g().charCodeAt(v83));
    2 + t;
    const v90 = -2147483648;
    isNaN(g().charCodeAt(v90));
    3 + t;
    const v97 = -1073741824;
    isNaN(g().charCodeAt(v97));
    4 + t;
    const v104 = -1;
    isNaN(g().charCodeAt(v104));
    5 + t;
    isNaN(g().charCodeAt(len));
    6 + t;
    const v116 = len + 1;
    isNaN(g().charCodeAt(v116));
    7 + t;
    isNaN(g().charCodeAt(1073741823));
    8 + t;
    isNaN(g().charCodeAt(2147483647));
    9 + t;
    isNaN(g().charCodeAt(2147483648));
    10 + t;
    isNaN(g().charCodeAt(1000000000));
    11 + t;
    g().charCodeAt(0);
    12 + t;
    g().charCodeAt("test");
    13 + t;
    g().charCodeAt("");
    14 + t;
    g().charCodeAt(null);
    15 + t;
    g().charCodeAt(undefined);
    16 + t;
    g().charCodeAt();
    17 + t;
    const v183 = void 0;
    g().charCodeAt(v183);
    18 + t;
    g().charCodeAt(false);
    19 + t;
    g().charCodeAt(true);
    20 + t;
    g().charCodeAt(1);
    21 + t;
    a63 ? 4660 : 115;
    g().charCodeAt(2);
    22 + t;
    g().charCodeAt(3);
    23 + t;
    g().charCodeAt(1.1);
    24 + t;
    a63 ? 4660 : 115;
    g().charCodeAt(2.1718);
    25 + t;
    g().charCodeAt(3.14159);
    26 + t;
}
TestStringType(Cons, false);
TestStringType(Deep, false);
TestStringType(Slice, false);
TestStringType(Flat, false);
TestStringType(NotAString, false);
TestStringType(Cons16, true);
TestStringType(Deep16, true);
TestStringType(Slice16Beginning, true);
TestStringType(Slice16Middle, true);
TestStringType(Slice16End, true);
TestStringType(Flat16, true);
TestStringType(NotAString16, true);
function Flat16Optimized() {
    var str = Flat16();
    return str.charCodeAt(2);
}
Flat16Optimized();
Flat16Optimized();
Flat16Optimized();
function ConsNotSmiIndex() {
    var str = Cons();
    isNaN(str.charCodeAt(2147483647));
}
for (let i283 = 0; i283 < 5; i283++) {
    ConsNotSmiIndex();
}
ConsNotSmiIndex();
for (let i292 = 0; i292 != 10; i292++) {
    Cons16().charCodeAt(1.1);
    Cons16().charAt(1.1);
}
function StupidThing() {
    function f307() {
        return 42;
    }
    this.toString = f307;
    this.charCodeAt = String.prototype.charCodeAt;
}
const v316 = new StupidThing();
v316.charCodeAt(0);
const v321 = new StupidThing();
v321.charCodeAt(1);
const v325 = new StupidThing();
isNaN(v325.charCodeAt(2));
const v331 = -1;
const v332 = new StupidThing();
isNaN(v332.charCodeAt(v331));
var medium = "12345678";
medium += medium;
medium += medium;
medium += medium;
medium += medium;
medium += medium;
var long = medium;
long += (long + long) + long;
long += (long + long) + long;
long += (long + long) + long;
long += (long + long) + long;
isNaN(medium.charCodeAt(-1));
medium.charCodeAt(0);
medium.charCodeAt(255);
isNaN(medium.charCodeAt(256));
isNaN(long.charCodeAt(-1));
long.charCodeAt(0);
long.charCodeAt(65535);
isNaN(long.charCodeAt(65536));
const v383 = String.prototype.charCodeAt;
const t194 = String.prototype;
t194.x = v383;
function directlyOnPrototype() {
    ("a").x(0);
    ("b").x(0);
    ("c").x(0);
    ("a").x(0);
    ("b").x(0);
    ("c").x(0);
}
for (let i411 = 0; i411 < 5; i411++) {
    directlyOnPrototype();
}
directlyOnPrototype();
