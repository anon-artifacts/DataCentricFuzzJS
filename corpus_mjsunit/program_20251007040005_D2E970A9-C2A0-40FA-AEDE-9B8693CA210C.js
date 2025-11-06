function f0() {
}
function civilDate(a2, a3) {
    var opts = Object.assign({ timeZone: "Asia/Riyadh" }, a2);
    const t4 = Intl.DateTimeFormat;
    const v12 = new t4("ar-SA-u-ca-islamic-civil-nu-latn", opts);
    return v12.format(a3);
}
function tabularDate(a15, a16) {
    var opts = Object.assign({ timeZone: "Asia/Riyadh" }, a15);
    const t10 = Intl.DateTimeFormat;
    const v25 = new t10("ar-SA-u-ca-islamic-tbla-nu-latn", opts);
    return v25.format(a16);
}
function sightingDate(a28, a29) {
    var opts = Object.assign({ timeZone: "Asia/Riyadh" }, a28);
    const t16 = Intl.DateTimeFormat;
    const v38 = new t16("ar-SA-u-ca-islamic-rgsa-nu-latn", opts);
    return v38.format(a29);
}
function ummAlQuraDate(a41, a42) {
    const v44 = { timeZone: "Asia/Riyadh" };
    let v46;
    try { v46 = Object.assign(v44, a41); } catch (e) {}
    var opts = v46;
    const v49 = Intl?.DateTimeFormat;
    let v51;
    try { v51 = new v49("ar-SA-u-ca-umalqura-nu-latn", opts); } catch (e) {}
    let v52;
    try { v52 = v51.format(a42); } catch (e) {}
    return v52;
}
function testIslamicTbla() {
    const v61 = new Date(Date.UTC(2015, 1 - 1, 1));
    var date = v61;
    var monthYear = { year: "numeric", month: "numeric" };
    civilDate(monthYear, date);
    tabularDate(monthYear, date);
    var day = { day: "numeric" };
    Number(civilDate(day, date)) - Number(tabularDate(day, date));
    -1;
}
function testIslamicRgsa() {
    const v88 = new Date(Date.UTC(1975, 5 - 1, 6));
    var date1 = v88;
    const v96 = new Date(Date.UTC(2015, 1 - 1, 1));
    var date2 = v96;
    var dayMonthYear = { year: "numeric", month: "numeric", day: "numeric" };
    sightingDate(dayMonthYear, date1);
    tabularDate(dayMonthYear, date1);
    sightingDate(dayMonthYear, date2);
    civilDate(dayMonthYear, date2);
}
function testIslamicUmalqura() {
    var year = { year: "numeric" };
    var month = { month: "numeric" };
    var day = { day: "numeric" };
    const v120 = { year: 2016, month: 1, day: 11 };
    const v125 = [v120,{ year: 1437, month: 4, day: 1 }];
    const v129 = { year: 2016, month: 2, day: 10 };
    const v134 = [v129,{ year: 1437, month: 5, day: 1 }];
    const v138 = { year: 2016, month: 3, day: 10 };
    const v143 = [v138,{ year: 1437, month: 6, day: 1 }];
    const v147 = { year: 2016, month: 4, day: 8 };
    const v152 = [v147,{ year: 1437, month: 7, day: 1 }];
    const v156 = { year: 2016, month: 5, day: 8 };
    const v161 = [v156,{ year: 1437, month: 8, day: 1 }];
    const v165 = { year: 2016, month: 6, day: 6 };
    const v170 = [v165,{ year: 1437, month: 9, day: 1 }];
    const v174 = { year: 2016, month: 7, day: 6 };
    const v179 = [v174,{ year: 1437, month: 10, day: 1 }];
    const v183 = { year: 2016, month: 8, day: 4 };
    const v188 = [v183,{ year: 1437, month: 11, day: 1 }];
    const v192 = { year: 2016, month: 9, day: 2 };
    const v197 = [v192,{ year: 1437, month: 12, day: 1 }];
    const v201 = { year: 2016, month: 10, day: 2 };
    const v206 = [v201,{ year: 1438, month: 1, day: 1 }];
    const v210 = { year: 2016, month: 11, day: 1 };
    const v215 = [v210,{ year: 1438, month: 2, day: 1 }];
    const v219 = { year: 2016, month: 11, day: 30 };
    const v224 = [v219,{ year: 1438, month: 3, day: 1 }];
    const v228 = { year: 2016, month: 12, day: 30 };
    var dates = [v125,v134,v143,v152,v161,v170,v179,v188,v197,v206,v215,v224,[v228,{ year: 1438, month: 4, day: 1 }]];
    for (const v236 of dates) {
        const v239 = gregorian?.year;
        const v242 = gregorian?.month - 1;
        const v243 = gregorian?.day;
        let v244;
        try { v244 = Date.UTC(v239, v242, v243); } catch (e) {}
        let v245;
        try { v245 = new Date(v244); } catch (e) {}
        var date = v245;
        let v247;
        try { v247 = ummAlQuraDate(year, date); } catch (e) {}
        try { parseInt(v247, 10); } catch (e) {}
        ummAlQura?.year;
        let v253;
        try { v253 = ummAlQuraDate(month, date); } catch (e) {}
        try { Number(v253); } catch (e) {}
        ummAlQura?.month;
        let v257;
        try { v257 = ummAlQuraDate(day, date); } catch (e) {}
        try { Number(v257); } catch (e) {}
        ummAlQura?.day;
    }
}
testIslamicTbla();
testIslamicRgsa();
try { testIslamicUmalqura(); } catch (e) {}
if (typeof f0 === "function") {
    f0(0, 0, "ok");
}
