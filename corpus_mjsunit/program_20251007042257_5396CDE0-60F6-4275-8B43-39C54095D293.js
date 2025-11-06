function map_test(a1, a2) {
    for (let i4 = 0; i4 < a2.length; i4++) {
        function c() {
            return a1(a2[i4].input);
        }
        var expected = a2[i4].expected;
        c();
    }
}
function lsh_inner(a19) {
    var r;
    for (let i23 = 0; i23 < 35; i23++) {
        r = 1 << a19;
    }
    return r;
}
const v33 = { input: 15, expected: 32768 };
const v36 = { input: 55, expected: 8388608 };
const v39 = { input: 1, expected: 2 };
map_test(lsh_inner, [v33,v36,v39,{ input: 0, expected: 1 }]);
function rsh_inner(a46) {
    var r;
    for (let i50 = 0; i50 < 35; i50++) {
        r = 285278465 >> a46;
    }
    return r;
}
const v60 = { input: 8, expected: 1114369 };
const v63 = { input: 5, expected: 8914952 };
const v66 = { input: 35, expected: 35659808 };
const v68 = -1;
map_test(rsh_inner, [v60,v63,v66,{ input: v68, expected: 0 }]);
function ursh_inner(a74) {
    var r;
    for (let i78 = 0; i78 < 35; i78++) {
        r = -55 >>> a74;
    }
    return r;
}
const v89 = { input: 8, expected: 16777215 };
const v92 = { input: 33, expected: 2147483620 };
const v95 = { input: 0, expected: 4294967241 };
map_test(ursh_inner, [v89,v92,v95,{ input: 1, expected: 2147483620 }]);
function doMath_inner(a102) {
    var s = 0;
    var sin = Math.sin;
    for (let i109 = 0; i109 < 200; i109++) {
        s = -Math.pow(sin(i109) + a102(i109 * 0.75), 4);
    }
    return s;
}
function doMath() {
    return doMath_inner(Math.cos);
}
doMath();
-0.5405549555611059;
