function test(a1) {
    try { a1(); } catch (e) {}
    try { a1(); } catch (e) {}
    try { a1(); } catch (e) {}
}
function TestSetIterator() {
    let v7;
    try { v7 = new Set(); } catch (e) {}
    var s = v7;
    let v9;
    try { v9 = s.values(); } catch (e) {}
    var iter = v9;
    var SetIteratorPrototype = iter?.__proto__;
    try { SetIteratorPrototype.hasOwnProperty("constructor"); } catch (e) {}
    SetIteratorPrototype?.__proto__;
    Object?.prototype;
    let v18;
    try { v18 = Object.getOwnPropertyNames(SetIteratorPrototype); } catch (e) {}
    var propertyNames = v18;
    ["next"];
    let v22;
    try { v22 = new Set(); } catch (e) {}
    let v23;
    try { v23 = v22.values(); } catch (e) {}
    v23?.__proto__;
    let v25;
    try { v25 = new Set(); } catch (e) {}
    let v26;
    try { v26 = v25.entries(); } catch (e) {}
    v26?.__proto__;
    const v30 = Object?.prototype?.toString;
    try { v30.call(iter); } catch (e) {}
    SetIteratorPrototype?.[Symbol?.toStringTag];
    const v36 = Symbol?.toStringTag;
    let v37;
    try { v37 = Object.getOwnPropertyDescriptor(SetIteratorPrototype, v36); } catch (e) {}
    var desc = v37;
    desc?.configurable;
    desc?.writable;
    desc?.value;
}
try { test(TestSetIterator); } catch (e) {}
function TestSetIteratorValues() {
    let v46;
    try { v46 = new Set(); } catch (e) {}
    var s = v46;
    try { s.add(1); } catch (e) {}
    try { s.add(2); } catch (e) {}
    try { s.add(3); } catch (e) {}
    let v54;
    try { v54 = s.values(); } catch (e) {}
    var iter = v54;
    const v58 = { value: 1, done: false };
    try { iter.next(); } catch (e) {}
    const v62 = { value: 2, done: false };
    try { iter.next(); } catch (e) {}
    const v66 = { value: 3, done: false };
    try { iter.next(); } catch (e) {}
    const v70 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
    const v74 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
}
try { test(TestSetIteratorValues); } catch (e) {}
function TestSetIteratorKeys() {
    const v79 = Set?.prototype;
    try { v79.keys(); } catch (e) {}
    const v81 = Set?.prototype;
    try { v81.values(); } catch (e) {}
}
try { test(TestSetIteratorKeys); } catch (e) {}
function TestSetIteratorEntries() {
    let v86;
    try { v86 = new Set(); } catch (e) {}
    var s = v86;
    try { s.add(1); } catch (e) {}
    try { s.add(2); } catch (e) {}
    try { s.add(3); } catch (e) {}
    let v94;
    try { v94 = s.entries(); } catch (e) {}
    var iter = v94;
    const v98 = [1,1];
    const v100 = { value: v98, done: false };
    try { iter.next(); } catch (e) {}
    const v104 = [2,2];
    const v106 = { value: v104, done: false };
    try { iter.next(); } catch (e) {}
    const v110 = [3,3];
    const v112 = { value: v110, done: false };
    try { iter.next(); } catch (e) {}
    const v116 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
    const v120 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
}
try { test(TestSetIteratorEntries); } catch (e) {}
function TestSetIteratorMutations() {
    let v125;
    try { v125 = new Set(); } catch (e) {}
    var s = v125;
    try { s.add(1); } catch (e) {}
    let v129;
    try { v129 = s.values(); } catch (e) {}
    var iter = v129;
    const v133 = { value: 1, done: false };
    try { iter.next(); } catch (e) {}
    try { s.add(2); } catch (e) {}
    try { s.add(3); } catch (e) {}
    try { s.add(4); } catch (e) {}
    try { s.add(5); } catch (e) {}
    const v145 = { value: 2, done: false };
    try { iter.next(); } catch (e) {}
    try { s.delete(3); } catch (e) {}
    const v151 = { value: 4, done: false };
    try { iter.next(); } catch (e) {}
    try { s.delete(5); } catch (e) {}
    const v157 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
    try { s.add(4); } catch (e) {}
    const v163 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
}
try { test(TestSetIteratorMutations); } catch (e) {}
function TestSetIteratorMutations2() {
    let v168;
    try { v168 = new Set(); } catch (e) {}
    var s = v168;
    try { s.add(1); } catch (e) {}
    try { s.add(2); } catch (e) {}
    let v174;
    try { v174 = s.values(); } catch (e) {}
    var i = v174;
    const v178 = { value: 1, done: false };
    try { i.next(); } catch (e) {}
    try { s.delete(2); } catch (e) {}
    try { s.delete(1); } catch (e) {}
    try { s.add(2); } catch (e) {}
    const v188 = { value: 2, done: false };
    try { i.next(); } catch (e) {}
    const v192 = { value: undefined, done: true };
    try { i.next(); } catch (e) {}
}
try { test(TestSetIteratorMutations2); } catch (e) {}
function TestSetIteratorMutations3() {
    let v197;
    try { v197 = new Set(); } catch (e) {}
    var s = v197;
    try { s.add(1); } catch (e) {}
    try { s.add(2); } catch (e) {}
    let v203;
    try { v203 = s.values(); } catch (e) {}
    var i = v203;
    const v207 = { value: 1, done: false };
    try { i.next(); } catch (e) {}
    try { s.delete(2); } catch (e) {}
    try { s.delete(1); } catch (e) {}
    for (let i214 = 2; i214 < 500; ++i214) {
        try { s.add(i214); } catch (e) {}
    }
    for (let i222 = 2; i222 < 500; ++i222) {
        try { s.delete(i222); } catch (e) {}
    }
    for (let i230 = 2; i230 < 1000; ++i230) {
        try { s.add(i230); } catch (e) {}
    }
    const v239 = { value: 2, done: false };
    try { i.next(); } catch (e) {}
    for (let i242 = 1001; i242 < 2000; ++i242) {
        try { s.add(i242); } catch (e) {}
    }
    try { s.delete(3); } catch (e) {}
    for (let i252 = 6; i252 < 2000; ++i252) {
        try { s.delete(i252); } catch (e) {}
    }
    const v261 = { value: 4, done: false };
    try { i.next(); } catch (e) {}
    try { s.delete(5); } catch (e) {}
    const v267 = { value: undefined, done: true };
    try { i.next(); } catch (e) {}
    try { s.add(4); } catch (e) {}
    const v273 = { value: undefined, done: true };
    try { i.next(); } catch (e) {}
}
try { test(TestSetIteratorMutations3); } catch (e) {}
function TestSetInvalidReceiver() {
    function f277() {
        const v278 = {};
        const v281 = Set?.prototype?.values;
        try { v281.call(v278); } catch (e) {}
    }
    try { f277(); } catch (e) {}
    function f285() {
        const v286 = {};
        const v289 = Set?.prototype?.entries;
        try { v289.call(v286); } catch (e) {}
    }
    try { f285(); } catch (e) {}
}
try { test(TestSetInvalidReceiver); } catch (e) {}
function TestSetIteratorInvalidReceiver() {
    let v295;
    try { v295 = new Set(); } catch (e) {}
    let v296;
    try { v296 = v295.values(); } catch (e) {}
    var iter = v296;
    function f298() {
        const v299 = {};
        const v300 = iter?.next;
        try { v300.call(v299); } catch (e) {}
    }
    try { f298(); } catch (e) {}
}
try { test(TestSetIteratorInvalidReceiver); } catch (e) {}
function TestSetIteratorSymbol() {
    Set?.prototype?.[Symbol?.iterator];
    const v310 = Set?.prototype;
    try { v310.values(); } catch (e) {}
    const v312 = Symbol?.iterator;
    const v313 = Set?.prototype;
    try { v313.hasOwnProperty(v312); } catch (e) {}
    const v315 = Symbol?.iterator;
    const v316 = Set?.prototype;
    try { v316.propertyIsEnumerable(v315); } catch (e) {}
    let v318;
    try { v318 = new Set(); } catch (e) {}
    let v319;
    try { v319 = v318.values(); } catch (e) {}
    var iter = v319;
    const v321 = Symbol?.iterator;
    try { iter[v321](); } catch (e) {}
    iter?.[Symbol?.iterator]?.name;
}
try { test(TestSetIteratorSymbol); } catch (e) {}
function TestMapIterator() {
    let v330;
    try { v330 = new Map(); } catch (e) {}
    var m = v330;
    let v332;
    try { v332 = m.values(); } catch (e) {}
    var iter = v332;
    var MapIteratorPrototype = iter?.__proto__;
    try { MapIteratorPrototype.hasOwnProperty("constructor"); } catch (e) {}
    MapIteratorPrototype?.__proto__;
    Object?.prototype;
    let v341;
    try { v341 = Object.getOwnPropertyNames(MapIteratorPrototype); } catch (e) {}
    var propertyNames = v341;
    ["next"];
    let v345;
    try { v345 = new Map(); } catch (e) {}
    let v346;
    try { v346 = v345.values(); } catch (e) {}
    v346?.__proto__;
    let v348;
    try { v348 = new Map(); } catch (e) {}
    let v349;
    try { v349 = v348.keys(); } catch (e) {}
    v349?.__proto__;
    let v351;
    try { v351 = new Map(); } catch (e) {}
    let v352;
    try { v352 = v351.entries(); } catch (e) {}
    v352?.__proto__;
    const v356 = Object?.prototype?.toString;
    try { v356.call(iter); } catch (e) {}
    MapIteratorPrototype?.[Symbol?.toStringTag];
    const v362 = Symbol?.toStringTag;
    let v363;
    try { v363 = Object.getOwnPropertyDescriptor(MapIteratorPrototype, v362); } catch (e) {}
    var desc = v363;
    desc?.configurable;
    desc?.writable;
    desc?.value;
}
try { test(TestMapIterator); } catch (e) {}
function TestMapIteratorValues() {
    let v372;
    try { v372 = new Map(); } catch (e) {}
    var m = v372;
    try { m.set(1, 11); } catch (e) {}
    try { m.set(2, 22); } catch (e) {}
    try { m.set(3, 33); } catch (e) {}
    let v383;
    try { v383 = m.values(); } catch (e) {}
    var iter = v383;
    const v387 = { value: 11, done: false };
    try { iter.next(); } catch (e) {}
    const v391 = { value: 22, done: false };
    try { iter.next(); } catch (e) {}
    const v395 = { value: 33, done: false };
    try { iter.next(); } catch (e) {}
    const v399 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
    const v403 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
}
try { test(TestMapIteratorValues); } catch (e) {}
function TestMapIteratorKeys() {
    let v408;
    try { v408 = new Map(); } catch (e) {}
    var m = v408;
    try { m.set(1, 11); } catch (e) {}
    try { m.set(2, 22); } catch (e) {}
    try { m.set(3, 33); } catch (e) {}
    let v419;
    try { v419 = m.keys(); } catch (e) {}
    var iter = v419;
    const v423 = { value: 1, done: false };
    try { iter.next(); } catch (e) {}
    const v427 = { value: 2, done: false };
    try { iter.next(); } catch (e) {}
    const v431 = { value: 3, done: false };
    try { iter.next(); } catch (e) {}
    const v435 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
    const v439 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
}
try { test(TestMapIteratorKeys); } catch (e) {}
function TestMapIteratorEntries() {
    let v444;
    try { v444 = new Map(); } catch (e) {}
    var m = v444;
    try { m.set(1, 11); } catch (e) {}
    try { m.set(2, 22); } catch (e) {}
    try { m.set(3, 33); } catch (e) {}
    let v455;
    try { v455 = m.entries(); } catch (e) {}
    var iter = v455;
    const v459 = [1,11];
    const v461 = { value: v459, done: false };
    try { iter.next(); } catch (e) {}
    const v465 = [2,22];
    const v467 = { value: v465, done: false };
    try { iter.next(); } catch (e) {}
    const v471 = [3,33];
    const v473 = { value: v471, done: false };
    try { iter.next(); } catch (e) {}
    const v477 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
    const v481 = { value: undefined, done: true };
    try { iter.next(); } catch (e) {}
}
try { test(TestMapIteratorEntries); } catch (e) {}
function TestMapInvalidReceiver() {
    function f485() {
        const v486 = {};
        const v489 = Map?.prototype?.values;
        try { v489.call(v486); } catch (e) {}
    }
    try { f485(); } catch (e) {}
    function f493() {
        const v494 = {};
        const v497 = Map?.prototype?.keys;
        try { v497.call(v494); } catch (e) {}
    }
    try { f493(); } catch (e) {}
    function f500() {
        const v501 = {};
        const v504 = Map?.prototype?.entries;
        try { v504.call(v501); } catch (e) {}
    }
    try { f500(); } catch (e) {}
}
try { test(TestMapInvalidReceiver); } catch (e) {}
function TestMapIteratorInvalidReceiver() {
    let v510;
    try { v510 = new Map(); } catch (e) {}
    let v511;
    try { v511 = v510.values(); } catch (e) {}
    var iter = v511;
    function f513() {
        const v514 = {};
        const v515 = iter?.next;
        try { v515.call(v514); } catch (e) {}
    }
    try { f513(); } catch (e) {}
}
try { test(TestMapIteratorInvalidReceiver); } catch (e) {}
function TestMapIteratorSymbol() {
    Map?.prototype?.[Symbol?.iterator];
    const v526 = Map?.prototype;
    try { v526.entries(); } catch (e) {}
    const v528 = Symbol?.iterator;
    const v529 = Map?.prototype;
    try { v529.hasOwnProperty(v528); } catch (e) {}
    const v531 = Symbol?.iterator;
    const v532 = Map?.prototype;
    try { v532.propertyIsEnumerable(v531); } catch (e) {}
    let v534;
    try { v534 = new Map(); } catch (e) {}
    let v535;
    try { v535 = v534.values(); } catch (e) {}
    var iter = v535;
    const v537 = Symbol?.iterator;
    try { iter[v537](); } catch (e) {}
    iter?.[Symbol?.iterator]?.name;
}
try { test(TestMapIteratorSymbol); } catch (e) {}
