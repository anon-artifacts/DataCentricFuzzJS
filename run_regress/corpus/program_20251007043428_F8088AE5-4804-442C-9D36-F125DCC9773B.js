function testEscapes(a1, a2) {
    a2.source;
    ("/" + a1) + "/";
    a2.toString();
}
testEscapes("\/", /\//);
testEscapes("\/\/", /\/\//);
const v18 = new RegExp("/");
testEscapes("\/", v18);
const v22 = new RegExp("\/");
testEscapes("\/", v22);
const v26 = new RegExp("\\/");
testEscapes("\\\/", v26);
const v30 = new RegExp("\/\/");
testEscapes("\/\/", v30);
const v34 = new RegExp("////");
testEscapes("\/\/\/\/", v34);
const v38 = new RegExp("\//\//");
testEscapes("\/\/\/\/", v38);
const v42 = new RegExp("");
testEscapes("(?:)", v42);
var r = /\/\//;
testEscapes("\/\/", r);
r.source = "garbage";
testEscapes("\/\/", r);
