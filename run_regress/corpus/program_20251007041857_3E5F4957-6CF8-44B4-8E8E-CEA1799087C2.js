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
function getNewSetWith12345() {
    const v21 = new Set();
    var set = v21;
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);
    return set;
}
function t1() {
    var iteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(([])[Symbol.iterator]()));
    console.log(iteratorPrototype.hasOwnProperty(Symbol.iterator));
    console.log(0, iteratorPrototype[Symbol.iterator].length);
}
t1();
function t2() {
    var arrayIteratorPrototype = Object.getPrototypeOf(([])[Symbol.iterator]());
    const v61 = new Map();
    var mapIteratorPrototype = Object.getPrototypeOf(v61[Symbol.iterator]());
    const v67 = new Set();
    var setIteratorPrototype = Object.getPrototypeOf(v67[Symbol.iterator]());
    var stringIteratorPrototype = Object.getPrototypeOf(("")[Symbol.iterator]());
    var iteratorPrototype = Object.getPrototypeOf(arrayIteratorPrototype);
    console.log(iteratorPrototype, Object.getPrototypeOf(mapIteratorPrototype));
    console.log(iteratorPrototype, Object.getPrototypeOf(setIteratorPrototype));
    console.log(iteratorPrototype, Object.getPrototypeOf(stringIteratorPrototype));
}
t2();
function t3() {
    console.log(Array.prototype.hasOwnProperty("entries"));
    console.log(Array.prototype.hasOwnProperty("keys"));
    console.log(Array.prototype.hasOwnProperty("values"));
    const v103 = Symbol.iterator;
    console.log(Array.prototype.hasOwnProperty(v103));
    console.log(0, Array.prototype.entries.length);
    console.log(0, Array.prototype.keys.length);
    try {
        console.log(0, Array.prototype.values.length);
    } catch(e122) {
    }
    console.log(Array.prototype.values === Array.prototype[Symbol.iterator]);
}
t3();
function t4() {
    console.log(Map.prototype.hasOwnProperty("entries"));
    console.log(Map.prototype.hasOwnProperty("keys"));
    console.log(Map.prototype.hasOwnProperty("values"));
    const v147 = Symbol.iterator;
    console.log(Map.prototype.hasOwnProperty(v147));
    console.log(0, Map.prototype.entries.length);
    console.log(0, Map.prototype.keys.length);
    console.log(0, Map.prototype.values.length);
    console.log(Map.prototype.entries === Map.prototype[Symbol.iterator]);
}
t4();
function t5() {
    console.log(Set.prototype.hasOwnProperty("entries"));
    console.log(Set.prototype.hasOwnProperty("keys"));
    console.log(Set.prototype.hasOwnProperty("values"));
    const v190 = Symbol.iterator;
    console.log(Set.prototype.hasOwnProperty(v190));
    console.log(0, Set.prototype.entries.length);
    console.log(0, Set.prototype.values.length);
    console.log(Set.prototype.values === Set.prototype.keys);
    console.log(Set.prototype.values === Set.prototype[Symbol.iterator]);
}
t5();
function t6() {
    const v220 = Symbol.iterator;
    console.log(String.prototype.hasOwnProperty(v220));
    console.log(String.prototype.hasOwnProperty("entries"));
    console.log(String.prototype.hasOwnProperty("keys"));
    console.log(String.prototype.hasOwnProperty("values"));
}
t6();
function t7() {
    try {
        Array.prototype.entries.call(null);
    } catch(e245) {
    }
    try {
        Array.prototype.entries.call(undefined);
    } catch(e251) {
    }
    try {
        Array.prototype.keys.call(null);
    } catch(e257) {
    }
    try {
        Array.prototype.keys.call(undefined);
    } catch(e263) {
    }
    try {
        Array.prototype.values.call(null);
    } catch(e269) {
    }
    try {
        Array.prototype.values.call(undefined);
    } catch(e275) {
    }
}
t7();
function t8() {
    try {
        Map.prototype.entries.call(null);
    } catch(e283) {
    }
    try {
        Map.prototype.entries.call(undefined);
    } catch(e289) {
    }
    try {
        Map.prototype.entries.call(123);
    } catch(e295) {
    }
    try {
        Map.prototype.entries.call("abc");
    } catch(e301) {
    }
    try {
        const v302 = {};
        Map.prototype.entries.call(v302);
    } catch(e307) {
    }
    try {
        const v309 = new Set();
        Map.prototype.entries.call(v309);
    } catch(e314) {
    }
    try {
        Map.prototype.keys.call(null);
    } catch(e320) {
    }
    try {
        Map.prototype.keys.call(undefined);
    } catch(e326) {
    }
    try {
        Map.prototype.keys.call(123);
    } catch(e332) {
    }
    try {
        Map.prototype.keys.call("abc");
    } catch(e338) {
    }
    try {
        const v339 = {};
        Map.prototype.keys.call(v339);
    } catch(e344) {
    }
    try {
        const v346 = new Set();
        Map.prototype.keys.call(v346);
    } catch(e351) {
    }
    try {
        Map.prototype.values.call(null);
    } catch(e357) {
    }
    try {
        Map.prototype.values.call(undefined);
    } catch(e363) {
    }
    try {
        Map.prototype.values.call(123);
    } catch(e369) {
    }
    try {
        Map.prototype.values.call("abc");
    } catch(e375) {
    }
    try {
        const v376 = {};
        Map.prototype.values.call(v376);
    } catch(e381) {
    }
    try {
        const v383 = new Set();
        Map.prototype.values.call(v383);
    } catch(e388) {
    }
}
t8();
function t9() {
    try {
        Set.prototype.entries.call(null);
    } catch(e396) {
    }
    try {
        Set.prototype.entries.call(undefined);
    } catch(e402) {
    }
    try {
        Set.prototype.entries.call(123);
    } catch(e408) {
    }
    try {
        Set.prototype.entries.call("abc");
    } catch(e414) {
    }
    try {
        const v415 = {};
        Set.prototype.entries.call(v415);
    } catch(e420) {
    }
    try {
        const v422 = new Map();
        Set.prototype.entries.call(v422);
    } catch(e427) {
    }
    try {
        Set.prototype.values.call(null);
    } catch(e433) {
    }
    try {
        Set.prototype.values.call(undefined);
    } catch(e439) {
    }
    try {
        Set.prototype.values.call(123);
    } catch(e445) {
    }
    try {
        Set.prototype.values.call("abc");
    } catch(e451) {
    }
    try {
        const v452 = {};
        Set.prototype.values.call(v452);
    } catch(e457) {
    }
    try {
        const v459 = new Map();
        Set.prototype.values.call(v459);
    } catch(e464) {
    }
}
t9();
function t10() {
    try {
        String.prototype[Symbol.iterator].call(null);
    } catch(e474) {
    }
    try {
        String.prototype[Symbol.iterator].call(undefined);
    } catch(e482) {
    }
}
t10();
function t11() {
    try {
        var aip = Object.getPrototypeOf(([]).values());
        console.log(aip.hasOwnProperty("next"));
        console.log(aip.hasOwnProperty(Symbol.iterator));
        console.log(aip.hasOwnProperty(Symbol.toStringTag));
        console.log(0, aip.next.length);
        console.log("Array Iterator", aip[Symbol.toStringTag]);
    } catch(e509) {
    }
    try {
        aip.next.call(123);
    } catch(e514) {
    }
    try {
        aip.next.call("o");
    } catch(e519) {
    }
    try {
        const v520 = {};
        aip.next.call(v520);
    } catch(e524) {
    }
}
t11();
function t12() {
    const v528 = new Map();
    var mip = Object.getPrototypeOf(v528.values());
    console.log(mip.hasOwnProperty("next"));
    console.log(mip.hasOwnProperty(Symbol.iterator));
    console.log(mip.hasOwnProperty(Symbol.toStringTag));
    console.log(0, mip.next.length);
    console.log("Map Iterator", mip[Symbol.toStringTag]);
    try {
        mip.next.call(123);
    } catch(e555) {
    }
    try {
        mip.next.call("o");
    } catch(e559) {
    }
    try {
        const v560 = {};
        mip.next.call(v560);
    } catch(e563) {
    }
}
t12();
function t13() {
    const v567 = new Set();
    var sip = Object.getPrototypeOf(v567.values());
    console.log(sip.hasOwnProperty("next"));
    console.log(sip.hasOwnProperty(Symbol.iterator));
    console.log(sip.hasOwnProperty(Symbol.toStringTag));
    console.log(0, sip.next.length);
    console.log("Set Iterator", sip[Symbol.toStringTag]);
    try {
        sip.next.call(123);
    } catch(e594) {
    }
    try {
        sip.next.call("o");
    } catch(e598) {
    }
    try {
        const v599 = {};
        sip.next.call(v599);
    } catch(e602) {
    }
}
t13();
function t14() {
    var sip = Object.getPrototypeOf(("")[Symbol.iterator]());
    console.log(sip.hasOwnProperty("next"));
    console.log(sip.hasOwnProperty(Symbol.iterator));
    console.log(sip.hasOwnProperty(Symbol.toStringTag));
    console.log(0, sip.next.length);
    console.log("String Iterator", sip[Symbol.toStringTag]);
    try {
        sip.next.call(123);
    } catch(e633) {
    }
    try {
        sip.next.call("o");
    } catch(e637) {
    }
    try {
        const v638 = {};
        sip.next.call(v638);
    } catch(e641) {
    }
}
t14();
function t15() {
    var array = ["a","b","c","d","e"];
    var iters = [array.entries(),array.entries(),array.keys(),array.keys(),array.values(),array.values()];
    for (let i660 = 0; i660 < iters.length; i660++) {
        for (let i668 = i660 + 1; i668 < iters.length; i668++) {
            console.log(iters[i660] !== iters[i668]);
        }
    }
    for (let i680 = 0; i680 < (iters.length - 1); i680++) {
        console.log(Object.getPrototypeOf(iters[i680]) === Object.getPrototypeOf(iters[i680 + 1]));
    }
}
t15();
function t16() {
    var map = getNewMapWith12345();
    var iters = [map.entries(),map.entries(),map.keys(),map.keys(),map.values(),map.values()];
    for (let i711 = 0; i711 < iters.length; i711++) {
        for (let i719 = i711 + 1; i719 < iters.length; i719++) {
            console.log(iters[i711] !== iters[i719]);
        }
    }
    for (let i731 = 0; i731 < (iters.length - 1); i731++) {
        console.log(Object.getPrototypeOf(iters[i731]) === Object.getPrototypeOf(iters[i731 + 1]));
    }
}
t16();
function t17() {
    const v752 = new Set();
    var set = v752;
    set.add("a");
    set.add("b");
    set.add("c");
    set.add("d");
    set.add("e");
    var iters = [set.entries(),set.entries(),set.values(),set.values()];
    for (let i771 = 0; i771 < iters.length; i771++) {
        for (let i779 = i771 + 1; i779 < iters.length; i779++) {
            console.log(iters[i771] !== iters[i779]);
        }
    }
    for (let i791 = 0; i791 < (iters.length - 1); i791++) {
        console.log(Object.getPrototypeOf(iters[i791]) === Object.getPrototypeOf(iters[i791 + 1]));
    }
}
t17();
function t18() {
    var string = "abcde";
    var iters = [string[Symbol.iterator](),string[Symbol.iterator]()];
    for (let i821 = 0; i821 < iters.length; i821++) {
        for (let i829 = i821 + 1; i829 < iters.length; i829++) {
            console.log(iters[i821] !== iters[i829]);
        }
    }
    for (let i841 = 0; i841 < (iters.length - 1); i841++) {
        console.log(Object.getPrototypeOf(iters[i841]) === Object.getPrototypeOf(iters[i841 + 1]));
    }
}
t18();
function t19() {
    var iter;
    var array = [];
    var arraylike = { length: 0 };
    iter = array.entries();
    console.log({ done: true, value: undefined }, iter.next());
    iter = array.keys();
    console.log({ done: true, value: undefined }, iter.next());
    iter = array.values();
    console.log({ done: true, value: undefined }, iter.next());
    iter = Array.prototype.entries.call(arraylike);
    console.log({ done: true, value: undefined }, iter.next());
    iter = Array.prototype.keys.call(arraylike);
    console.log({ done: true, value: undefined }, iter.next());
    iter = Array.prototype.values.call(arraylike);
    console.log({ done: true, value: undefined }, iter.next());
}
t19();
function t20() {
    var iter;
    const v917 = new Map();
    var map = v917;
    iter = map.entries();
    console.log({ done: true, value: undefined }, iter.next());
    iter = map.keys();
    console.log({ done: true, value: undefined }, iter.next());
    iter = map.values();
    console.log({ done: true, value: undefined }, iter.next());
    map.set("z", "a");
    map.set("y", "b");
    map.set("x", "c");
    map.clear();
    iter = map.entries();
    console.log({ done: true, value: undefined }, iter.next());
    iter = map.keys();
    console.log({ done: true, value: undefined }, iter.next());
    iter = map.values();
    console.log({ done: true, value: undefined }, iter.next());
}
t20();
function t21() {
    var iter;
    const v971 = new Set();
    var set = v971;
    iter = set.entries();
    console.log({ done: true, value: undefined }, iter.next());
    iter = set.values();
    console.log({ done: true, value: undefined }, iter.next());
    set.add("a");
    set.add("b");
    set.add("c");
    set.clear();
    iter = set.entries();
    console.log({ done: true, value: undefined }, iter.next());
    iter = set.values();
    console.log({ done: true, value: undefined }, iter.next());
}
t21();
function tx() {
    var iter = ("")[Symbol.iterator]();
    console.log({ done: true, value: undefined }, iter.next());
}
tx();
function t22() {
    var array = ["a","b","c","d","e"];
    var iter = array.entries();
    const v1032 = [0,"a"];
    console.log({ done: false, value: v1032 }, iter.next());
    const v1040 = [1,"b"];
    console.log({ done: false, value: v1040 }, iter.next());
    const v1047 = [2,"c"];
    console.log({ done: false, value: v1047 }, iter.next());
    const v1054 = [3,"d"];
    console.log({ done: false, value: v1054 }, iter.next());
    const v1061 = [4,"e"];
    console.log({ done: false, value: v1061 }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t22();
function t23() {
    var array = ["a","b","c","d","e"];
    var iter = array.keys();
    console.log({ done: false, value: 0 }, iter.next());
    console.log({ done: false, value: 1 }, iter.next());
    console.log({ done: false, value: 2 }, iter.next());
    console.log({ done: false, value: 3 }, iter.next());
    console.log({ done: false, value: 4 }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t23();
function t24() {
    var array = ["a","b","c","d","e"];
    var iter = array.values();
    console.log({ done: false, value: "a" }, iter.next());
    console.log({ done: false, value: "b" }, iter.next());
    console.log({ done: false, value: "c" }, iter.next());
    console.log({ done: false, value: "d" }, iter.next());
    console.log({ done: false, value: "e" }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t24();
function t25() {
    var map = getNewMapWith12345();
    var iter = map.entries();
    const v1193 = [1,6];
    console.log({ done: false, value: v1193 }, iter.next());
    const v1201 = [2,7];
    console.log({ done: false, value: v1201 }, iter.next());
    const v1208 = [3,8];
    console.log({ done: false, value: v1208 }, iter.next());
    const v1215 = [4,9];
    console.log({ done: false, value: v1215 }, iter.next());
    const v1222 = [5,10];
    console.log({ done: false, value: v1222 }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t25();
function t26() {
    var map = getNewMapWith12345();
    var iter = map.keys();
    console.log({ done: false, value: 1 }, iter.next());
    console.log({ done: false, value: 2 }, iter.next());
    console.log({ done: false, value: 3 }, iter.next());
    console.log({ done: false, value: 4 }, iter.next());
    console.log({ done: false, value: 5 }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t26();
function t27() {
    var map = getNewMapWith12345();
    var iter = map.values();
    console.log({ done: false, value: 6 }, iter.next());
    console.log({ done: false, value: 7 }, iter.next());
    console.log({ done: false, value: 8 }, iter.next());
    console.log({ done: false, value: 9 }, iter.next());
    console.log({ done: false, value: 10 }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t27();
function t28() {
    var set = getNewSetWith12345();
    var iter = set.entries();
    const v1344 = [1,1];
    console.log({ done: false, value: v1344 }, iter.next());
    const v1352 = [2,2];
    console.log({ done: false, value: v1352 }, iter.next());
    const v1359 = [3,3];
    console.log({ done: false, value: v1359 }, iter.next());
    const v1366 = [4,4];
    console.log({ done: false, value: v1366 }, iter.next());
    const v1373 = [5,5];
    console.log({ done: false, value: v1373 }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t28();
function t29() {
    var set = getNewSetWith12345();
    var iter = set.values();
    console.log({ done: false, value: 1 }, iter.next());
    console.log({ done: false, value: 2 }, iter.next());
    console.log({ done: false, value: 3 }, iter.next());
    console.log({ done: false, value: 4 }, iter.next());
    console.log({ done: false, value: 5 }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t29();
function t30() {
    var string = "abcde";
    var iter = string[Symbol.iterator]();
    console.log({ done: false, value: "a" }, iter.next());
    console.log({ done: false, value: "b" }, iter.next());
    console.log({ done: false, value: "c" }, iter.next());
    console.log({ done: false, value: "d" }, iter.next());
    console.log({ done: false, value: "e" }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    var iter = (string = "ab𝄞c𐐧")[Symbol.iterator]();
    console.log({ done: false, value: "a" }, iter.next());
    console.log({ done: false, value: "b" }, iter.next());
    console.log({ done: false, value: "𝄞" }, iter.next());
    console.log({ done: false, value: "c" }, iter.next());
    console.log({ done: false, value: "𐐧" }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t30();
function t31() {
    const v1540 = {
        length: 5,
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
    };
    var o = v1540;
    var iter = Array.prototype.values.call(o);
    console.log({ done: false, value: "a" }, iter.next());
    console.log({ done: false, value: "b" }, iter.next());
    console.log({ done: false, value: "c" }, iter.next());
    console.log({ done: false, value: "d" }, iter.next());
    console.log({ done: false, value: "e" }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    o.length = 2;
    iter = Array.prototype.values.call(o);
    console.log({ done: false, value: "a" }, iter.next());
    console.log({ done: false, value: "b" }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    o.length = 7;
    var iter = Array.prototype.values.call(o);
    console.log({ done: false, value: "a" }, iter.next());
    console.log({ done: false, value: "b" }, iter.next());
    console.log({ done: false, value: "c" }, iter.next());
    console.log({ done: false, value: "d" }, iter.next());
    console.log({ done: false, value: "e" }, iter.next());
    console.log({ done: false, value: undefined }, iter.next());
    console.log({ done: false, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
}
t31();
function t32() {
    const v1645 = -1;
    var o = { length: v1645, 0: "a", 1: "b" };
    var iter = Array.prototype[Symbol.iterator].call(o);
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    o.length = Number.NaN;
    iter = Array.prototype[Symbol.iterator].call(o);
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    o.length = -0;
    iter = Array.prototype[Symbol.iterator].call(o);
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    o.length = Number.NEGATIVE_INFINITY;
    iter = Array.prototype[Symbol.iterator].call(o);
    console.log({ done: true, value: undefined }, iter.next());
    console.log({ done: true, value: undefined }, iter.next());
    o.length = Number.POSITIVE_INFINITY;
    iter = Array.prototype[Symbol.iterator].call(o);
    console.log({ done: false, value: "a" }, iter.next());
    console.log({ done: false, value: "b" }, iter.next());
}
t32();
function t33() {
    var i = 0;
    var map = getNewMapWith12345();
    for (const v1737 of map.entries()) {
        var key = v1737[0];
        var val = v1737[1];
        map.delete(key);
        i += 1;
        console.log(key == i);
        console.log(val == (i + 5));
    }
    for (const v1752 of map.entries()) {
        assert.fail("Shouldn't execute; map should be empty");
    }
    i = 0;
    for (const v1759 of (map = getNewMapWith12345()).entries()) {
        var key = v1759[0];
        var val = v1759[1];
        if (key >= 3) {
            map.delete(key - 2);
        }
        i += 1;
        console.log(key == i);
        console.log(val == (i + 5));
    }
    i = 3;
    for (const v1779 of map.entries()) {
        var key = v1779[0];
        var val = v1779[1];
        i += 1;
        console.log(key == i);
        console.log(val == (i + 5));
    }
}
t33();
function t34() {
    var i = 1;
    var map = getNewMapWith12345();
    for (const v1799 of map.entries()) {
        var key = v1799[0];
        var val = v1799[1];
        console.log(key == i);
        console.log(val == (i + 5));
        map.delete(key + 1);
        i += 2;
    }
    for (const v1816 of map.entries()) {
        var key = v1816[0];
        var val = v1816[1];
        console.log(key == 1);
        console.log(val == 6);
        map.delete(3);
        map.delete(5);
    }
    for (const v1833 of map.entries()) {
        var key = v1833[0];
        var val = v1833[1];
        console.log(key == 1);
        console.log(val == 6);
        map.delete(1);
    }
    for (const v1848 of map.entries()) {
        var key = v1848[0];
        var val = v1848[1];
    }
    map = getNewMapWith12345();
    i = 0;
    for (const v1856 of map.entries()) {
        var key = v1856[0];
        var val = v1856[1];
        map.delete(6 - key);
        i += 1;
        console.log((key == i) && (key <= 3));
        console.log((val == (i + 5)) && (val <= 8));
    }
    i = 0;
    for (const v1880 of map.entries()) {
        var key = v1880[0];
        var val = v1880[1];
        i += 1;
        console.log((key == i) && (key <= 2));
        console.log((val == (i + 5)) && (val <= 7));
    }
}
t34();
function t35() {
    var i = 0;
    const v1904 = new Map();
    var map = v1904;
    map.set(1, 21);
    for (const v1910 of map.entries()) {
        var key = v1910[0];
        var val = v1910[1];
        i += 1;
        console.log(key == i);
        console.log(val == (i + 20));
        if (key < 20) {
            map.set(key + 1, val + 1);
        }
    }
    console.log(i == 20);
    i = 0;
    for (const v1936 of map.entries()) {
        var key = v1936[0];
        var val = v1936[1];
        i += 1;
        console.log(key == i);
        if (key < 20) {
            map.set(key + 1, i);
        }
    }
    console.log(i == 20);
}
t35();
function t36() {
    var i = 0;
    var map = getNewMapWith12345();
    for (const v1959 of map.entries()) {
        var key = v1959[0];
        var val = v1959[1];
        i += 1;
        console.log(key == i);
        if (key == 1) {
            map.clear();
        }
    }
    console.log(i == 1);
    i = 0;
    map = getNewMapWith12345();
    for (const v1978 of map.entries()) {
        var key = v1978[0];
        var val = v1978[1];
        i += 1;
        console.log(key == i);
        if (key == 2) {
            map.clear();
        }
    }
    console.log(i == 2);
    i = 0;
    map = getNewMapWith12345();
    for (const v1995 of map.entries()) {
        var key = v1995[0];
        var val = v1995[1];
        i += 1;
        console.log(key == i);
        if (key == 3) {
            map.clear();
        }
    }
    console.log(i == 3);
    i = 0;
    map = getNewMapWith12345();
    for (const v2012 of map.entries()) {
        var key = v2012[0];
        var val = v2012[1];
        i += 1;
        console.log(key == i);
        if (key == 4) {
            map.clear();
        }
    }
    console.log(i == 4);
    i = 0;
    map = getNewMapWith12345();
    for (const v2029 of map.entries()) {
        var key = v2029[0];
        var val = v2029[1];
        i += 1;
        console.log(key == i);
        if (key == 5) {
            map.clear();
        }
    }
    console.log(i == 5);
    console.log(map.size == 0);
}
t36();
function t37() {
    var i = 0;
    var map = getNewMapWith12345();
    for (const v2054 of map.entries()) {
        var key = v2054[0];
        var val = v2054[1];
        if (key == 3) {
            map.delete(2);
            map.delete(1);
            map.set(1);
            map.set(2);
        }
        i += 1;
        console.log(key == i);
        if (key == 5) {
            i = 0;
        }
    }
    i = 2;
    for (const v2078 of map.entries()) {
        var key = v2078[0];
        var val = v2078[1];
        i += 1;
        console.log(key == i);
        if (key == 5) {
            i = 0;
        }
    }
}
t37();
function t38() {
    const v2093 = new Map();
    var map = v2093;
    map.set(1, 0);
    map.set(2, 1);
    var keys = [1,2,1,2,1,2,1,2,1,2];
    var i = 0;
    for (const v2116 of map.entries()) {
        var key = v2116[0];
        var val = v2116[1];
        if (i < 9) {
            if (key == 1) {
                map.delete(1);
                map.set(2, i + 1);
            } else {
                if (key == 2) {
                    map.delete(2);
                    map.set(1, i + 1);
                }
            }
        }
        console.log(key == keys[i]);
        console.log(val == i);
        i += 1;
    }
    console.log(i == 10);
}
t38();
function ty() {
    var i = 0;
    var set = getNewSetWith12345();
    for (const v2157 of set.values()) {
        i += 1;
        console.log(v2157 == i);
    }
    i = 0;
    for (const v2164 of set.values()) {
        i += 1;
        console.log(v2164 == i);
    }
    set.clear();
    for (const v2171 of set.values()) {
    }
    const v2173 = new Set();
    for (const v2175 of (set = v2173).values()) {
    }
}
ty();
function t39() {
    var i = 0;
    var set = getNewSetWith12345();
    for (const v2183 of set.values()) {
        set.delete(v2183);
        i += 1;
        console.log(v2183 == i);
    }
    for (const v2190 of set.values()) {
        assert.fail("Shouldn't execute; set should be empty");
    }
    i = 0;
    for (const v2197 of (set = getNewSetWith12345()).values()) {
        if (v2197 >= 3) {
            set.delete(v2197 - 2);
        }
        i += 1;
        console.log(v2197 == i);
    }
    i = 3;
    for (const v2209 of set.values()) {
        i += 1;
        console.log(v2209 == i);
    }
}
t39();
function t40() {
    var i = 1;
    var set = getNewSetWith12345();
    for (const v2221 of set.values()) {
        console.log(v2221 == i);
        set.delete(v2221 + 1);
        i += 2;
    }
    for (const v2230 of set.values()) {
        console.log(v2230 == 1);
        set.delete(3);
        set.delete(5);
    }
    for (const v2240 of set.values()) {
        console.log(v2240 == 1);
        set.delete(1);
    }
    for (const v2248 of set.values()) {
    }
    set = getNewSetWith12345();
    i = 0;
    for (const v2252 of set.values()) {
        set.delete(6 - v2252);
        i += 1;
        console.log((v2252 == i) && (v2252 <= 3));
    }
    i = 0;
    for (const v2265 of set.values()) {
        i += 1;
        console.log((v2265 == i) && (v2265 <= 2));
    }
}
t40();
function t41() {
    var i = 0;
    const v2278 = new Set();
    var set = v2278;
    set.add(1);
    for (const v2283 of set.values()) {
        i += 1;
        console.log(v2283 == i);
        if (v2283 < 20) {
            set.add(v2283 + 1);
        }
    }
    console.log(i == 20);
    i = 0;
    for (const v2299 of set.values()) {
        i += 1;
        console.log(v2299 == i);
        if (v2299 < 20) {
            set.add(v2299 + 1);
        }
    }
    console.log(i == 20);
}
t41();
function t42() {
    var i = 0;
    var set = getNewSetWith12345();
    for (const v2318 of set.values()) {
        i += 1;
        console.log(v2318 == i);
        if (v2318 == 1) {
            set.clear();
        }
    }
    console.log(i == 1);
    i = 0;
    set = getNewSetWith12345();
    for (const v2333 of set.values()) {
        i += 1;
        console.log(v2333 == i);
        if (v2333 == 2) {
            set.clear();
        }
    }
    console.log(i == 2);
    i = 0;
    set = getNewSetWith12345();
    for (const v2346 of set.values()) {
        i += 1;
        console.log(v2346 == i);
        if (v2346 == 3) {
            set.clear();
        }
    }
    console.log(i == 3);
    i = 0;
    set = getNewSetWith12345();
    for (const v2359 of set.values()) {
        i += 1;
        console.log(v2359 == i);
        if (v2359 == 4) {
            set.clear();
        }
    }
    console.log(i == 4);
    i = 0;
    set = getNewSetWith12345();
    for (const v2372 of set.values()) {
        i += 1;
        console.log(v2372 == i);
        if (v2372 == 5) {
            set.clear();
        }
    }
    console.log(i == 5);
    console.log(set.size == 0);
}
t42();
function ttt() {
    var i = 0;
    var set = getNewSetWith12345();
    for (const v2393 of set.values()) {
        if (v2393 == 3) {
            set.delete(2);
            set.delete(1);
            set.add(1);
            set.add(2);
        }
        i += 1;
        console.log(v2393 == i);
        if (v2393 == 5) {
            i = 0;
        }
    }
    i = 2;
    for (const v2413 of set.values()) {
        i += 1;
        console.log(v2413 == i);
        if (v2413 == 5) {
            i = 0;
        }
    }
}
ttt();
function t43() {
    const v2424 = new Set();
    var set = v2424;
    set.add(1);
    set.add(2);
    var vals = [1,2,1,2,1,2,1,2,1,2];
    var i = 0;
    for (const v2445 of set.values()) {
        if (i < 9) {
            if (v2445 == 1) {
                set.delete(1);
                set.add(2);
            } else {
                if (v2445 == 2) {
                    set.delete(2);
                    set.add(1);
                }
            }
        }
        console.log(v2445 == vals[i]);
        i += 1;
    }
    console.log(i == 10);
}
t43();
