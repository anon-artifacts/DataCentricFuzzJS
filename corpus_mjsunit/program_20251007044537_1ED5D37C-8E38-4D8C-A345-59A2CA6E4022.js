function timeZoneName() {
    const v2 = Intl.DateTimeFormat;
    const v6 = new v2("en-US", { timeZoneName: "long" });
    var dtf = v6;
    const v8 = (a9) => {
        return a9.type === "timeZoneName";
    };
    return dtf.formatToParts(Date.UTC(2017, 2, 31, 12, 0, 0)).filter(v8)[0].value;
}
timeZoneName();
timeZoneName();
timeZoneName();
timeZoneName();
timeZoneName();
timeZoneName();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
