function f0() {
}
var BUGNUMBER = 473040;
var summary = "Do not assert: tm->reservedDoublePoolPtr > tm->reservedDoublePool";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
const v17 = new Function("gc()");
Object.defineProperty(__proto__, "functional", { enumerable: true, configurable: true, get: v17 });
const v23 = new Boolean(true);
const v25 = new Boolean(true);
const v27 = -0;
const v29 = new Boolean(true);
for (const v33 of [v23,v25,v27,v29,-0]) {
}
f0(expect, actual, summary);
