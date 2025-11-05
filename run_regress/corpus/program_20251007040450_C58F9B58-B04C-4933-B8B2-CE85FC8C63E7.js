if (typeof Intl === "object") {
    const localeSep = ([,,]).toLocaleString();
    const v16 = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
    const date = v16;
    const v20 = { timeZone: "UTC" };
    ([date]).toLocaleString("en-us", v20);
    const v26 = ["de","en"];
    const v28 = { timeZone: "UTC" };
    ([date]).toLocaleString(v26, v28);
    const v34 = { timeZone: "UTC" };
    ([date]).toLocaleString("th-th", v34);
    const v40 = { timeZone: "UTC" };
    ([date]).toLocaleString("th-th-u-nu-thai", v40);
    const v45 = new Date(0);
    const sampleValues = [date,v45];
    const sampleLocales = [void 0,"en","th-th-u-nu-thai","ja-jp","ar-ma-u-ca-islamicc",["tlh","de"]];
    const v66 = {
        timeZone: "UTC",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    const numericFormatOptions = v66;
    const v75 = {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    const longFormatOptions = v75;
    const sampleOptions = [{ timeZone: "UTC" },longFormatOptions];
    for (const v81 of sampleLocales) {
        for (const v82 of sampleOptions) {
            let dtfOptions;
            if (v82 === longFormatOptions) {
                dtfOptions = longFormatOptions;
            } else {
                dtfOptions = numericFormatOptions;
            }
            const t45 = Intl.DateTimeFormat;
            const v87 = new t45(v81, dtfOptions);
            let dtf = v87;
            let expected = sampleValues.map(dtf.format).join(localeSep);
            sampleValues.toLocaleString(v81, v82);
        }
    }
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
