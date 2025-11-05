if (typeof Intl !== "object") {
    const localeSep = ([,,]).toLocaleString();
    const originalNumberToLocaleString = Number.prototype.toLocaleString;
    for (const v13 of anyTypedArrayConstructors) {
        function f14() {
            arguments.length;
            return "pass";
        }
        const t8 = Number.prototype;
        t8.toLocaleString = f14;
        const v21 = new v13(1);
        v21.toLocaleString();
        const v25 = new v13(2);
        v25.toLocaleString();
        ("pass" + localeSep) + "pass";
    }
    const t16 = Number.prototype;
    t16.toLocaleString = originalNumberToLocaleString;
    for (const v32 of anyTypedArrayConstructors) {
        function f33() {
            arguments.length;
            return "pass";
        }
        const t23 = Number.prototype;
        t23.toLocaleString = f33;
        let locales = {};
        let options = {};
        const v44 = new v32(1);
        v44.toLocaleString(locales, options);
        const v48 = new v32(2);
        v48.toLocaleString(locales, options);
        ("pass" + localeSep) + "pass";
    }
    const t33 = Number.prototype;
    t33.toLocaleString = originalNumberToLocaleString;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
