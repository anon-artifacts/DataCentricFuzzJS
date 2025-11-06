const v2 = { [-1.1734687312999594e+308]: "Qd9", ..."Qd9" };
const v3 = [NaN,1.7976931348623157e+308,656346.2607700597,-1.0];
const v4 = { __proto__: v3, ...v2 };
function f5(a6, a7, a8, a9, a10, a11, a12) {
    return a6;
}
("xxabcdxxabcdxx").replace(/(a)(b)(c)(d)/g, f5);
function f16(a17, a18, a19) {
    return v2;
}
("abcabc").replace(/abc/g, f16);
