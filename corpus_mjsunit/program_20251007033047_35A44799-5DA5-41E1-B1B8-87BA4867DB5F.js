function foo(a1, a2, a3, a4, a5, a6, a7) {
    var a = a1.f;
    var b = a2.f;
    var c = a3.f;
    var d = a4.f;
    var e = a5.f;
    var f = a6.f;
    var g = a7.f;
    a++;
    b++;
    c++;
    d++;
    e++;
    f++;
    g++;
    var h = a1.f;
    var i = a2.f;
    var j = a3.f;
    var k = a4.f;
    var l = a5.f;
    var m = a6.f;
    var n = a7.f;
    return ((((((((((((a + b) + c) + d) + e) + f) + g) + h) + i) + j) + k) + l) + m) + n;
}
const v65 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    g: 7,
    h: 8,
    i: 9,
    f: 6,
};
var o = v65;
const v76 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    g: 7,
    h: 8,
    i: 9,
    f: 6,
};
var p = v76;
const v87 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    g: 7,
    h: 8,
    i: 9,
    f: 6,
};
var q = v87;
const v98 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    g: 7,
    h: 8,
    i: 9,
    f: 6,
};
var r = v98;
const v109 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    g: 7,
    h: 8,
    i: 9,
    f: 6,
};
var s = v109;
const v120 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    g: 7,
    h: 8,
    i: 9,
    f: 6,
};
var t = v120;
const v131 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    g: 7,
    h: 8,
    i: 9,
    f: 6,
};
var u = v131;
var result = 0;
for (let i136 = 0; i136 < 1000000; ++i136) {
    result += foo(o, p, q, r, s, t, u);
}
if (result != 91000000) {
    throw "Bad result: " + result;
}
