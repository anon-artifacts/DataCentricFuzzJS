if (typeof Intl === "object") {
    const localeSep = ([,,]).toLocaleString();
    ([NaN]).toLocaleString("ar");
    const v15 = ["zh-hant","ar"];
    ([NaN]).toLocaleString(v15);
    ([Infinity]).toLocaleString("dz");
    const v26 = ["fr","en"];
    ([-Infinity]).toLocaleString(v26);
    const sampleValues = [-0,+0,-1,+1,-2,+2,-0.5,+0.5];
    const sampleLocales = [void 0,"en","th-th-u-nu-thai",["tlh","de"]];
    const v59 = void 0;
    const v60 = {};
    const v62 = { style: "percent" };
    const sampleOptions = [v59,v60,v62,{ style: "currency", currency: "USD", minimumIntegerDigits: 4 }];
    for (const v69 of sampleLocales) {
        for (const v70 of sampleOptions) {
            const t16 = Intl.NumberFormat;
            const v72 = new t16(v69, v70);
            let nf = v72;
            let expected = sampleValues.map(nf.format).join(localeSep);
            sampleValues.toLocaleString(v69, v70);
        }
    }
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
