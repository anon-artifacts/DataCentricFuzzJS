var gTestfile = "set-object-funky-length-detaches.js";
var BUGNUMBER = 991981;
var summary = ("%TypedArray%.prototype.set(object w/funky length property, offset) " + "shouldn't misbehave if the funky length property detaches this typed ") + "array's buffer";
print((BUGNUMBER + ": ") + summary);
var ctors = [Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];
function f26(a27) {
    const v32 = new ArrayBuffer(512 * 1024);
    var buf = v32;
    const v34 = new a27(buf);
    var ta = v34;
    const v50 = {
        0: 17,
        1: 42,
        2: 3,
        3: 99,
        4: 37,
        5: 9,
        6: 72,
        7: 31,
        8: 22,
        9: 0,
        get length() {
            detachArrayBuffer(buf);
            return 10;
        },
    };
    var arraylike = v50;
    var passed = false;
    try {
        ta.set(arraylike, 4660);
    } catch(e56) {
        passed = true;
    }
}
ctors.forEach(f26);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
