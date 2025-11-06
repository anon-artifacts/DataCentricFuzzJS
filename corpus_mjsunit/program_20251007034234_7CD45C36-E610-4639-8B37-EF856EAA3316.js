var WScript = { Echo: print };
function f4() {
    return Date;
}
const t4 = f4();
const v7 = new t4();
var _v8StartDate = v7;
function f10() {
    return Date;
}
const t10 = f10();
const v13 = new t10();
function f15() {
    return _v8StartDate;
}
var _v8Interval = v13 - f15();
function f21() {
    return WScript;
}
f21().Echo("done");
