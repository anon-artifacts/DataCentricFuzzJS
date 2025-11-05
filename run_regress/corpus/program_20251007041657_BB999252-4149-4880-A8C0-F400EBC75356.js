function getNewMapWith12345() {
    const v2 = new Map();
    var map = v2;
    map.set(1, 6);
    map.set(2, 7);
    map.set(3, 8);
    map.set(4, 9);
    map.set(5, 10);
    return map;
}
var globalObject = this;
function t1() {
    try {
        Map.call(undefined);
    } catch(e25) {
    }
    try {
        Map.call(null);
    } catch(e29) {
    }
    try {
        Map.call(Map.prototype);
    } catch(e33) {
    }
}
t1();
function t2() {
    const v37 = new Map();
    var map = v37;
    try {
        Map.call(map);
    } catch(e40) {
    }
}
t2();
function t3() {
    const v54 = new Map([["a",1],["b",2],["c",3]]);
    var m = v54;
    console.log(3, m.size);
    console.log(1, m.get("a"));
    console.log(2, m.get("b"));
    console.log(3, m.get("c"));
    function f72() {
        var i = 1;
        function f75() {
            const v77 = i > 8;
            const v80 = [i++,i++];
            return { done: v77, value: v80 };
        }
        return { next: f75 };
    }
    const v84 = Symbol.iterator;
    var customIterable = { [v84]: f72 };
    const v87 = new Map(customIterable);
    console.log(4, (m = v87).size);
    console.log(2, m.get(1));
    console.log(4, m.get(3));
    console.log(6, m.get(5));
    console.log(8, m.get(7));
}
t3();
function t4() {
    const v111 = Symbol.iterator;
    var iterableNoIteratorMethod = { [v111]: 123 };
    function f114() {
    }
    const v115 = Symbol.iterator;
    var iterableBadIteratorMethod = { [v115]: f114 };
    function f118() {
        return {};
    }
    const v120 = Symbol.iterator;
    var iterableNoIteratorNextMethod = { [v120]: f118 };
    function f123() {
        return { next: 123 };
    }
    const v126 = Symbol.iterator;
    var iterableBadIteratorNextMethod = { [v126]: f123 };
    function f129() {
        function f130() {
        }
        return { next: f130 };
    }
    const v132 = Symbol.iterator;
    var iterableNoIteratorResultObject = { [v132]: f129 };
    try {
        new Map(123);
    } catch(e138) {
    }
    try {
        new Map({});
    } catch(e142) {
    }
    try {
        new Map(iterableNoIteratorMethod);
    } catch(e145) {
    }
    try {
        new Map(iterableBadIteratorMethod);
    } catch(e148) {
    }
    try {
        new Map(iterableNoIteratorNextMethod);
    } catch(e151) {
    }
    try {
        new Map(iterableBadIteratorNextMethod);
    } catch(e154) {
    }
    try {
        new Map(iterableNoIteratorResultObject);
    } catch(e157) {
    }
}
t4();
function t5() {
    function MyMapImposter() {
    }
    const v162 = new Map();
    MyMapImposter.prototype = v162;
    const t120 = MyMapImposter.prototype;
    t120.constructor = MyMapImposter;
    const v164 = new MyMapImposter();
    var o = v164;
    try {
        o.clear();
    } catch(e167) {
    }
    try {
        o.delete(1);
    } catch(e170) {
    }
    try {
        function f171(a172, a173, a174) {
        }
        o.forEach(f171);
    } catch(e176) {
    }
    try {
        o.get(1);
    } catch(e179) {
    }
    try {
        o.has(1);
    } catch(e182) {
    }
    try {
        o.set(1, 1);
    } catch(e186) {
    }
    try {
        WScript.Echo(o.size);
    } catch(e190) {
    }
    try {
        Map.prototype.clear.call();
    } catch(e194) {
    }
    try {
        Map.prototype.delete.call();
    } catch(e198) {
    }
    try {
        Map.prototype.forEach.call();
    } catch(e202) {
    }
    try {
        Map.prototype.get.call();
    } catch(e206) {
    }
    try {
        Map.prototype.has.call();
    } catch(e210) {
    }
    try {
        Map.prototype.set.call();
    } catch(e214) {
    }
    try {
        Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call();
    } catch(e221) {
    }
    try {
        Map.prototype.clear.call(null);
    } catch(e226) {
    }
    try {
        Map.prototype.delete.call(null, 1);
    } catch(e232) {
    }
    try {
        function f234(a235, a236, a237) {
        }
        Map.prototype.forEach.call(null, f234);
    } catch(e241) {
    }
    try {
        Map.prototype.get.call(null, 1);
    } catch(e247) {
    }
    try {
        Map.prototype.has.call(null, 1);
    } catch(e253) {
    }
    try {
        Map.prototype.set.call(null, 1, 1);
    } catch(e260) {
    }
    try {
        Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call(null);
    } catch(e268) {
    }
    try {
        Map.prototype.clear.call(undefined);
    } catch(e273) {
    }
    try {
        Map.prototype.delete.call(undefined, 1);
    } catch(e279) {
    }
    try {
        function f281(a282, a283, a284) {
        }
        Map.prototype.forEach.call(undefined, f281);
    } catch(e288) {
    }
    try {
        Map.prototype.get.call(undefined, 1);
    } catch(e294) {
    }
    try {
        Map.prototype.has.call(undefined, 1);
    } catch(e300) {
    }
    try {
        Map.prototype.set.call(undefined, 1, 1);
    } catch(e307) {
    }
    try {
        Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call(undefined);
    } catch(e315) {
    }
    const v316 = new Map();
    var map = v316;
    try {
        map.forEach(null);
    } catch(e320) {
    }
    try {
        map.forEach(undefined);
    } catch(e323) {
    }
    try {
        map.forEach(true);
    } catch(e326) {
    }
    try {
        map.forEach(10);
    } catch(e329) {
    }
    try {
        map.forEach("hello");
    } catch(e332) {
    }
}
t5();
function t6() {
    const v336 = new Map();
    var map = v336;
    console.log(map.size === 0);
    map.set(1, null);
    map.set(2, null);
    map.set("Hello", null);
    var o = {};
    map.set(o, null);
    console.log(map.has(1));
    console.log(map.has(2));
    console.log(map.has("Hello"));
    console.log(map.has(o));
    console.log(map.get(1) === null);
    console.log(map.get(2) === null);
    console.log(map.get("Hello") === null);
    console.log(map.get(o) === null);
    console.log(map.size === 4);
    console.log(map.has(0));
    console.log(map.has("goodbye"));
    console.log(map.has(map));
    console.log(map.get(0) === undefined);
    console.log(map.get("goodbye") === undefined);
    console.log(map.get(map) === undefined);
    map.clear();
    console.log(map.size === 0);
    console.log(map.has(1));
    console.log(map.has(2));
    console.log(map.has("Hello"));
    console.log(map.has(o));
    map.set(1, null);
    map.set(2, null);
    map.set("Hello", null);
    map.set(o, null);
    console.log(map.has(1));
    console.log(map.has(2));
    console.log(map.has("Hello"));
    console.log(map.has(o));
    console.log(map.size === 4);
    map.delete(2);
    console.log(map.has(1));
    console.log(map.has(2));
    console.log(map.has("Hello"));
    console.log(map.has(o));
    console.log(map.size === 3);
    map.delete(o);
    map.delete("Hello");
    console.log(map.has(1));
    console.log(map.has(2));
    console.log(map.has("Hello"));
    console.log(map.has(o));
    console.log(map.size === 1);
    map.delete(1);
    console.log(map.has(1));
    console.log(map.size === 0);
    var p = {};
    map.set(1, 10);
    map.set(2, 20);
    map.set("Hello", "World");
    map.set(o, p);
    console.log(map.get(1) === 10);
    console.log(map.get(2) === 20);
    console.log(map.get("Hello") === "World");
    console.log(map.get(o) === p);
    map.set(1, p);
    map.set(2, "World");
    map.set("Hello", 10);
    map.set(o, 20);
    console.log(map.get(1) === p);
    console.log(map.get(2) === "World");
    console.log(map.get("Hello") === 10);
    console.log(map.get(o) === 20);
}
t6();
function t7() {
    const v559 = new Map();
    var map = v559;
    console.log(map.has());
    console.log(map.get() === undefined);
    console.log(map.delete());
    map.set();
    console.log(map.has());
    console.log(map.get() === undefined);
    console.log(map.delete());
    console.log(map.has());
    map.set(undefined);
    console.log(map.get() === undefined);
    map.delete();
    map.set(undefined, 10);
    console.log(map.get() === 10);
}
t7();
function t8() {
    const v598 = new Map();
    var map = v598;
    console.log(map.has(1, 2, 3));
    console.log(map.get(1, 2, 3) === undefined);
    console.log(map.delete(1, 2, 3));
    map.set(1, 2, 3, 4);
    console.log(map.has(1));
    console.log(map.has(2));
    console.log(map.has(3));
    console.log(map.has(1, 2, 3));
    console.log(map.has(2, 1, 3));
    console.log(map.get(1) === 2);
    console.log(map.get(2) === undefined);
    console.log(map.get(3) === undefined);
    console.log(map.get(1, 3, 4) === 2);
    console.log(map.get(2, 1, 3) === undefined);
    console.log(map.delete(2, 1, 3));
    console.log(map.delete(3, 1));
    console.log(map.delete(1, 2, 3));
}
t8();
function t9() {
    const v688 = new Map();
    var map = v688;
    map.set(1);
    console.log(map.delete(2));
    console.log(map.delete(1));
    console.log(map.delete(1));
}
t9();
function t10() {
    const v705 = new Map();
    var map = v705;
    map.set(1);
    map.set(1);
    map.set(2);
    map.delete(1);
    map.set(2);
    map.set(1);
    map.set(1);
    map.clear();
    map.set(1, 3);
    console.log(map.get(1) === 3);
    map.set(1, 4);
    console.log(map.get(1) === 4);
    map.set(2, 5);
    console.log(map.get(1) === 4);
    console.log(map.get(2) === 5);
    map.delete(1);
    console.log(map.get(1) === undefined);
    console.log(map.get(2) === 5);
    map.set(2, 6);
    console.log(map.get(2) === 6);
}
t10();
function t11() {
    const v775 = new Map();
    var map = v775;
    console.log(map, map.set(1, 2));
    console.log(map, map.set(1, 2));
    console.log(undefined, map.clear());
}
t11();
function t12() {
    const v792 = new Map();
    var map = v792;
    map.set(3.14159);
    map.set("hello");
    map.set(8589934592);
    console.log(map.has(3.14159));
    console.log(map.has(3 + 0.14159));
    console.log(map.has("hello"));
    console.log(map.has("hel" + "lo"));
    console.log(map.has(8589934592));
    console.log(map.has(65536 + 8589869056));
    map.set(-0, 5);
    console.log(map.has(-0));
    console.log(map.has(+0));
    console.log(5, map.get(-0));
    console.log(5, map.get(+0));
    map.set(0, 10);
    console.log(map.has(-0));
    console.log(map.has(+0));
    console.log(10, map.get(-0));
    console.log(10, map.get(+0));
    map.delete(-0);
    console.log(map.has(-0));
    console.log(map.has(+0));
    map.set(+0, 5);
    console.log(map.has(-0));
    console.log(map.has(+0));
    console.log(5, map.get(-0));
    console.log(5, map.get(+0));
    map.set(-0, 10);
    console.log(map.has(-0));
    console.log(map.has(+0));
    console.log(10, map.get(-0));
    console.log(10, map.get(+0));
    map.delete(0);
    console.log(map.has(-0));
    console.log(map.has(+0));
    map.set(Number.NEGATIVE_INFINITY);
    console.log(map.has(Number.NEGATIVE_INFINITY));
    console.log(map.has(Number.POSITIVE_INFINITY));
    map.set(Infinity);
    console.log(map.has(Number.NEGATIVE_INFINITY));
    console.log(map.has(Number.POSITIVE_INFINITY));
    map.delete(Number.NEGATIVE_INFINITY);
    console.log(map.has(Number.NEGATIVE_INFINITY));
    console.log(map.has(Number.POSITIVE_INFINITY));
    console.log(map.has(NaN));
    map.set(NaN);
    console.log(map.has(NaN));
    console.log(map.has(parseInt("blah")));
    console.log(map.has(Math.sqrt(-1)));
    console.log(map.has(0 * Infinity));
}
t12();
function t13() {
    const v982 = new Map();
    var map = v982;
    map.set(1);
    function f986(a987, a988, a989) {
        console.log(this === globalObject);
    }
    map.forEach(f986);
    var o = {};
    function f997(a998, a999, a1000) {
        console.log(this === o);
    }
    map.forEach(f997, o);
    function f1006(a1007, a1008, a1009) {
        console.log(this.valueOf() === 10);
    }
    map.forEach(f1006, 10);
}
t13();
function t14() {
    var i = 0;
    var map = getNewMapWith12345();
    var didExecute = false;
    function f1026(a1027, a1028, a1029) {
        i += 1;
        console.log(a1028 == i);
        console.log(a1027 == (i + 5));
        didExecute = true;
    }
    map.forEach(f1026);
    console.log(didExecute);
    i = 0;
    didExecute = false;
    function f1044(a1045, a1046, a1047) {
        i += 1;
        console.log(a1046 == i);
        console.log(a1045 == (i + 5));
        didExecute = true;
    }
    map.forEach(f1044);
    console.log(didExecute);
    map.clear();
    function f1059(a1060, a1061, a1062) {
        assert.fail("Shouldn't execute; map should be empty");
    }
    map.forEach(f1059);
    const v1068 = new Map();
    map = v1068;
    function f1069(a1070, a1071, a1072) {
        assert.fail("Shouldn't execute; map should be empty");
    }
    map.forEach(f1069);
}
t14();
function t15() {
    var i = 0;
    var map = getNewMapWith12345();
    var didExecute = false;
    function f1085(a1086, a1087, a1088) {
        a1088.delete(a1087);
        i += 1;
        console.log(a1087 == i);
        console.log(a1086 == (i + 5));
        didExecute = true;
    }
    map.forEach(f1085);
    console.log(didExecute);
    function f1102(a1103, a1104, a1105) {
        assert.fail("Shouldn't execute; map should be empty");
    }
    map.forEach(f1102);
    i = 0;
    map = getNewMapWith12345();
    didExecute = false;
    function f1113(a1114, a1115, a1116) {
        if (a1115 >= 3) {
            a1116.delete(a1115 - 2);
        }
        i += 1;
        console.log(a1115 == i);
        console.log(a1114 == (i + 5));
        didExecute = true;
    }
    map.forEach(f1113);
    console.log(didExecute);
    i = 3;
    didExecute = false;
    function f1134(a1135, a1136, a1137) {
        i += 1;
        console.log(a1136 == i);
        console.log(a1135 == (i + 5));
        didExecute = true;
    }
    map.forEach(f1134);
    console.log(didExecute);
}
t15();
function t16() {
    var i = 1;
    var map = getNewMapWith12345();
    var didExecute = false;
    function f1156(a1157, a1158, a1159) {
        console.log(a1158 == i);
        console.log(a1157 == (i + 5));
        a1159.delete(a1158 + 1);
        i += 2;
        didExecute = true;
    }
    map.forEach(f1156);
    console.log(didExecute);
    didExecute = false;
    function f1176(a1177, a1178, a1179) {
        console.log(a1178 == 1);
        console.log(a1177 == 6);
        a1179.delete(3);
        a1179.delete(5);
        didExecute = true;
    }
    map.forEach(f1176);
    console.log(didExecute);
    didExecute = false;
    function f1194(a1195, a1196, a1197) {
        console.log(a1196 == 1);
        console.log(a1195 == 6);
        a1197.delete(1);
        didExecute = true;
    }
    map.forEach(f1194);
    console.log(didExecute);
    function f1209(a1210, a1211, a1212) {
        assert.fail("Shouldn't execute, map should be empty");
    }
    map.forEach(f1209);
    map = getNewMapWith12345();
    i = 0;
    didExecute = false;
    function f1220(a1221, a1222, a1223) {
        a1223.delete(6 - a1222);
        i += 1;
        console.log((a1222 == i) && (a1222 <= 3));
        console.log((a1221 == (i + 5)) && (a1221 <= 8));
        didExecute = true;
    }
    map.forEach(f1220);
    console.log(didExecute);
    i = 0;
    didExecute = false;
    function f1245(a1246, a1247, a1248) {
        i += 1;
        console.log((a1247 == i) && (a1247 <= 2));
        console.log((a1246 == (i + 5)) && (a1246 <= 7));
        didExecute = true;
    }
    map.forEach(f1245);
    console.log(didExecute);
}
t16();
function t17() {
    var i = 0;
    const v1270 = new Map();
    var map = v1270;
    map.set(1, 21);
    function f1275(a1276, a1277, a1278) {
        i += 1;
        console.log(a1277 == i);
        console.log(a1276 == (i + 20));
        if (a1277 < 20) {
            a1278.set(a1277 + 1, a1276 + 1);
        }
    }
    map.forEach(f1275);
    console.log(i == 20);
    i = 0;
    function f1300(a1301, a1302, a1303) {
        i += 1;
        console.log(a1302 == i);
        if (a1302 < 20) {
            a1303.set(a1302 + 1, i);
        }
    }
    map.forEach(f1300);
    console.log(i == 20);
}
t17();
function t18() {
    var i = 0;
    var map = getNewMapWith12345();
    function f1322(a1323, a1324, a1325) {
        i += 1;
        console.log(a1324 == i);
        if (a1324 == 1) {
            a1325.clear();
        }
    }
    map.forEach(f1322);
    console.log(i == 1);
    i = 0;
    map = getNewMapWith12345();
    function f1340(a1341, a1342, a1343) {
        i += 1;
        console.log(a1342 == i);
        if (a1342 == 2) {
            a1343.clear();
        }
    }
    map.forEach(f1340);
    console.log(i == 2);
    i = 0;
    map = getNewMapWith12345();
    function f1356(a1357, a1358, a1359) {
        i += 1;
        console.log(a1358 == i);
        if (a1358 == 3) {
            a1359.clear();
        }
    }
    map.forEach(f1356);
    console.log(i == 3);
    i = 0;
    map = getNewMapWith12345();
    function f1372(a1373, a1374, a1375) {
        i += 1;
        console.log(a1374 == i);
        if (a1374 == 4) {
            a1375.clear();
        }
    }
    map.forEach(f1372);
    console.log(i == 4);
    i = 0;
    map = getNewMapWith12345();
    function f1388(a1389, a1390, a1391) {
        i += 1;
        console.log(a1390 == i);
        if (a1390 == 5) {
            a1391.clear();
        }
    }
    map.forEach(f1388);
    console.log(i == 5);
    console.log(map.size == 0);
}
t18();
function t19() {
    var i = 0;
    var didExecute = false;
    var map = getNewMapWith12345();
    function f1414(a1415, a1416, a1417) {
        if (a1416 == 3) {
            a1417.delete(2);
            a1417.delete(1);
            a1417.set(1);
            a1417.set(2);
        }
        i += 1;
        console.log(a1416 == i);
        if (a1416 == 5) {
            i = 0;
        }
        didExecute = true;
    }
    map.forEach(f1414);
    console.log(didExecute);
    i = 2;
    didExecute = false;
    function f1441(a1442, a1443, a1444) {
        i += 1;
        console.log(a1443 == i);
        if (a1443 == 5) {
            i = 0;
        }
        didExecute = true;
    }
    map.forEach(f1441);
    console.log(didExecute);
}
t19();
function t20() {
    const v1457 = new Map();
    var map = v1457;
    map.set(1, 0);
    map.set(2, 1);
    var keys = [1,2,1,2,1,2,1,2,1,2];
    var i = 0;
    function f1479(a1480, a1481, a1482) {
        if (i < 9) {
            if (a1481 == 1) {
                a1482.delete(1);
                a1482.set(2, i + 1);
            } else {
                if (a1481 == 2) {
                    a1482.delete(2);
                    a1482.set(1, i + 1);
                }
            }
        }
        console.log(a1481 == keys[i]);
        console.log(a1480 == i);
        i += 1;
    }
    map.forEach(f1479);
    console.log(i == 10);
}
t20();
function t21() {
    const v1516 = new Map();
    var map = v1516;
    map.set(-0);
    function f1521(a1522, a1523, a1524) {
        console.log((+Infinity === (1 / a1523)) && (a1523 === 0));
    }
    map.forEach(f1521);
}
t21();
function t22() {
    const v1539 = new Map();
    var map = v1539;
    map.set(1, "test");
    console.log("test", map.get(1));
    var key = 1.1;
    console.log("test", map.get(key -= 0.1));
}
t22();
