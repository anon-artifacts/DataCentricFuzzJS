function ArrayMaker(a1) {
    return a1;
}
ArrayMaker.prototype = Array?.prototype;
var arrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array,ArrayMaker];
function assertArrayLikeEquals(a16, a17, a18) {
    a16?.__proto__;
    a18?.prototype;
    a17?.length;
    a16?.length;
    for (let i24 = 0; i24 < a16?.length; ++i24) {
        a17?.[i24];
        a16?.[i24];
    }
}
for (const v32 of arrayConstructors) {
    const v36 = [1,2,3];
    let v37;
    try { v37 = new v32(v36); } catch (e) {}
    var a = v37;
    try { a.reverse(); } catch (e) {}
    [3,2,1];
    [3,2,1];
    const v52 = [1,2,3,4];
    let v53;
    try { v53 = new v32(v52); } catch (e) {}
    a = v53;
    try { a.reverse(); } catch (e) {}
    [4,3,2,1];
    [4,3,2,1];
    if (v32 != ArrayMaker) {
        function f66() {
            const v68 = { length: 0 };
            const v69 = a?.reverse;
            try { v69.call(v68); } catch (e) {}
        }
        try { f66(); } catch (e) {}
    } else {
        var x = { length: 2, 1: 5 };
        const v77 = a?.reverse;
        try { v77.call(x); } catch (e) {}
        x?.length;
        try { Object.hasOwnProperty(x, "1"); } catch (e) {}
        x?.[0];
    }
    a?.reverse?.length;
    if (v32 != ArrayMaker) {
        const v100 = [1,2,3,4,5,6,7,8,9,10];
        let v101;
        try { v101 = new v32(v100); } catch (e) {}
        var array = v101;
        const v103 = () => {
            let v104;
            try { v104 = array.reverse(); } catch (e) {}
            return v104;
        };
        try { v103(); } catch (e) {}
    }
}
