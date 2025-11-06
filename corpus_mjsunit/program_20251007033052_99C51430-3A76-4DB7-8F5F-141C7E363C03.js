for (const v4 of ["long","short","narrow"]) {
    const v6 = Intl.DateTimeFormat;
    const v9 = new v6("en", { weekday: v4 });
    let dtf = v9;
    let options = dtf.resolvedOptions();
    options.weekday;
}
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "ok");
}
