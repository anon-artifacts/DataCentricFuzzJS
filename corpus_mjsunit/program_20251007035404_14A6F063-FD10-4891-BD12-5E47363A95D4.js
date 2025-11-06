const v0 = /this/;
const v1 = /this/g;
const v2 = /(t)his/;
const v6 = new String("this is a string.");
const v7 = {
    re: v0,
    reg: v1,
    rep: v2,
    str: "this is a string.",
    strObject: v6,
};
var x = v7;
var str = "this is a sting";
var result = str.match(x.re);
var result = str.replace(x.re, null);
var result = str.split(x.re, 1);
var result = str.search(x.re);
const v25 = x.re;
var result = x.str.match(v25);
const v29 = x.re;
var result = x.str.replace(v29, null);
const v34 = x.re;
var result = x.str.split(v34, 1);
const v39 = x.re;
var result = x.str.search(v39);
const v43 = x.re;
var result = x.strObject.match(v43);
const v47 = x.re;
var result = x.strObject.replace(v47, null);
const v52 = x.re;
var result = x.strObject.split(v52, 1);
const v57 = x.re;
var result = x.strObject.search(v57);
const v61 = x.strObject;
const v62 = /forceNoMatch/;
var result = String.prototype.replace.call(v61, v62, "");
const v68 = x.str;
var result = x.str.replace(v68, "I");
const v73 = x.str;
var result = x.re.exec(v73);
const v77 = x.str;
var result = x.str.split(v77, 1);
const v82 = x.strObject;
var result = x.strObject.replace(v82, "I");
const v87 = x.strObject;
var result = x.re.exec(v87);
const v91 = x.strObject;
var result = x.strObject.split(v91, 1);
x.reg.exec("_this_");
print(5, x.reg.lastIndex, "wrong x.reg.lastIndex");
("this").match(x.rep);
print("t", RegExp.$1, "RegExp.$1 in local context wasn't updated to the capture group");
var result = ("this").match(x.re);
var expected = Array;
print(expected, result.constructor, "The result should be created in local context");
