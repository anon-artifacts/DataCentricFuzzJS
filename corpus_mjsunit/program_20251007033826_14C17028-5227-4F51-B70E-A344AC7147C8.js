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
    function indexOfValue(a35, a36, a37) {
        let v38;
        try { v38 = a35.indexOf(a36, a37); } catch (e) {}
        return v38;
    }
    try { noInline(indexOfValue); } catch (e) {}
    var key = {};
    var int32Array = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    var doubleArray = [0,1,2,3,4.2,5,6,7,8,9,10.5,11,12];
    var stringArray = ["cocoa","cappuccino","matcha","rize","kilimanjaro"];
    const v79 = {};
    const v80 = {};
    const v81 = {};
    const v82 = {};
    const v83 = {};
    const v84 = {};
    const v85 = {};
    var objectArray = [v79,v80,v81,v82,v83,key,v84,v85,{}];
    const v89 = {};
    const v90 = {};
    const v91 = {};
    const v92 = {};
    const v93 = {};
    const v95 = {};
    const v96 = {};
    var valueArray = [v89,v90,v91,v92,v93,null,v95,v96,{}];
    for (let i101 = 0; i101 < 100000; ++i101) {
        let v109;
        try { v109 = indexOfInt32(int32Array, 3, 0); } catch (e) {}
        try { shouldBe(v109, 3); } catch (e) {}
        let v114;
        try { v114 = indexOfInt32(int32Array, 3, 8); } catch (e) {}
        const v116 = -1;
        try { shouldBe(v114, v116); } catch (e) {}
        let v120;
        try { v120 = indexOfDouble(doubleArray, 3, 0); } catch (e) {}
        try { shouldBe(v120, 3); } catch (e) {}
        let v125;
        try { v125 = indexOfDouble(doubleArray, 3, 20); } catch (e) {}
        const v127 = -1;
        try { shouldBe(v125, v127); } catch (e) {}
        let v131;
        try { v131 = indexOfDouble(doubleArray, 4.2, 8); } catch (e) {}
        const v133 = -1;
        try { shouldBe(v131, v133); } catch (e) {}
        let v137;
        try { v137 = indexOfDouble(doubleArray, 4.2, 0); } catch (e) {}
        try { shouldBe(v137, 4); } catch (e) {}
        let v142;
        try { v142 = indexOfDouble(doubleArray, 4.2, 20); } catch (e) {}
        const v144 = -1;
        try { shouldBe(v142, v144); } catch (e) {}
        let v148;
        try { v148 = indexOfString(stringArray, "cocoa", 0); } catch (e) {}
        try { shouldBe(v148, 0); } catch (e) {}
        let v153;
        try { v153 = indexOfString(stringArray, "cocoa", 4); } catch (e) {}
        const v155 = -1;
        try { shouldBe(v153, v155); } catch (e) {}
        let v159;
        try { v159 = indexOfString(stringArray, "cocoa", 20); } catch (e) {}
        const v161 = -1;
        try { shouldBe(v159, v161); } catch (e) {}
        let v164;
        try { v164 = indexOfObject(objectArray, key, 0); } catch (e) {}
        try { shouldBe(v164, 5); } catch (e) {}
        let v168;
        try { v168 = indexOfObject(objectArray, key, 6); } catch (e) {}
        const v170 = -1;
        try { shouldBe(v168, v170); } catch (e) {}
        let v173;
        try { v173 = indexOfObject(objectArray, key, 20); } catch (e) {}
        const v175 = -1;
        try { shouldBe(v173, v175); } catch (e) {}
        let v179;
        try { v179 = indexOfValue(valueArray, null, 0); } catch (e) {}
        try { shouldBe(v179, 5); } catch (e) {}
        let v184;
        try { v184 = indexOfValue(valueArray, null, 6); } catch (e) {}
        const v186 = -1;
        try { shouldBe(v184, v186); } catch (e) {}
        let v190;
        try { v190 = indexOfValue(valueArray, null, 20); } catch (e) {}
        const v192 = -1;
        try { shouldBe(v190, v192); } catch (e) {}
    }
}
try { f8(); } catch (e) {}
