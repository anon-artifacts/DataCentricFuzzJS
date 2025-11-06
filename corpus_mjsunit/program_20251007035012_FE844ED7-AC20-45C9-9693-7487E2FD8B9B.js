function f0() {
}
var BUGNUMBER = 730831;
var summary = "Date.prototype.toISOString returns an invalid ISO-8601 string";
f0((BUGNUMBER + ": ") + summary);
function iso(a10) {
    const v12 = new Date(a10);
    let v13;
    try { v13 = v12.toISOString(); } catch (e) {}
    return v13;
}
function utc(a15, a16, a17, a18, a19, a20, a21) {
    const v24 = new Date(0);
    var date = v24;
    date.setUTCFullYear(a15, a16 - 1, a17);
    date.setUTCHours(a18, a19, a20, a21);
    return date.getTime();
}
var maxDateSimple = utc(9999, 12, 31, 23, 59, 59, 999);
iso(maxDateSimple - 1);
iso(maxDateSimple);
iso(maxDateSimple + 1);
var minDateSimple = utc(0, 1, 1, 0, 0, 0, 0);
iso(minDateSimple - 1);
iso(minDateSimple);
iso(minDateSimple + 1);
var maxDateExtended = utc(+275760, 9, 13, 0, 0, 0, 0);
+8640000000000000;
iso(maxDateExtended - 1);
iso(maxDateExtended);
const v87 = () => {
    return iso(maxDateExtended + 1);
};
v87();
var minDateExtended = utc(-271821, 4, 20, 0, 0, 0, 0);
-8640000000000000;
const v105 = () => {
    return iso(minDateExtended - 1);
};
v105();
iso(minDateExtended);
iso(minDateExtended + 1);
if (typeof f0 === "function") {
    f0(true, true);
}
