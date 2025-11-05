try {
    function f0() {
    }
    function write(a2) {
        try { f0(a2); } catch (e) {}
    }
    try { write("Test case 1"); } catch (e) {}
    for (let i7 = 0; i7 < 10; i7++) {
        const v16 = 43.35 + (i7 * 5.3);
        const t9 = Array?.prototype;
        t9[i7] = v16;
    }
    var arr = [32,4.5,6.3];
    let v26;
    try { v26 = arr.splice(0, 5); } catch (e) {}
    var newarr = v26;
    try { write(arr); } catch (e) {}
    const v29 = arr?.length;
    try { write(v29); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v32 = newarr?.length;
    try { write(v32); } catch (e) {}
    for (let i35 = 0; i35 < 10; i35++) {
        const t23 = Array?.prototype;
        delete t23?.[i35];
    }
    try { write(""); } catch (e) {}
    try { write("Test case 2"); } catch (e) {}
    for (let i49 = 0; i49 < 10; i49++) {
        const v58 = 32 + (i49 * 5);
        const t30 = Array?.prototype;
        t30[i49] = v58;
    }
    var arr = [43,54,32];
    let v68;
    try { v68 = arr.splice(0, 5); } catch (e) {}
    var newarr = v68;
    try { write(arr); } catch (e) {}
    const v71 = arr?.length;
    try { write(v71); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v74 = newarr?.length;
    try { write(v74); } catch (e) {}
    for (let i77 = 0; i77 < 10; i77++) {
        const t44 = Array?.prototype;
        delete t44?.[i77];
    }
    try { write(""); } catch (e) {}
    try { write("Test case 3"); } catch (e) {}
    for (let i91 = 0; i91 < 10; i91++) {
        i91++;
        const v99 = 3343.232 * i91;
        const t52 = Array?.prototype;
        t52[i91] = v99;
    }
    var arr = [23.5,32.4];
    let v110;
    try { v110 = arr.splice(0, 8, 5.43, 23.4); } catch (e) {}
    var newarr = v110;
    try { write(arr); } catch (e) {}
    const v113 = arr?.length;
    try { write(v113); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v116 = newarr?.length;
    try { write(v116); } catch (e) {}
    for (let i119 = 0; i119 < 10; i119++) {
        const t66 = Array?.prototype;
        delete t66?.[i119];
    }
    try { write(""); } catch (e) {}
    try { write("Test case 4"); } catch (e) {}
    for (let i133 = 0; i133 < 10; i133++) {
        const v141 = 324 * i;
        const t73 = Array?.prototype;
        t73[i133] = v141;
    }
    let v146;
    try { v146 = new Array(10); } catch (e) {}
    var arr = v146;
    let v150;
    try { v150 = arr.splice(3, 5); } catch (e) {}
    var newarr = v150;
    try { write(arr); } catch (e) {}
    const v153 = arr?.length;
    try { write(v153); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v156 = newarr?.length;
    try { write(v156); } catch (e) {}
    for (let i159 = 0; i159 < 10; i159++) {
        const t89 = Array?.prototype;
        delete t89?.[i159];
    }
    try { write(""); } catch (e) {}
    try { write("Test case 5"); } catch (e) {}
    for (let i172 = 0; i172 < 10; i172++) {
        const v179 = "P" + i172;
        const t96 = Array?.prototype;
        t96[i172] = v179;
    }
    let v182;
    try { v182 = new Array(10); } catch (e) {}
    var arr = v182;
    let v189;
    try { v189 = arr.splice(3, 5, "d1", "d2", "d3"); } catch (e) {}
    var newarr = v189;
    try { write(arr); } catch (e) {}
    const v192 = arr?.length;
    try { write(v192); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v195 = newarr?.length;
    try { write(v195); } catch (e) {}
    for (let i198 = 0; i198 < 10; i198++) {
        const t112 = Array?.prototype;
        delete t112?.[i198];
    }
    try { write(""); } catch (e) {}
    try { write("Test case 6"); } catch (e) {}
    for (let i211 = 0; i211 < 10; i211++) {
        const v218 = i211 + 23.4;
        const t119 = Array?.prototype;
        t119[i211] = v218;
    }
    var arr = [23.4,34];
    let v226;
    try { v226 = arr.splice(6, 4); } catch (e) {}
    var newarr = v226;
    try { write(arr); } catch (e) {}
    const v229 = arr?.length;
    try { write(v229); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v232 = newarr?.length;
    try { write(v232); } catch (e) {}
    for (let i235 = 0; i235 < 10; i235++) {
        const t133 = Array?.prototype;
        delete t133?.[i235];
    }
    try { write(""); } catch (e) {}
    try { write("Test case 7"); } catch (e) {}
    const v248 = Array?.prototype?.shift;
    const t139 = Object?.prototype;
    t139.shift = v248;
    let v251;
    try { v251 = new Object(); } catch (e) {}
    var obj = v251;
    obj.length = 10;
    obj[0] = 101;
    obj[1] = "string";
    obj[9] = "lastelement";
    let v257;
    try { v257 = obj.shift(); } catch (e) {}
    var res = v257;
    for (const v259 in obj) {
        const v265 = (("expando:" + v259) + "=") + obj?.[v259];
        try { write(v265); } catch (e) {}
    }
    const t155 = Object?.prototype;
    delete t155?.shift;
    try { write(""); } catch (e) {}
    try { write("Test case 8"); } catch (e) {}
    const t159 = Object?.prototype;
    t159[0] = 32;
    const t161 = Array?.prototype;
    t161[9] = 232;
    let v278;
    try { v278 = new Array(10); } catch (e) {}
    var arr = v278;
    arr[1] = 123;
    let v281;
    try { v281 = arr.shift(); } catch (e) {}
    var res = v281;
    try { write(res); } catch (e) {}
    const v284 = res?.length;
    try { write(v284); } catch (e) {}
    try { write(arr); } catch (e) {}
    const v287 = arr?.length;
    try { write(v287); } catch (e) {}
    const t176 = Object?.prototype;
    delete t176?.[0];
    const t177 = Array?.prototype;
    delete t177?.[9];
    try { write(""); } catch (e) {}
    try { write("Test case 9"); } catch (e) {}
    let v300;
    try { v300 = new Array(2147483649); } catch (e) {}
    var arr1 = v300;
    arr1[2147483647] = 100.32;
    let v305;
    try { v305 = arr1.slice(2147483640, 2147483648); } catch (e) {}
    var newarr = v305;
    try { write(newarr); } catch (e) {}
    const v308 = newarr?.length;
    try { write(v308); } catch (e) {}
    const v310 = arr1?.length;
    try { write(v310); } catch (e) {}
    try { write(""); } catch (e) {}
    try { write("Test case 10"); } catch (e) {}
    for (let i317 = 0; i317 < 20; i317 = i317 + 3) {
        const v325 = "O" + i317;
        const t198 = Object?.prototype;
        t198[i317] = v325;
    }
    for (let i328 = 1; i328 < 20; i328 = i328 + 3) {
        const v338 = (23 * i328) * 0.5;
        const t203 = Array?.prototype;
        t203[i328] = v338;
    }
    var arr = [];
    for (let i343 = 1; i343 < 20; i343 = i343 + 3) {
        arr[i343] = i343 + 0.5;
    }
    try { arr.shift(); } catch (e) {}
    try { write(arr); } catch (e) {}
    const v354 = arr?.length;
    try { write(v354); } catch (e) {}
    try { arr.unshift(10); } catch (e) {}
    try { write(arr); } catch (e) {}
    const v359 = arr?.length;
    try { write(v359); } catch (e) {}
    let v365;
    try { v365 = arr.splice(5, 2, "a", "b"); } catch (e) {}
    var newarr = v365;
    try { write(arr); } catch (e) {}
    const v368 = arr?.length;
    try { write(v368); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v371 = newarr?.length;
    try { write(v371); } catch (e) {}
    let v377;
    try { v377 = arr.splice(7, 6, "a", "b"); } catch (e) {}
    newarr = v377;
    try { write(arr); } catch (e) {}
    const v379 = arr?.length;
    try { write(v379); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v382 = newarr?.length;
    try { write(v382); } catch (e) {}
    let v391;
    try { v391 = arr.splice(10, 2, "a", "b", "c", "e", "f"); } catch (e) {}
    newarr = v391;
    try { write(arr); } catch (e) {}
    const v393 = arr?.length;
    try { write(v393); } catch (e) {}
    try { write(newarr); } catch (e) {}
    const v396 = newarr?.length;
    try { write(v396); } catch (e) {}
    try { write(""); } catch (e) {}
    try { write("Test case 11"); } catch (e) {}
    const t247 = Object?.prototype;
    t247[2] = 10;
    let v405;
    try { v405 = new Array(5); } catch (e) {}
    var arr = v405;
    try { write(arr); } catch (e) {}
    const v408 = arr?.length;
    try { write(v408); } catch (e) {}
    try { arr.shift(); } catch (e) {}
    try { write(arr); } catch (e) {}
    const v412 = arr?.length;
    try { write(v412); } catch (e) {}
    try { arr.unshift("10", "20"); } catch (e) {}
    try { arr.shift(); } catch (e) {}
    try { write(arr); } catch (e) {}
    try { arr.shift(); } catch (e) {}
    try { write(arr); } catch (e) {}
    try { arr.unshift(10, 40); } catch (e) {}
    try { write(arr); } catch (e) {}
    try { arr.unshift(50); } catch (e) {}
    try { write(arr); } catch (e) {}
    try { arr.shift(50); } catch (e) {}
    try { write(arr); } catch (e) {}
    let v432;
    try { v432 = new Array(5); } catch (e) {}
    var arr = v432;
    try { write(arr); } catch (e) {}
    const v435 = arr?.length;
    try { write(v435); } catch (e) {}
    try { arr.reverse(); } catch (e) {}
    try { write(arr); } catch (e) {}
    const v439 = arr?.length;
    try { write(v439); } catch (e) {}
    let v442;
    try { v442 = new Array(5); } catch (e) {}
    var arr = v442;
    arr[2] = 2;
    arr[3] = 3;
    arr[4] = 4;
    try { write(arr); } catch (e) {}
    const v448 = arr?.length;
    try { write(v448); } catch (e) {}
    try { arr.reverse(); } catch (e) {}
    try { write(arr); } catch (e) {}
    const v452 = arr?.length;
    try { write(v452); } catch (e) {}
    var a = [1,2,3];
    var b = [];
    b.length = 3;
    let v462;
    try { v462 = a.concat(b); } catch (e) {}
    try { write(v462); } catch (e) {}
} catch(e464) {
}
