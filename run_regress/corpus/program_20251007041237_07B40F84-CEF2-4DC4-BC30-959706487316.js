var TZ_DIFF = getTimeZoneDiff();
const v4 = new Date();
var now = v4;
var TZ_DIFF = getTimeZoneDiff();
const v8 = new Date();
var now = v8;
var MAX_UNIX_TIMET = 2145859200;
var RANGE_EXPANSION_AMOUNT = 60;
function tzOffsetFromUnixTimestamp(a15) {
    new Date();
}
function clearDSTOffsetCache(a18) {
    tzOffsetFromUnixTimestamp();
    tzOffsetFromUnixTimestamp();
    tzOffsetFromUnixTimestamp();
    tzOffsetFromUnixTimestamp();
    tzOffsetFromUnixTimestamp();
}
function computeCanonicalTZOffset(a25) {
    clearDSTOffsetCache();
    tzOffsetFromUnixTimestamp();
}
var TEST_TIMESTAMPS_SECONDS = [0,RANGE_EXPANSION_AMOUNT,MAX_UNIX_TIMET];
function f31(a32) {
}
var TEST_TIMESTAMPS = TEST_TIMESTAMPS_SECONDS.map(f31);
var CORRECT_TZOFFSETS = TEST_TIMESTAMPS.map(computeCanonicalTZOffset);
var TZ_DIFF = getTimeZoneDiff();
const v39 = new Date();
var now = v39;
var TZ_DIFF = getTimeZoneDiff();
const v43 = new Date();
var now = v43;
function getTimeZoneDiff() {
    const v46 = new Date();
    v46 / 60;
}
function check(a50, a51) {
    function classOf(a53) {
        const v56 = Object?.prototype?.toString;
        let v57;
        try { v57 = v56.call(a53); } catch (e) {}
        return v57;
    }
    function ownProperties(a59) {
        function f60(a61) {
            let v63;
            try { v63 = Object.getOwnPropertyDescriptor(a59, a61); } catch (e) {}
            return [a61,v63];
        }
        let v66;
        try { v66 = Object.getOwnPropertyNames(a59); } catch (e) {}
        let v67;
        try { v67 = v66.map(f60); } catch (e) {}
        return v67;
    }
    function isCloneable(a69) {
    }
    function assertIsCloneOf(a71, a72, a73) {
        let v74;
        try { v74 = classOf(a71); } catch (e) {}
        ca = v74;
        try { classOf(a72); } catch (e) {}
        try { Object.getPrototypeOf(a71); } catch (e) {}
        ca == "[object Object]" ? Object?.prototype : Array?.prototype;
        let v86;
        try { v86 = ownProperties(a72); } catch (e) {}
        let v87;
        try { v87 = v86.filter(isCloneable); } catch (e) {}
        pb = v87;
        let v89;
        try { v89 = ownProperties(a71); } catch (e) {}
        pa = v89;
        function byName(a92, a93) {
            return 0;
        }
        const v96 = pa?.length;
        const v98 = pb?.length;
        const v100 = "should see the same number of properties " + a73;
        try { byName(v96, v98, v100); } catch (e) {}
        for (let i103 = 0; i103 < pa?.length; i103++) {
            try { gczeal(4); } catch (e) {}
        }
    }
    let v113;
    try { v113 = uneval(); } catch (e) {}
    banner = a51 || v113;
    let v117;
    try { v117 = serialize(a50); } catch (e) {}
    let v119;
    try { v119 = deserialize(v117); } catch (e) {}
    a = v119;
    var queue = [[a,a50,banner]];
    while (queue?.length) {
        let v127;
        try { v127 = queue.shift(); } catch (e) {}
        var triple = v127;
        triple?.[0];
        triple?.[1];
        triple?.[2];
    }
}
const v136 = { x: 0.7, p: "forty-two", y: null, z: undefined };
try { check(v136); } catch (e) {}
const v139 = Object.prototype;
try { check(v139); } catch (e) {}
b = [,,2,3];
b.expando = true;
b[5] = 5;
b[0] = 0;
b[4] = 4;
const v153 = [,,,,,,6];
let v154;
try { v154 = check(b); } catch (e) {}
try { v154(v153); } catch (e) {}
