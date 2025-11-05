function testMonoInlineSlots() {
    var iterations = 10;
    const v4 = new Array(iterations);
    var a = v4;
    for (let i7 = 0; i7 < iterations; i7++) {
        var o = { a: 0 };
        print("...");
        o.p = 1;
        print("...");
        o.z = -1;
        a[i7] = o;
    }
    for (let i24 = 0; i24 < iterations; i24++) {
        print(((((("{ a: " + a[i24].a) + ", p: ") + a[i24].p) + ", z: ") + a[i24].z) + "}");
    }
}
print("testMonoInlineSlots: ");
testMonoInlineSlots();
testMonoInlineSlots();
print();
function testMonoInlineSlotsSetOrAdd() {
    var iterations = 10;
    const v57 = new Array(iterations);
    var a = v57;
    for (let i60 = 0; i60 < iterations; i60++) {
        var o = { a: 0 };
        if ((i60 % 2) == 0) {
            o.p = 1;
        }
        print("...");
        o.p = 1;
        print("...");
        o.z = -1;
        a[i60] = o;
    }
    for (let i81 = 0; i81 < iterations; i81++) {
        print(((((("{ a: " + a[i81].a) + ", p: ") + a[i81].p) + ", z: ") + a[i81].z) + "}");
    }
}
print("testMonoInlineSlotsSetOrAdd: ");
testMonoInlineSlotsSetOrAdd();
testMonoInlineSlotsSetOrAdd();
print();
function testMonoAuxSlots() {
    var iterations = 10;
    const v112 = new Array(iterations);
    var a = v112;
    for (let i115 = 0; i115 < iterations; i115++) {
        var o = {};
        o.a = 1;
        print("...");
        o.p = 1;
        print("...");
        o.z = -1;
        a[i115] = o;
    }
    for (let i131 = 0; i131 < iterations; i131++) {
        print(((((("{ a: " + a[i131].a) + ", p: ") + a[i131].p) + ", z: ") + a[i131].z) + "}");
    }
}
print("testMonoAuxSlots: ");
testMonoAuxSlots();
testMonoAuxSlots();
print();
function testMonoAuxSlotsAdjustmentRequired1() {
    var iterations = 10;
    const v162 = new Array(iterations);
    var a = v162;
    for (let i165 = 0; i165 < iterations; i165++) {
        var o = {};
        print("...");
        o.p = 1;
        print("...");
        o.z = -1;
        a[i165] = o;
    }
    for (let i180 = 0; i180 < iterations; i180++) {
        print(((("{ p: " + a[i180].p) + ", z: ") + a[i180].z) + "}");
    }
}
print("testMonoAuxSlotsAdjustmentRequired1: ");
testMonoAuxSlotsAdjustmentRequired1();
testMonoAuxSlotsAdjustmentRequired1();
print();
function testMonoAuxSlotsAdjustmentRequired2() {
    var iterations = 10;
    const v206 = new Array(iterations);
    var a = v206;
    for (let i209 = 0; i209 < iterations; i209++) {
        var o = {};
        o.a = 0;
        o.b = 1;
        o.c = 2;
        o.d = 3;
        print("...");
        o.p = 1;
        print("...");
        o.z = -1;
        a[i209] = o;
    }
    for (let i228 = 0; i228 < iterations; i228++) {
        print(((((((((((("{ a: " + a[i228].a) + ", b: ") + a[i228].b) + ", c: ") + a[i228].c) + ", d: ") + a[i228].d) + ", p: ") + a[i228].p) + ", z: ") + a[i228].z) + "}");
    }
}
print("testMonoAuxSlotsAdjustmentRequired2: ");
testMonoAuxSlotsAdjustmentRequired2();
testMonoAuxSlotsAdjustmentRequired2();
print();
function testPoly() {
    var iterations = 25;
    const v274 = new Array(iterations);
    var a = v274;
    for (let i277 = 0; i277 < iterations; i277++) {
        var o;
        switch (i277 % 3) {
            case 0:
                o = {};
                break;
            case 1:
                o = { a: 0 };
                break;
            case 2:
                o = { b: 0 };
                break;
        }
        if ((i277 % 6) >= 3) {
            o.p = 0;
        }
        print("...");
        o.p = 1;
        print("...");
        o.z = -1;
        a[i277] = o;
    }
    for (let i307 = 0; i307 < iterations; i307++) {
        print(((((((("{ a: " + a[i307].a) + ", b: ") + a[i307].b) + ", p: ") + a[i307].p) + ", z: ") + a[i307].z) + "}");
    }
}
print("testPoly: ");
testPoly();
testPoly();
print();
function f339() {
    function f340() {
    }
    var Blank = f340;
    Blank.prototype = { a: 0, b: 0, c: 0 };
    function setUpMonoStoreFieldCacheInvalidation() {
        const v347 = new Blank();
        var o = v347;
        o.a = 1;
        o.b = 2;
        o.c = 3;
        const v352 = new Blank();
        var o = v352;
        o.a = 1;
        o.b = 2;
        o.c = 3;
    }
    function testMonoStoreFieldCacheInvalidation(a358, a359) {
        if (a359) {
            a358.a = 1;
            a358.b = 2;
            a358.c = 3;
        }
    }
    print("testMonoStoreFieldCacheInvalidation: ");
    setUpMonoStoreFieldCacheInvalidation();
    const v366 = new Blank();
    var o = v366;
    testMonoStoreFieldCacheInvalidation(o, false);
    print(((((("{ a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + "}");
    const v384 = new Blank();
    var o = v384;
    testMonoStoreFieldCacheInvalidation(o, true);
    print(((((("{ a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + "}");
    const v402 = Blank.prototype;
    Object.defineProperty(v402, "b", { writable: false });
    const v408 = new Blank();
    var o = v408;
    testMonoStoreFieldCacheInvalidation(o, true);
    print(((((("{ a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + "}");
}
f339();
print();
function f428() {
    function f429() {
    }
    var Blank = f429;
    Blank.prototype = { a: 0, b: 0, c: 0 };
    function setUpPolyStoreFieldCacheInvalidation() {
        const v436 = new Blank();
        var o = v436;
        o.a = 1;
        o.b = 2;
        o.c = 3;
        o.d = 4;
        const v442 = new Blank();
        var o = v442;
        o.a = 1;
        o.b = 2;
        o.c = 3;
        o.d = 4;
    }
    function testPolyStoreFieldCacheInvalidation(a449, a450) {
        var o;
        for (let i454 = 0; i454 < 2; i454++) {
            o = a449[i454];
            o.a = 1;
            o.b = 2;
            o.c = 3;
        }
    }
    function reportResults(a465) {
        for (let i467 = 0; i467 < 2; i467++) {
            var o = a465[i467];
            print(((((("{ a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + "}");
        }
    }
    print("testPolyStoreFieldCacheInvalidation: ");
    setUpPolyStoreFieldCacheInvalidation();
    const v494 = new Array(2);
    var warmUpObjects = v494;
    const v496 = new Blank();
    warmUpObjects[0] = v496;
    const v497 = new Blank();
    var o = v497;
    o.a = 1;
    o.b = 2;
    o.c = 3;
    warmUpObjects[1] = o;
    testPolyStoreFieldCacheInvalidation(warmUpObjects, false);
    reportResults(warmUpObjects);
    const v505 = Blank.prototype;
    Object.defineProperty(v505, "b", { writable: false });
    const v512 = new Array(2);
    var testObjects = v512;
    const v514 = new Blank();
    testObjects[0] = v514;
    const v515 = new Blank();
    testObjects[1] = v515;
    testPolyStoreFieldCacheInvalidation(testObjects, true);
    reportResults(testObjects);
}
f428();
