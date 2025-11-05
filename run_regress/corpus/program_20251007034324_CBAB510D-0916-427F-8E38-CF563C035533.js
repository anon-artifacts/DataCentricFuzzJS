function f0(a1) {
    return a1["Ç"];
}
var f = f0;
var d = f;
d({ Ç: "good" });
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
