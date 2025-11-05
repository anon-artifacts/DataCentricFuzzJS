function f0() {
}
const v2 = () => {
    const v6 = Month?.January;
    let v12;
    try { v12 = new Date(1970, v6, 1, 0, 0, 0, 0); } catch (e) {}
    let dt1 = v12;
    try { dt1.getHours(); } catch (e) {}
    const v18 = Month?.January;
    let v20;
    try { v20 = new Date(1915, v18, 1); } catch (e) {}
    let dt2 = v20;
    const v24 = Month?.January;
    let v26;
    try { v26 = new Date(1970, v24, 1); } catch (e) {}
    let dt3 = v26;
};
try { inTimeZone("Europe/London", v2); } catch (e) {}
const v32 = () => {
    let v35;
    try { v35 = new Date("1942-03-01T00:00:00"); } catch (e) {}
    let dt1 = v35;
    const v39 = Month?.April;
    try { dt1.setMonth(v39); } catch (e) {}
    const v43 = Month?.October;
    let v45;
    try { v45 = new Date(2010, v43, 31); } catch (e) {}
    let dt2 = v45;
    const v48 = Month?.November;
    try { dt2.setMonth(v48); } catch (e) {}
    const v52 = Month?.April;
    let v54;
    try { v54 = new Date(1942, v52, 1); } catch (e) {}
    let dt3 = v54;
    function getNumberOfDaysInMonth(a58, a59) {
        const v60 = Month?.January;
        const v61 = Month?.March;
        const v62 = Month?.May;
        const v63 = Month?.July;
        const v64 = Month?.August;
        const v65 = Month?.October;
        const v66 = Month?.December;
        const v67 = Month?.April;
        const v68 = Month?.June;
        const v69 = Month?.September;
        const v70 = Month?.November;
        const v71 = Month?.February;
        switch (a59) {
            case v60:
            case v61:
            case v62:
            case v63:
            case v64:
            case v65:
            case v66:
                return 31;
            case v67:
            case v68:
            case v69:
            case v70:
                return 30;
            case v71:
                if (((a58 % 4) === 0) && (((a58 % 100) !== 0) || ((a58 % 400) === 0))) {
                    return 29;
                }
                return 28;
        }
        const v91 = `Illegal month value: ${a59}`;
        let v92;
        try { v92 = new Error(v91); } catch (e) {}
        throw v92;
    }
    for (let i94 = 1900; i94 <= 2142; ++i94) {
        for (let i101 = Month?.January; i101 <= Month?.December; ++i101) {
            let v107;
            try { v107 = getNumberOfDaysInMonth(i94, i101); } catch (e) {}
            const numDays = v107;
            for (let i110 = 1; i110 <= numDays; ++i110) {
                let v115;
                try { v115 = new Date(i94, i101, i110); } catch (e) {}
                let date = v115;
                try { date.getMonth(); } catch (e) {}
            }
        }
    }
    const v119 = Month?.April;
    let v121;
    try { v121 = new Date(1984, v119, 1); } catch (e) {}
    let dt4 = v121;
    const v125 = Month?.March;
    let v127;
    try { v127 = new Date(1984, v125, 1); } catch (e) {}
    let dt5 = v127;
    const v131 = Month?.April;
    let v133;
    try { v133 = new Date(1984, v131, 1); } catch (e) {}
    let dt6 = v133;
    try { dt6.toUTCString(); } catch (e) {}
    try { dt6.getTime(); } catch (e) {}
};
try { inTimeZone("Asia/Novosibirsk", v32); } catch (e) {}
const v141 = () => {
    const v145 = Month?.March;
    let v148;
    try { v148 = new Date(2040, v145, 31, 20); } catch (e) {}
    let dt = v148;
    const v153 = { datetime: "Sat Mar 31 2040 20:00:00", date: 31, hours: 20 };
    const v157 = { datetime: "Sat Mar 31 2040 22:00:00", date: 31, hours: 22 };
    const v161 = { datetime: "Sun Apr 01 2040 00:00:00", date: 1, hours: 0 };
    const v165 = { datetime: "Sun Apr 01 2040 02:00:00", date: 1, hours: 2 };
    const v169 = { datetime: "Sun Apr 01 2040 04:00:00", date: 1, hours: 4 };
    const v173 = { datetime: "Sun Apr 01 2040 06:00:00", date: 1, hours: 6 };
    for (const v179 of [v153,v157,v161,v165,v169,v173,{ datetime: "Sun Apr 01 2040 08:00:00", date: 1, hours: 8 }]) {
        `${datetime} GMT+0300 (Eastern European Summer Time)`;
        try { dt.getDate(); } catch (e) {}
        try { dt.getHours(); } catch (e) {}
        try { dt.getTimezoneOffset(); } catch (e) {}
        -180;
        let v189;
        try { v189 = dt.getHours(); } catch (e) {}
        const v191 = v189 + 2;
        try { dt.setHours(v191); } catch (e) {}
    }
};
try { inTimeZone("Europe/Tallinn", v141); } catch (e) {}
const v195 = () => {
    const v199 = Month?.March;
    let v203;
    try { v203 = new Date(2016, v199, 27, 2, 59); } catch (e) {}
    let dt1 = v203;
    const v207 = Month?.March;
    let v211;
    try { v211 = new Date(2016, v207, 27, 3, 0); } catch (e) {}
    let dt2 = v211;
};
try { inTimeZone("Europe/Riga", v195); } catch (e) {}
const v216 = () => {
    const v220 = Month?.June;
    let v226;
    try { v226 = Date.UTC(1942, v220, 11, 22, 0, 0, 0); } catch (e) {}
    let v227;
    try { v227 = new Date(v226); } catch (e) {}
    let dt = v227;
    try { dt.getFullYear(); } catch (e) {}
    try { dt.getMonth(); } catch (e) {}
    Month?.June;
    try { dt.getDate(); } catch (e) {}
    try { dt.getHours(); } catch (e) {}
    try { dt.getMinutes(); } catch (e) {}
    try { dt.getSeconds(); } catch (e) {}
    try { dt.getMilliseconds(); } catch (e) {}
    try { dt.getTimezoneOffset(); } catch (e) {}
    -120;
};
try { inTimeZone("Europe/Zagreb", v216); } catch (e) {}
const v249 = () => {
    const v253 = Month?.January;
    let v255;
    try { v255 = new Date(1954, v253, 1); } catch (e) {}
    let dt1 = v255;
    const v259 = Month?.January;
    let v261;
    try { v261 = new Date(1965, v259, 1); } catch (e) {}
    let dt2 = v261;
    const v265 = Month?.January;
    let v267;
    try { v267 = new Date(1970, v265, 1); } catch (e) {}
    let dt3 = v267;
    const v271 = -504921600000;
    let v272;
    try { v272 = new Date(v271); } catch (e) {}
    let dt4 = v272;
    const v276 = Month?.January;
    let v278;
    try { v278 = new Date(1974, v276, 1); } catch (e) {}
    let dt5 = v278;
};
try { inTimeZone("Europe/London", v249); } catch (e) {}
const v283 = () => {
    const v287 = Month?.January;
    let v293;
    try { v293 = new Date(0, v287, 1, 0, 0, 0, 0); } catch (e) {}
    let dt = v293;
    try { dt.setFullYear(1970); } catch (e) {}
    try { dt.getFullYear(); } catch (e) {}
};
try { inTimeZone("Europe/Dublin", v283); } catch (e) {}
const v301 = () => {
    const v305 = Month?.January;
    let v311;
    try { v311 = new Date(0, v305, 1, 0, 0, 0, 0); } catch (e) {}
    let dt = v311;
    try { dt.setFullYear(2015); } catch (e) {}
    const v317 = Month?.November;
    try { dt.setMonth(v317); } catch (e) {}
};
try { inTimeZone("Europe/Lisbon", v301); } catch (e) {}
const v322 = () => {
    const v326 = Month?.January;
    let v332;
    try { v332 = new Date(0, v326, 1, 0, 0, 0, 0); } catch (e) {}
    let dt = v332;
    try { dt.setFullYear(2015); } catch (e) {}
    const v338 = Month?.November;
    try { dt.setMonth(v338); } catch (e) {}
};
try { inTimeZone("Europe/London", v322); } catch (e) {}
const v343 = () => {
    const v347 = Month?.January;
    let v349;
    try { v349 = new Date(2014, v347, 1); } catch (e) {}
    let dt1 = v349;
    try { dt1.toISOString(); } catch (e) {}
    try { dt1.getHours(); } catch (e) {}
    const v357 = Month?.January;
    let v359;
    try { v359 = new Date(2013, v357, 1); } catch (e) {}
    let dt2 = v359;
    const v362 = Month?.January;
    const v364 = Month?.December;
    let v366;
    try { v366 = new Date(2014, v364, 1); } catch (e) {}
    let v367;
    try { v367 = v366.setMonth(v362); } catch (e) {}
    let v368;
    try { v368 = new Date(v367); } catch (e) {}
    let dt3 = v368;
    try { dt3.getFullYear(); } catch (e) {}
    const v374 = Month?.April;
    let v376;
    try { v376 = new Date(2040, v374, 1); } catch (e) {}
    let dt4 = v376;
    const v380 = Month?.April;
    let v382;
    try { v382 = new Date(2043, v380, 1); } catch (e) {}
    let dt5 = v382;
    const v386 = Month?.April;
    let v388;
    try { v388 = new Date(2054, v386, 1); } catch (e) {}
    let dt6 = v388;
    const v392 = Month?.April;
    let v394;
    try { v394 = new Date(2065, v392, 1); } catch (e) {}
    let dt7 = v394;
    const v398 = Month?.April;
    let v400;
    try { v400 = new Date(2068, v398, 1); } catch (e) {}
    let dt8 = v400;
    const v404 = Month?.April;
    let v406;
    try { v406 = new Date(2071, v404, 1); } catch (e) {}
    let dt9 = v406;
    const v410 = Month?.April;
    let v412;
    try { v412 = new Date(2082, v410, 1); } catch (e) {}
    let dt10 = v412;
    const v416 = Month?.April;
    let v418;
    try { v418 = new Date(2093, v416, 1); } catch (e) {}
    let dt11 = v418;
    const v422 = Month?.April;
    let v424;
    try { v424 = new Date(2096, v422, 1); } catch (e) {}
    let dt12 = v424;
    const v428 = Month?.April;
    let v430;
    try { v430 = new Date(2099, v428, 1); } catch (e) {}
    let dt13 = v430;
};
try { inTimeZone("Europe/Moscow", v343); } catch (e) {}
const v435 = () => {
    const v439 = Month?.January;
    let v441;
    try { v441 = new Date(2015, v439, 4); } catch (e) {}
    let dt1 = v441;
    const v445 = Month?.January;
    let v447;
    try { v447 = new Date(2015, v445, 5); } catch (e) {}
    let dt2 = v447;
    const v451 = Month?.January;
    let v453;
    try { v453 = new Date(2015, v451, 6); } catch (e) {}
    let dt3 = v453;
    const v457 = Month?.January;
    let v459;
    try { v459 = new Date(2015, v457, 7); } catch (e) {}
    let dt4 = v459;
    const v463 = Month?.January;
    let v465;
    try { v465 = new Date(2015, v463, 8); } catch (e) {}
    let dt5 = v465;
    const v469 = Month?.January;
    let v471;
    try { v471 = new Date(2015, v469, 9); } catch (e) {}
    let dt6 = v471;
};
try { inTimeZone("Europe/Moscow", v435); } catch (e) {}
const v476 = () => {
    const locale = "en-001";
    const opts = { timeZoneName: "long", hour12: false };
    const v486 = Month?.March;
    let v488;
    try { v488 = new Date(1950, v486, 28); } catch (e) {}
    let dt1 = v488;
    try { dt1.toLocaleString(locale, opts); } catch (e) {}
    const v494 = Month?.July;
    let v496;
    try { v496 = new Date(1950, v494, 1); } catch (e) {}
    let dt2 = v496;
    try { dt2.toLocaleString(locale, opts); } catch (e) {}
    const v502 = Month?.March;
    let v504;
    try { v504 = new Date(1960, v502, 27); } catch (e) {}
    let dt3 = v504;
    try { dt3.toLocaleString(locale, opts); } catch (e) {}
    const v510 = Month?.March;
    let v512;
    try { v512 = new Date(1960, v510, 28); } catch (e) {}
    let dt4 = v512;
    try { dt4.toLocaleString(locale, opts); } catch (e) {}
    const v518 = Month?.March;
    let v520;
    try { v520 = new Date(1960, v518, 29); } catch (e) {}
    let dt5 = v520;
    try { dt5.toLocaleString(locale, opts); } catch (e) {}
    const v526 = Month?.July;
    let v528;
    try { v528 = new Date(1960, v526, 1); } catch (e) {}
    let dt6 = v528;
    try { dt6.toLocaleString(locale, opts); } catch (e) {}
    const v534 = Month?.July;
    let v536;
    try { v536 = new Date(1961, v534, 1); } catch (e) {}
    let dt7 = v536;
    try { dt7.toLocaleString(locale, opts); } catch (e) {}
    const v542 = Month?.March;
    let v544;
    try { v544 = new Date(1970, v542, 1); } catch (e) {}
    let dt8 = v544;
    try { dt8.toLocaleString(locale, opts); } catch (e) {}
    const v550 = Month?.March;
    let v552;
    try { v552 = new Date(1970, v550, 27); } catch (e) {}
    let dt9 = v552;
    try { dt9.toLocaleString(locale, opts); } catch (e) {}
    const v558 = Month?.March;
    let v560;
    try { v560 = new Date(1970, v558, 28); } catch (e) {}
    let dt10 = v560;
    try { dt10.toLocaleString(locale, opts); } catch (e) {}
    const v566 = Month?.July;
    let v568;
    try { v568 = new Date(1970, v566, 1); } catch (e) {}
    let dt11 = v568;
    try { dt11.toLocaleString(locale, opts); } catch (e) {}
};
try { inTimeZone("Europe/Berlin", v476); } catch (e) {}
const v575 = () => {
    let v578;
    try { v578 = new Date(621000); } catch (e) {}
    let dt = v578;
    try { dt.getUTCFullYear(); } catch (e) {}
    let v583;
    try { v583 = dt.getMilliseconds(); } catch (e) {}
    try { dt.setMilliseconds(v583); } catch (e) {}
    let v585;
    try { v585 = dt.getSeconds(); } catch (e) {}
    try { dt.setSeconds(v585); } catch (e) {}
    try { dt.getUTCFullYear(); } catch (e) {}
};
try { inTimeZone("Australia/Adelaide", v575); } catch (e) {}
const v592 = () => {
    let v595;
    try { v595 = new Date(1446361200000); } catch (e) {}
    let dt = v595;
    try { dt.getTime(); } catch (e) {}
    try { dt.setMilliseconds(0); } catch (e) {}
    try { dt.getTime(); } catch (e) {}
};
try { inTimeZone("America/Denver", v592); } catch (e) {}
const v606 = () => {
    const v610 = Month?.March;
    let v612;
    try { v612 = new Date(1980, v610, 10); } catch (e) {}
    let dt = v612;
};
try { inTimeZone("America/New_York", v606); } catch (e) {}
const v617 = () => {
    const v621 = Month?.December;
    let v625;
    try { v625 = Date.UTC(1969, v621, 31, 23, 0); } catch (e) {}
    let v626;
    try { v626 = new Date(v625); } catch (e) {}
    let dt1 = v626;
    try { dt1.getTime(); } catch (e) {}
    -3600000;
    let v632;
    try { v632 = dt1.getMinutes(); } catch (e) {}
    const v634 = v632 + 30;
    try { dt1.setMinutes(v634); } catch (e) {}
    try { dt1.getTime(); } catch (e) {}
    -1800000;
    let v640;
    try { v640 = dt1.getMinutes(); } catch (e) {}
    const v642 = v640 + 30;
    try { dt1.setMinutes(v642); } catch (e) {}
    try { dt1.getTime(); } catch (e) {}
    let v647;
    try { v647 = dt1.getMinutes(); } catch (e) {}
    const v649 = v647 + 30;
    try { dt1.setMinutes(v649); } catch (e) {}
    try { dt1.getTime(); } catch (e) {}
    let v654;
    try { v654 = dt1.getMinutes(); } catch (e) {}
    const v656 = v654 + 30;
    try { dt1.setMinutes(v656); } catch (e) {}
    try { dt1.getTime(); } catch (e) {}
    const v662 = -1;
    let v663;
    try { v663 = new Date(v662); } catch (e) {}
    let dt2 = v663;
    try { dt2.getTime(); } catch (e) {}
    -1;
    let v668;
    try { v668 = dt2.getMilliseconds(); } catch (e) {}
    const v670 = v668 + 1;
    try { dt2.setMilliseconds(v670); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    try { dt2.setTime(1); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    let v678;
    try { v678 = dt2.getMilliseconds(); } catch (e) {}
    const v680 = v678 - 1;
    try { dt2.setMilliseconds(v680); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    let v684;
    try { v684 = dt2.getMilliseconds(); } catch (e) {}
    const v686 = v684 - 1;
    try { dt2.setMilliseconds(v686); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    -1;
    let v691;
    try { v691 = dt2.getMilliseconds(); } catch (e) {}
    const v693 = v691 + 1;
    try { dt2.setMilliseconds(v693); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    let v697;
    try { v697 = dt2.getMilliseconds(); } catch (e) {}
    const v699 = v697 + 3600000;
    try { dt2.setMilliseconds(v699); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    let v703;
    try { v703 = dt2.getMilliseconds(); } catch (e) {}
    const v709 = v703 + ((3600000 * 2) - 1);
    try { dt2.setMilliseconds(v709); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    (3600000 * 3) - 1;
    let v717;
    try { v717 = dt2.getMilliseconds(); } catch (e) {}
    const v719 = v717 + 1;
    try { dt2.setMilliseconds(v719); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    3600000 * 3;
    let v725;
    try { v725 = dt2.getMilliseconds(); } catch (e) {}
    const v729 = v725 + (3600000 * 2);
    try { dt2.setMilliseconds(v729); } catch (e) {}
    try { dt2.getTime(); } catch (e) {}
    3600000 * 5;
    let v736;
    try { v736 = new Date(0); } catch (e) {}
    let dt3 = v736;
    const v740 = -1;
    let v741;
    try { v741 = new Date(v740); } catch (e) {}
    let dt4 = v741;
};
try { inTimeZone("Asia/Ho_Chi_Minh", v617); } catch (e) {}
const v746 = () => {
    const v750 = Month?.January;
    let v752;
    try { v752 = new Date(1910, v750, 1); } catch (e) {}
    let dt = v752;
};
try { inTimeZone("Europe/Dublin", v746); } catch (e) {}
const v757 = () => {
    const v761 = Month?.April;
    let v767;
    try { v767 = new Date(1986, v761, 4, 0, 0, 0, 0); } catch (e) {}
    let dt = v767;
    try { dt.getTimezoneOffset(); } catch (e) {}
    -120;
};
try { inTimeZone("Europe/Zurich", v757); } catch (e) {}
const v775 = () => {
    const v779 = Month?.May;
    let v784;
    try { v784 = new Date(2012, v779, 14, 12, 13, 14); } catch (e) {}
    let dt = v784;
    const v788 = Intl?.DateTimeFormat;
    const v792 = { hour: "numeric", minute: "numeric" };
    let v793;
    try { v793 = new v788("en-US", v792); } catch (e) {}
    let dtf = v793;
    try { dtf.format(dt); } catch (e) {}
};
try { inTimeZone("Europe/Moscow", v775); } catch (e) {}
const v799 = () => {
    const v803 = Month?.May;
    let v808;
    try { v808 = new Date(2012, v803, 14, 12, 13, 14); } catch (e) {}
    let dt = v808;
    const v812 = Intl?.DateTimeFormat;
    const v816 = { hour: "numeric", minute: "numeric" };
    let v817;
    try { v817 = new v812("en-US", v816); } catch (e) {}
    let dtf = v817;
    try { dtf.format(dt); } catch (e) {}
};
try { inTimeZone("Asia/Baku", v799); } catch (e) {}
const v823 = () => {
    const v827 = Month?.May;
    let v832;
    try { v832 = new Date(2012, v827, 14, 12, 13, 14); } catch (e) {}
    let dt = v832;
    const v836 = Intl?.DateTimeFormat;
    const v840 = { hour: "numeric", minute: "numeric" };
    let v841;
    try { v841 = new v836("en-US", v840); } catch (e) {}
    let dtf = v841;
    try { dtf.format(dt); } catch (e) {}
};
try { inTimeZone("Asia/Tbilisi", v823); } catch (e) {}
const v847 = () => {
    const v851 = Month?.March;
    let v857;
    try { v857 = new Date(2013, v851, 22, 1, 0, 0, 0); } catch (e) {}
    let dt1 = v857;
    const v861 = Month?.March;
    let v867;
    try { v867 = new Date(2013, v861, 22, 2, 0, 0, 0); } catch (e) {}
    let dt2 = v867;
    const v871 = Month?.March;
    let v877;
    try { v877 = new Date(2013, v871, 22, 3, 0, 0, 0); } catch (e) {}
    let dt3 = v877;
    const v881 = Month?.March;
    let v887;
    try { v887 = new Date(2013, v881, 29, 1, 0, 0, 0); } catch (e) {}
    let dt4 = v887;
    const v891 = Month?.March;
    let v897;
    try { v897 = new Date(2013, v891, 29, 2, 0, 0, 0); } catch (e) {}
    let dt5 = v897;
    const v901 = Month?.March;
    let v907;
    try { v907 = new Date(2013, v901, 29, 3, 0, 0, 0); } catch (e) {}
    let dt6 = v907;
};
try { inTimeZone("Asia/Jerusalem", v847); } catch (e) {}
const v912 = () => {
    const v916 = Month?.October;
    let v921;
    try { v921 = new Date(2017, v916, 14, 12, 0, 0); } catch (e) {}
    let dt1 = v921;
    try { dt1.getTimezoneOffset(); } catch (e) {}
    const v927 = Month?.October;
    let v932;
    try { v932 = new Date(2017, v927, 15, 12, 0, 0); } catch (e) {}
    let dt2 = v932;
    try { dt2.getTimezoneOffset(); } catch (e) {}
    const v938 = Month?.February;
    let v943;
    try { v943 = new Date(2018, v938, 17, 12, 0, 0); } catch (e) {}
    let dt3 = v943;
    try { dt3.getTimezoneOffset(); } catch (e) {}
    const v949 = Month?.February;
    let v954;
    try { v954 = new Date(2018, v949, 18, 12, 0, 0); } catch (e) {}
    let dt4 = v954;
    try { dt4.getTimezoneOffset(); } catch (e) {}
    const v960 = Month?.November;
    let v965;
    try { v965 = new Date(2018, v960, 3, 12, 0, 0); } catch (e) {}
    let dt5 = v965;
    try { dt5.getTimezoneOffset(); } catch (e) {}
    const v971 = Month?.November;
    let v976;
    try { v976 = new Date(2018, v971, 4, 12, 0, 0); } catch (e) {}
    let dt6 = v976;
    try { dt6.getTimezoneOffset(); } catch (e) {}
    const v982 = Month?.February;
    let v987;
    try { v987 = new Date(2019, v982, 16, 12, 0, 0); } catch (e) {}
    let dt7 = v987;
    try { dt7.getTimezoneOffset(); } catch (e) {}
    const v993 = Month?.February;
    let v998;
    try { v998 = new Date(2019, v993, 17, 12, 0, 0); } catch (e) {}
    let dt8 = v998;
    try { dt8.getTimezoneOffset(); } catch (e) {}
};
try { inTimeZone("America/Sao_Paulo", v912); } catch (e) {}
const v1005 = () => {
    const v1009 = Month?.March;
    let v1011;
    try { v1011 = new Date(2018, v1009, 31); } catch (e) {}
    let dt = v1011;
    try { dt.getTimezoneOffset(); } catch (e) {}
};
try { inTimeZone("America/Asuncion", v1005); } catch (e) {}
const v1018 = () => {
    let shortMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const v1034 = Intl?.DateTimeFormat;
    const v1037 = { month: "short" };
    let v1038;
    try { v1038 = new v1034("en-US", v1037); } catch (e) {}
    let dtf = v1038;
    for (let i1041 = 1900; i1041 <= 2100; ++i1041) {
        for (let i1049 = Month?.January; i1049 <= Month?.December; ++i1049) {
            let v1058;
            try { v1058 = new Date(i1041, i1049, 1); } catch (e) {}
            let date = v1058;
            try { dtf.format(date); } catch (e) {}
            shortMonths?.[i1049];
        }
    }
};
try { inTimeZone("Europe/Warsaw", v1018); } catch (e) {}
const v1064 = () => {
    const v1068 = Month?.January;
    let v1073;
    try { v1073 = new Date(1970, v1068, 1, 0, 0, 0); } catch (e) {}
    let dt = v1073;
};
try { inTimeZone("Europe/Berlin", v1064); } catch (e) {}
const v1078 = () => {
    const v1082 = Month?.April;
    let v1087;
    try { v1087 = new Date(1004, v1082, 1, 2, 0, 0); } catch (e) {}
    let dt1 = v1087;
    try { dt1.getHours(); } catch (e) {}
    const v1093 = Month?.April;
    let v1098;
    try { v1098 = new Date(1004, v1093, 1, 1, 0, 0); } catch (e) {}
    let dt2 = v1098;
    try { dt2.getHours(); } catch (e) {}
    const v1104 = Month?.April;
    let v1109;
    try { v1109 = new Date(1004, v1104, 1, 0, 0, 0); } catch (e) {}
    let dt3 = v1109;
    try { dt3.getHours(); } catch (e) {}
    const v1115 = Month?.March;
    let v1120;
    try { v1120 = new Date(1004, v1115, 1, 2, 0, 0); } catch (e) {}
    let dt4 = v1120;
    try { dt4.getHours(); } catch (e) {}
    const v1126 = Month?.March;
    let v1131;
    try { v1131 = new Date(1004, v1126, 1, 1, 0, 0); } catch (e) {}
    let dt5 = v1131;
    try { dt5.getHours(); } catch (e) {}
    const v1137 = Month?.March;
    let v1142;
    try { v1142 = new Date(1004, v1137, 1, 0, 0, 0); } catch (e) {}
    let dt6 = v1142;
    try { dt6.getHours(); } catch (e) {}
};
try { inTimeZone("Europe/Moscow", v1078); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
