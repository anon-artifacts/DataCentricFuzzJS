let dates = ["0041-09-23","+000041-09-23","-000041-09-23","0091-09-23","+000091-09-23","-000091-09-23","0217-09-23","+000217-09-23","-000217-09-23","2017-09-23","+002017-09-23","-002017-09-23","+022017-09-23","-022017-09-23","+202017-09-23","-202017-09-23"];
for (const v18 of dates) {
    const v20 = new Date(v18);
    let d = v20;
    let timeValue = d.valueOf();
    Number.isNaN(timeValue);
    `Cannot parse "${v18}" as ISO date-only form`;
    let tz = d.getTimezoneOffset();
    if (Math.trunc(tz) === tz) {
        Date.parse(d.toString());
        `Cannot parse from toString() of "${v18}"`;
    }
    Date.parse(d.toUTCString());
    `Cannot parse from toUTCString() of "${v18}"`;
    Date.parse(d.toISOString());
    `Cannot parse from toISOString() of "${v18}"`;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
