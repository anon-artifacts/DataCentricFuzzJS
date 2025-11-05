const t0 = Intl.RelativeTimeFormat;
const v5 = new t0("ak");
v5.format(1, "second");
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "ok");
}
