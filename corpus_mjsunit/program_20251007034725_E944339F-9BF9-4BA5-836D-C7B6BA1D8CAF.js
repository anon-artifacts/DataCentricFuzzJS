var gTestfile = "typedarray-copyWithin-arguments-detaching.js";
var BUGNUMBER = 991981;
var summary = "%TypedArray.prototype.copyWithin shouldn't misbehave horribly if " + "index-argument conversion detaches the underlying ArrayBuffer";
print((BUGNUMBER + ": ") + summary);
function testBegin() {
    const v16 = new ArrayBuffer(4096);
    var ab = v16;
    function f18() {
        detachArrayBuffer(ab);
        return 2048;
    }
    var begin = { valueOf: f18 };
    const v25 = new Uint8Array(ab);
    var ta = v25;
    var ok = false;
    try {
        ta.copyWithin(0, begin, 4096);
    } catch(e32) {
        ok = true;
    }
    ab.byteLength;
}
testBegin();
function testEnd() {
    const v43 = new ArrayBuffer(4096);
    var ab = v43;
    function f45() {
        detachArrayBuffer(ab);
        return 4096;
    }
    var end = { valueOf: f45 };
    const v52 = new Uint8Array(ab);
    var ta = v52;
    var ok = false;
    try {
        ta.copyWithin(0, 2048, end);
    } catch(e59) {
        ok = true;
    }
    ab.byteLength;
}
testEnd();
function testDest() {
    const v70 = new ArrayBuffer(4096);
    var ab = v70;
    function f72() {
        detachArrayBuffer(ab);
        return 0;
    }
    var dest = { valueOf: f72 };
    const v79 = new Uint8Array(ab);
    var ta = v79;
    var ok = false;
    try {
        ta.copyWithin(dest, 2048, 4096);
    } catch(e86) {
        ok = true;
    }
    ab.byteLength;
}
testDest();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
