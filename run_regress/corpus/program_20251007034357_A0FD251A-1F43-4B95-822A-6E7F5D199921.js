function f0() {
}
const defaultLocale = "en-US";
const v6 = 12 - 1;
let v12;
try { v12 = Date.UTC(2012, v6, 6, 12, 0, 0); } catch (e) {}
const defaultDate = v12;
const v20 = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};
const defaultOptions = v20;
const v22 = {};
const v24 = { month: "long" };
let v26;
try { v26 = Object.assign(v22, defaultOptions, v24); } catch (e) {}
const longFormatOptions = v26;
const v28 = {};
const v30 = { timeZoneName: "short" };
let v31;
try { v31 = Object.assign(v28, defaultOptions, v30); } catch (e) {}
const tzNameFormatOptions = v31;
const v33 = (a34) => {
    return a34;
};
const v35 = (a36) => {
    let v37;
    try { v37 = a36.toUpperCase(); } catch (e) {}
    return v37;
};
const v38 = (a39) => {
    let v40;
    try { v40 = a39.toLowerCase(); } catch (e) {}
    return v40;
};
const tzMapper = [v33,v35,v38];
const v45 = { timeZone: "UTC", result: "12/6/2012, 12:00:00 PM" };
const v48 = { timeZone: "America/Los_Angeles", result: "12/6/2012, 4:00:00 AM" };
const v51 = { timeZone: "America/New_York", options: tzNameFormatOptions, result: "12/6/2012, 7:00:00 AM EST" };
const v54 = { timeZone: "America/Caracas", result: "12/6/2012, 7:30:00 AM" };
const v57 = { timeZone: "Europe/London", result: "12/6/2012, 12:00:00 PM" };
const v61 = { timeZone: "Africa/Casablanca", locale: "ar-MA-u-ca-islamicc", options: longFormatOptions, result: "22 محرم 1434 12:00:00" };
const v65 = { timeZone: "Europe/Berlin", locale: "de-DE", options: tzNameFormatOptions, result: "6.12.2012, 13:00:00 MEZ" };
const v68 = { timeZone: "Asia/Kathmandu", result: "12/6/2012, 5:45:00 PM" };
const v72 = { timeZone: "Asia/Bangkok", locale: "th-th-u-nu-thai", options: longFormatOptions, result: "๖ ธันวาคม ๒๕๕๕ ๑๙:๐๐:๐๐" };
const v76 = { timeZone: "Asia/Tokyo", locale: "ja-JP", options: longFormatOptions, result: "2012年12月6日 21:00:00" };
const v79 = { timeZone: "Australia/Lord_Howe", result: "12/6/2012, 11:00:00 PM" };
const v84 = 7 - 1;
let v89;
try { v89 = Date.UTC(2012, v84, 6, 12, 0, 0); } catch (e) {}
const v91 = { timeZone: "Australia/Lord_Howe", date: v89, result: "7/6/2012, 10:30:00 PM" };
const v96 = 12 - 1;
let v101;
try { v101 = Date.UTC(1978, v96, 6, 12, 0, 0); } catch (e) {}
const v103 = { timeZone: "Pacific/Kiritimati", date: v101, result: "12/6/1978, 1:20:00 AM" };
const v108 = 12 - 1;
let v113;
try { v113 = Date.UTC(1971, v108, 6, 12, 0, 0); } catch (e) {}
const v115 = { timeZone: "Africa/Monrovia", date: v113, result: "12/6/1971, 11:15:30 AM" };
const v120 = 12 - 1;
let v125;
try { v125 = Date.UTC(1946, v120, 6, 12, 0, 0); } catch (e) {}
const tests = [v45,v48,v51,v54,v57,v61,v65,v68,v72,v76,v79,v91,v103,v115,{ timeZone: "Asia/Riyadh", date: v125, result: "12/6/1946, 3:06:52 PM" }];
for (const v130 of tests) {
    for (const v131 of tzMapper) {
        const v133 = Intl?.DateTimeFormat;
        let v136;
        try { v136 = v131(timeZone); } catch (e) {}
        const v137 = { timeZone: v136 };
        let v138;
        try { v138 = Object.assign(v137, f0); } catch (e) {}
        let v139;
        try { v139 = new v133(locale, v138); } catch (e) {}
        let dtf = v139;
        try { dtf.format(date); } catch (e) {}
        let v144;
        try { v144 = dtf.resolvedOptions(); } catch (e) {}
        v144?.timeZone;
    }
}
if (typeof f0 === "function") {
    try { f0(0, 0, "ok"); } catch (e) {}
}
