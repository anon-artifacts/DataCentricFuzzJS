function f0() {
}
var BUGNUMBER = 489682;
var summary = "TM: wrong number with nested type-unstable loops";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var v = 0;
const v14 = {};
const v15 = {};
for (const v18 of [0,v14,v15,{}]) {
    f0(v);
    v = v >>> 0;
    const v22 = {};
    const v23 = {};
    const v26 = new String("");
    const v29 = new String("");
    for (const v33 of [v22,v23,v26,42,v29,{},42]) {
    }
}
f0(v);
f0(expect = "0", actual = v + "", summary);
