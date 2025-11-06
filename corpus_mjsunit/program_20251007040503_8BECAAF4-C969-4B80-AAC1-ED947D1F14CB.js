var typedArrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array];
function CheckTypedArrayIsDetached(a12) {
    a12?.byteLength;
    a12?.byteOffset;
    a12?.length;
}
function TestTypedArrayForEach(a20) {
    a20?.prototype?.every?.length;
    let v26;
    try { v26 = new a20(3); } catch (e) {}
    var a = v26;
    a[0] = 0;
    a[1] = 1;
    a[2] = 2;
    function f31(a32) {
        return a32 < 2;
    }
    let v35;
    try { v35 = a.every(f31); } catch (e) {}
    var result = v35;
    function f37(a38) {
        return a38 > 2;
    }
    let v41;
    try { v41 = a.every(f37); } catch (e) {}
    var result = v41;
    function f43(a44) {
        return a44 >= 0;
    }
    let v47;
    try { v47 = a.every(f43); } catch (e) {}
    var result = v47;
    var o = { value: 42 };
    function f53(a54, a55, a56) {
        return (a54 == a55) && (a54 < this?.value);
    }
    let v62;
    try { v62 = a.every(f53, o); } catch (e) {}
    result = v62;
    count = 0;
    function f66() {
        count++;
        return false;
    }
    let v70;
    try { v70 = a.every(f66); } catch (e) {}
    result = v70;
    count = 0;
    function f74(a75, a76, a77) {
        a77[a76] = a75 + 1;
        count++;
        return true;
    }
    let v82;
    try { v82 = a.every(f74); } catch (e) {}
    result = v82;
    [1,2,3];
    function CheckWrapping(a90, a91) {
        let v92;
        try { v92 = new a91(a90); } catch (e) {}
        var wrappedValue = v92;
        function f94() {
            'object';
            typeof this;
        }
        try { a.every(f94, a90); } catch (e) {}
        function f99() {
            'use strict';
            typeof a90;
            typeof this;
        }
        try { a.every(f99, a90); } catch (e) {}
    }
    try { CheckWrapping(true, Boolean); } catch (e) {}
    try { CheckWrapping(false, Boolean); } catch (e) {}
    try { CheckWrapping("xxx", String); } catch (e) {}
    try { CheckWrapping(42, Number); } catch (e) {}
    try { CheckWrapping(3.14, Number); } catch (e) {}
    const v118 = {};
    try { CheckWrapping(v118, Object); } catch (e) {}
    count = 0;
    let v123;
    try { v123 = new a20(3); } catch (e) {}
    a = v123;
    function f124(a125, a126, a127) {
        a127?.[a126] === undefined;
        a127[a126] = a125 + 1;
        count++;
        return count > 1 ? a127?.[a126] === undefined : true;
    }
    let v141;
    try { v141 = a.every(f124); } catch (e) {}
    result = v141;
    try { CheckTypedArrayIsDetached(a); } catch (e) {}
    a?.[0];
    let v148;
    try { v148 = new a20(5); } catch (e) {}
    a = v148;
    a[0] = 42;
    function f150(a151, a152, a153) {
        if (a152 == 2) {
            const v157 = a153?.buffer;
            let v158;
            try { v158 = new a20(v157); } catch (e) {}
            v158[(a152 + 1) % 5] = 42;
        } else {
            a[(a152 + 1) % 5] = 42;
        }
        return a151 == 42;
    }
    let v170;
    try { v170 = a.every(f150); } catch (e) {}
    result = v170;
    let v174;
    try { v174 = new ArrayBuffer(64); } catch (e) {}
    let v175;
    try { v175 = new a20(v174); } catch (e) {}
    a = v175;
    count = 0;
    function f177(a178) {
        return a178 == 0;
    }
    let v181;
    try { v181 = a.every(f177); } catch (e) {}
    result = v181;
    let v184;
    try { v184 = new a20(2); } catch (e) {}
    a = v184;
    count = 0;
    var buffer;
    function f188(a189, a190, a191) {
        if (count++ > 0) {
            buffer = a191?.buffer;
        }
        return true;
    }
    try { a.every(f188); } catch (e) {}
    !(!buffer);
    a?.buffer;
    function f202() {
        const v206 = [1,2,3];
        function f207(a208) {
        }
        const v210 = a20?.prototype?.every;
        try { v210.call(v206, f207); } catch (e) {}
    }
    try { f202(); } catch (e) {}
    function f214() {
        function f216(a217) {
        }
        const v219 = a20?.prototype?.every;
        try { v219.call("abc", f216); } catch (e) {}
    }
    try { f214(); } catch (e) {}
    function f222() {
        const v223 = {};
        function f224(a225) {
        }
        const v227 = a20?.prototype?.every;
        try { v227.call(v223, f224); } catch (e) {}
    }
    try { f222(); } catch (e) {}
    function f230() {
        function f232(a233) {
        }
        const v235 = a20?.prototype?.every;
        try { v235.call(0, f232); } catch (e) {}
    }
    try { f230(); } catch (e) {}
    for (let i239 = 0; i239 < typedArrayConstructors?.length; i239++) {
        count = 0;
        const v246 = typedArrayConstructors?.[i239];
        let v248;
        try { v248 = new v246(4); } catch (e) {}
        a = v248;
        function f249(a250) {
            count++;
            return true;
        }
        const v254 = a20?.prototype?.every;
        try { v254.call(a, f249); } catch (e) {}
        a?.length;
    }
    const v259 = [1,2];
    let v260;
    try { v260 = new a20(v259); } catch (e) {}
    a = v260;
    const v263 = { value: 1 };
    try { Object.defineProperty(a, "length", v263); } catch (e) {}
    var x = 0;
    function f267(a268) {
        x += a268;
        return true;
    }
    try { a.every(f267); } catch (e) {}
    function f273(a274) {
        x += a274;
        return true;
    }
    const v278 = Array?.prototype?.every;
    try { v278.call(a, f273); } catch (e) {}
    const v292 = [1,2,3,4,5,6,7,8,9,10];
    let v293;
    try { v293 = new a20(v292); } catch (e) {}
    var array = v293;
    const v295 = () => {
        const v296 = () => {
            return true;
        };
        let v298;
        try { v298 = array.every(v296); } catch (e) {}
        return v298;
    };
    try { v295(); } catch (e) {}
}
for (i = 0; i < typedArrayConstructors?.length; i++) {
    const v308 = typedArrayConstructors?.[i];
    try { TestTypedArrayForEach(v308); } catch (e) {}
}
