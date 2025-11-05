function f0() {
}
function inTimeZone(a2, a3) {
    try {
        try { a3(); } catch (e) {}
    } finally {
    }
}
const v6 = { id: "EST5EDT" };
const v8 = { id: "CST6CDT" };
const v10 = { id: "MST7MDT" };
const v12 = { id: "PST8PDT" };
const v15 = { id: "UCT", normalized: "Etc/UCT" };
const v18 = { id: "UTC", normalized: "UTC" };
const timeZones = [v6,v8,v10,v12,v15,v18,{ id: "GMT", normalized: "UTC" }];
for (const v24 of timeZones) {
    const v26 = () => {
        const v28 = Intl?.DateTimeFormat;
        let v29;
        try { v29 = new v28(); } catch (e) {}
        let v30;
        try { v30 = v29.resolvedOptions(); } catch (e) {}
        let opts = v30;
        opts?.timeZone;
    };
    try { inTimeZone(id, v26); } catch (e) {}
}
if (typeof f0 === "function") {
    try { f0(0, 0, "ok"); } catch (e) {}
}
