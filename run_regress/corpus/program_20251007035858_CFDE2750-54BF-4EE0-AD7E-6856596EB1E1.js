function f0() {
}
function checkInvalidLocale(a2) {
    try {
        const v4 = Intl.NumberFormat;
        try { new v4(a2); } catch (e) {}
        const v8 = new Error("didn't throw");
        throw v8;
    } catch(e9) {
        e9 instanceof RangeError;
        (("expected RangeError for locale '" + a2) + "', got ") + e9;
    }
}
var badLocales = ["en-u-foo-U-foo","en-tester-Tester","en-tesTER-TESter","de-DE-u-kn-true-U-kn-true","ar-u-foo-q-bar-u-baz","ar-z-moo-u-foo-q-bar-z-eit-u-baz"];
for (const v26 of badLocales) {
    checkInvalidLocale(v26);
}
for (const v28 of badLocales) {
    const v31 = Intl.NumberFormat;
    const v33 = "x-" + v28;
    let v34;
    try { v34 = new v31(v33); } catch (e) {}
    try { v34.format(5); } catch (e) {}
}
for (const v36 of badLocales) {
    const t25 = Intl.NumberFormat;
    const v42 = new t25("en-x-" + v36);
    v42.format(5);
    const t27 = Intl.NumberFormat;
    const v48 = new t27("en-u-foo-x-u-" + v36);
    v48.format(5);
}
if (typeof f0 === "function") {
    f0(true, true);
}
