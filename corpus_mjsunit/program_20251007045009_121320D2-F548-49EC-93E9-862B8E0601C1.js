try {
    function f0() {
    }
    const msPerMinute = 60 * 1000;
    function shortTimeZone(a6) {
        let v11;
        try { v11 = a6.replace("(Pacific Standard Time)", "(PST)"); } catch (e) {}
        let v12;
        try { v12 = v11.replace("(Pacific Daylight Time)", "(PDT)"); } catch (e) {}
        return v12;
    }
    function assertEqDate(a14, a15, a16) {
        let v17;
        try { v17 = a14.toString(); } catch (e) {}
        try { shortTimeZone(v17); } catch (e) {}
        `${a15} ${a16}`;
        try { a14.toDateString(); } catch (e) {}
        let v21;
        try { v21 = a14.toTimeString(); } catch (e) {}
        try { shortTimeZone(v21); } catch (e) {}
    }
    {
        const v26 = Month?.November;
        let v32;
        try { v32 = new Date(2016, v26, 6, 0, 0, 0, 0); } catch (e) {}
        let midnight = v32;
        const v35 = Month?.November;
        let v41;
        try { v41 = Date.UTC(2016, v35, 6, 0, 0, 0, 0); } catch (e) {}
        let midnightUTC = v41;
        let v43;
        try { v43 = midnight.getTime(); } catch (e) {}
        midnightUTC - v43;
        -7 * msPerHour;
        const v51 = 0 * 60;
        const v54 = { offset: v51, date: "Sun Nov 06 2016", time: "00:00:00 GMT-0700 (PDT)" };
        const v59 = (0 * 60) + 30;
        const v62 = { offset: v59, date: "Sun Nov 06 2016", time: "00:30:00 GMT-0700 (PDT)" };
        const v65 = 1 * 60;
        const v68 = { offset: v65, date: "Sun Nov 06 2016", time: "01:00:00 GMT-0700 (PDT)" };
        const v73 = (1 * 60) + 30;
        const v76 = { offset: v73, date: "Sun Nov 06 2016", time: "01:30:00 GMT-0700 (PDT)" };
        const v79 = 2 * 60;
        const v82 = { offset: v79, date: "Sun Nov 06 2016", time: "01:00:00 GMT-0800 (PST)" };
        const v87 = (2 * 60) + 30;
        const v90 = { offset: v87, date: "Sun Nov 06 2016", time: "01:30:00 GMT-0800 (PST)" };
        const v93 = 3 * 60;
        const v96 = { offset: v93, date: "Sun Nov 06 2016", time: "02:00:00 GMT-0800 (PST)" };
        const v101 = (3 * 60) + 30;
        const v104 = { offset: v101, date: "Sun Nov 06 2016", time: "02:30:00 GMT-0800 (PST)" };
        const v107 = 4 * 60;
        const v110 = { offset: v107, date: "Sun Nov 06 2016", time: "03:00:00 GMT-0800 (PST)" };
        const v115 = (4 * 60) + 30;
        let tests = [v54,v62,v68,v76,v82,v90,v96,v104,v110,{ offset: v115, date: "Sun Nov 06 2016", time: "03:30:00 GMT-0800 (PST)" }];
        for (const v121 of tests) {
            let v122;
            try { v122 = midnight.getTime(); } catch (e) {}
            const v125 = v122 + (offset * msPerMinute);
            let v126;
            try { v126 = new Date(v125); } catch (e) {}
            let dt = v126;
        }
    }
    {
        const v132 = 0 * 60;
        const v135 = { offset: v132, date: "Sun Nov 06 2016", time: "00:00:00 GMT-0700 (PDT)" };
        const v140 = (0 * 60) + 30;
        const v143 = { offset: v140, date: "Sun Nov 06 2016", time: "00:30:00 GMT-0700 (PDT)" };
        const v146 = 1 * 60;
        const v149 = { offset: v146, date: "Sun Nov 06 2016", time: "01:00:00 GMT-0700 (PDT)" };
        const v154 = (1 * 60) + 30;
        const v157 = { offset: v154, date: "Sun Nov 06 2016", time: "01:30:00 GMT-0700 (PDT)" };
        const v160 = 2 * 60;
        const v163 = { offset: v160, date: "Sun Nov 06 2016", time: "02:00:00 GMT-0800 (PST)" };
        const v168 = (2 * 60) + 30;
        const v171 = { offset: v168, date: "Sun Nov 06 2016", time: "02:30:00 GMT-0800 (PST)" };
        const v174 = 3 * 60;
        const v177 = { offset: v174, date: "Sun Nov 06 2016", time: "03:00:00 GMT-0800 (PST)" };
        const v182 = (3 * 60) + 30;
        const v185 = { offset: v182, date: "Sun Nov 06 2016", time: "03:30:00 GMT-0800 (PST)" };
        const v188 = 4 * 60;
        const v191 = { offset: v188, date: "Sun Nov 06 2016", time: "04:00:00 GMT-0800 (PST)" };
        const v196 = (4 * 60) + 30;
        let tests = [v135,v143,v149,v157,v163,v171,v177,v185,v191,{ offset: v196, date: "Sun Nov 06 2016", time: "04:30:00 GMT-0800 (PST)" }];
        for (const v202 of tests) {
            const v206 = Month?.November;
            const v212 = (offset / 60) | 0;
            const v214 = offset % 60;
            let v217;
            try { v217 = new Date(2016, v206, 6, v212, v214, 0, 0); } catch (e) {}
            let dt = v217;
        }
    }
    {
        const v224 = Month?.March;
        let v230;
        try { v230 = new Date(2016, v224, 13, 0, 0, 0, 0); } catch (e) {}
        let midnight = v230;
        const v233 = Month?.March;
        let v239;
        try { v239 = Date.UTC(2016, v233, 13, 0, 0, 0, 0); } catch (e) {}
        let midnightUTC = v239;
        let v241;
        try { v241 = midnight.getTime(); } catch (e) {}
        midnightUTC - v241;
        -8 * msPerHour;
        const v249 = 0 * 60;
        const v252 = { offset: v249, date: "Sun Mar 13 2016", time: "00:00:00 GMT-0800 (PST)" };
        const v257 = (0 * 60) + 30;
        const v260 = { offset: v257, date: "Sun Mar 13 2016", time: "00:30:00 GMT-0800 (PST)" };
        const v263 = 1 * 60;
        const v266 = { offset: v263, date: "Sun Mar 13 2016", time: "01:00:00 GMT-0800 (PST)" };
        const v271 = (1 * 60) + 30;
        const v274 = { offset: v271, date: "Sun Mar 13 2016", time: "01:30:00 GMT-0800 (PST)" };
        const v277 = 2 * 60;
        const v280 = { offset: v277, date: "Sun Mar 13 2016", time: "03:00:00 GMT-0700 (PDT)" };
        const v285 = (2 * 60) + 30;
        const v288 = { offset: v285, date: "Sun Mar 13 2016", time: "03:30:00 GMT-0700 (PDT)" };
        const v291 = 3 * 60;
        const v294 = { offset: v291, date: "Sun Mar 13 2016", time: "04:00:00 GMT-0700 (PDT)" };
        const v299 = (3 * 60) + 30;
        const v302 = { offset: v299, date: "Sun Mar 13 2016", time: "04:30:00 GMT-0700 (PDT)" };
        const v305 = 4 * 60;
        const v308 = { offset: v305, date: "Sun Mar 13 2016", time: "05:00:00 GMT-0700 (PDT)" };
        const v313 = (4 * 60) + 30;
        let tests = [v252,v260,v266,v274,v280,v288,v294,v302,v308,{ offset: v313, date: "Sun Mar 13 2016", time: "05:30:00 GMT-0700 (PDT)" }];
        for (const v319 of tests) {
            let v320;
            try { v320 = midnight.getTime(); } catch (e) {}
            const v323 = v320 + (offset * msPerMinute);
            let v324;
            try { v324 = new Date(v323); } catch (e) {}
            let dt = v324;
        }
    }
    {
        const v330 = 0 * 60;
        const v333 = { offset: v330, date: "Sun Mar 13 2016", time: "00:00:00 GMT-0800 (PST)" };
        const v338 = (0 * 60) + 30;
        const v341 = { offset: v338, date: "Sun Mar 13 2016", time: "00:30:00 GMT-0800 (PST)" };
        const v344 = 1 * 60;
        const v347 = { offset: v344, date: "Sun Mar 13 2016", time: "01:00:00 GMT-0800 (PST)" };
        const v352 = (1 * 60) + 30;
        const v355 = { offset: v352, date: "Sun Mar 13 2016", time: "01:30:00 GMT-0800 (PST)" };
        const v358 = 2 * 60;
        const v361 = { offset: v358, date: "Sun Mar 13 2016", time: "03:00:00 GMT-0700 (PDT)" };
        const v366 = (2 * 60) + 30;
        const v369 = { offset: v366, date: "Sun Mar 13 2016", time: "03:30:00 GMT-0700 (PDT)" };
        const v372 = 3 * 60;
        const v375 = { offset: v372, date: "Sun Mar 13 2016", time: "03:00:00 GMT-0700 (PDT)" };
        const v380 = (3 * 60) + 30;
        const v383 = { offset: v380, date: "Sun Mar 13 2016", time: "03:30:00 GMT-0700 (PDT)" };
        const v386 = 4 * 60;
        const v389 = { offset: v386, date: "Sun Mar 13 2016", time: "04:00:00 GMT-0700 (PDT)" };
        const v394 = (4 * 60) + 30;
        let tests = [v333,v341,v347,v355,v361,v369,v375,v383,v389,{ offset: v394, date: "Sun Mar 13 2016", time: "04:30:00 GMT-0700 (PDT)" }];
        for (const v400 of tests) {
            const v404 = Month?.March;
            const v410 = (offset / 60) | 0;
            const v412 = offset % 60;
            let v415;
            try { v415 = new Date(2016, v404, 13, v410, v412, 0, 0); } catch (e) {}
            let dt = v415;
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e425) {
}
