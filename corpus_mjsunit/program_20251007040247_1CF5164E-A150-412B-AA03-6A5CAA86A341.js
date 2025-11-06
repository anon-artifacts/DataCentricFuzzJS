function f0() {
    return 42;
}
function f2() {
    return "37";
}
var o1 = { toString: f0, valueOf: f2 };
var n1 = Number(o1);
var s1 = String(o1);
typeof n1 == "number";
typeof s1 == "string";
var trace = [];
var valueOfValue = 42;
var toStringValue = "foo";
function traceValueOf() {
    trace.push("vo");
    return valueOfValue;
}
function traceToString() {
    trace.push("ts");
    return toStringValue;
}
var valueOfFunc = traceValueOf;
var toStringFunc = traceToString;
const v38 = {
    get toString() {
        trace.push("gts");
        return toStringFunc;
    },
    get valueOf() {
        trace.push("gvo");
        return valueOfFunc;
    },
};
var ot = v38;
var nt = Number(ot);
["gvo","vo"];
trace = [];
var st = String(ot);
["gts","ts"];
trace = [];
valueOfValue = ["not primitive"];
var nt = Number(ot);
Number("foo");
["gvo","vo","gts","ts"];
trace = [];
valueOfValue = 42;
toStringValue = ["not primitive"];
var st = String(ot);
String(42);
["gts","ts","gvo","vo"];
trace = [];
valueOfValue = ["not primitive"];
["gvo","vo","gts","ts"];
toStringFunc = "not callable";
trace = [];
valueOfValue = 42;
var st = String(ot);
String(42);
["gts","gvo","vo"];
valueOfFunc = "not callable";
trace = [];
["gts","gvo"];
toStringFunc = traceToString;
toStringValue = "87";
trace = [];
var nt = Number(ot);
["gvo","gts","ts"];
