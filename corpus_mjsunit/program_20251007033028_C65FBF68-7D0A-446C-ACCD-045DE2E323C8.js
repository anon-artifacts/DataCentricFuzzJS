function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function f8() {
    function indexOfInt32(a10, a11, a12) {
        let v13;
        try { v13 = a10.indexOf(a11, a12); } catch (e) {}
        return v13;
    }
    try { noInline(indexOfInt32); } catch (e) {}
    function indexOfDouble(a17, a18, a19) {
        let v20;
        try { v20 = a17.indexOf(a18, a19); } catch (e) {}
        return v20;
    }
    try { noInline(indexOfDouble); } catch (e) {}
    function indexOfString(a23, a24, a25) {
        let v26;
        try { v26 = a23.indexOf(a24, a25); } catch (e) {}
        return v26;
    }
    try { noInline(indexOfString); } catch (e) {}
    function indexOfObject(a29, a30, a31) {
        let v32;
        try { v32 = a29.indexOf(a30, a31); } catch (e) {}
        return v32;
    }
    try { noInline(indexOfObject); } catch (e) {}
    var key = {};
    let v38;
    try { v38 = Symbol("Cocoa"); } catch (e) {}
    var cocoa = v38;
    let v41;
    try { v41 = Symbol("Cappuccino"); } catch (e) {}
    var cappuccino = v41;
    var int32Array = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    var doubleArray = [0,1,2,3,4.2,5,6,7,8,9,10.5,11,12];
    var stringArray = ["cocoa","cappuccino","matcha","rize","kilimanjaro"];
    const v80 = {};
    const v81 = {};
    const v82 = {};
    const v83 = {};
    const v84 = {};
    const v85 = {};
    const v86 = {};
    var objectArray = [v80,v81,v82,v83,v84,key,v85,v86,{},cocoa,cappuccino];
    for (let i91 = 0; i91 < 100000; ++i91) {
        let v99;
        try { v99 = indexOfInt32(int32Array, null, 0); } catch (e) {}
        const v101 = -1;
        try { shouldBe(v99, v101); } catch (e) {}
        let v105;
        try { v105 = indexOfInt32(int32Array, undefined, 0); } catch (e) {}
        const v107 = -1;
        try { shouldBe(v105, v107); } catch (e) {}
        let v111;
        try { v111 = indexOfDouble(doubleArray, null, 0); } catch (e) {}
        const v113 = -1;
        try { shouldBe(v111, v113); } catch (e) {}
        let v117;
        try { v117 = indexOfDouble(doubleArray, undefined, 0); } catch (e) {}
        const v119 = -1;
        try { shouldBe(v117, v119); } catch (e) {}
        let v123;
        try { v123 = indexOfDouble(doubleArray, null, 0); } catch (e) {}
        const v125 = -1;
        try { shouldBe(v123, v125); } catch (e) {}
        let v129;
        try { v129 = indexOfDouble(doubleArray, undefined, 0); } catch (e) {}
        const v131 = -1;
        try { shouldBe(v129, v131); } catch (e) {}
        let v135;
        try { v135 = indexOfString(stringArray, null, 0); } catch (e) {}
        const v137 = -1;
        try { shouldBe(v135, v137); } catch (e) {}
        let v141;
        try { v141 = indexOfString(stringArray, undefined, 0); } catch (e) {}
        const v143 = -1;
        try { shouldBe(v141, v143); } catch (e) {}
        let v146;
        try { v146 = indexOfObject(objectArray, cocoa, 0); } catch (e) {}
        try { shouldBe(v146, 9); } catch (e) {}
        let v150;
        try { v150 = indexOfObject(objectArray, cappuccino, 0); } catch (e) {}
        try { shouldBe(v150, 10); } catch (e) {}
    }
}
try { f8(); } catch (e) {}
