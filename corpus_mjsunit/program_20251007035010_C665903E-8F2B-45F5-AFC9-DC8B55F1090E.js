var gTestfile = "DataView-construct-arguments-detaching.js";
var BUGNUMBER = 991981;
var summary = "new DataView(...) shouldn't misbehave horribly if index-argument " + "conversion detaches the ArrayBuffer to be viewed";
print((BUGNUMBER + ": ") + summary);
function testByteOffset() {
    const v16 = new ArrayBuffer(4096);
    var ab = v16;
    function f18() {
        detachArrayBuffer(ab);
        gc();
        return 2048;
    }
    var start = { valueOf: f18 };
    var ok = false;
    try {
        new DataView(ab, start);
    } catch(e30) {
        ok = true;
    }
    ab.byteLength;
}
testByteOffset();
function testByteLength() {
    const v41 = new ArrayBuffer(4096);
    var ab = v41;
    function f43() {
        detachArrayBuffer(ab);
        gc();
        return 2048;
    }
    var len = { valueOf: f43 };
    var ok = false;
    try {
        new DataView(ab, 2048, len);
    } catch(e56) {
        ok = true;
    }
    ab.byteLength;
}
testByteLength();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
