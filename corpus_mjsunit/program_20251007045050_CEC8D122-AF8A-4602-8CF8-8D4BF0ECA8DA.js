var gTestfile = "DataView-set-arguments-detaching.js";
var BUGNUMBER = 991981;
var summary = "DataView.prototype.set* methods shouldn't misbehave horribly if " + "index-argument conversion detaches the ArrayBuffer being modified";
print((BUGNUMBER + ": ") + summary);
function testIndex() {
    const v16 = new ArrayBuffer(4096);
    var ab = v16;
    const v19 = new DataView(ab);
    var dv = v19;
    function f21() {
        detachArrayBuffer(ab);
        gc();
        return 4095;
    }
    var start = { valueOf: f21 };
    var ok = false;
    try {
        dv.setUint8(start, 66);
    } catch(e33) {
        ok = true;
    }
    ab.byteLength;
}
testIndex();
function testValue() {
    const v44 = new ArrayBuffer(1048576);
    var ab = v44;
    const v47 = new DataView(ab);
    var dv = v47;
    function f49() {
        detachArrayBuffer(ab);
        gc();
        return 66;
    }
    var value = { valueOf: f49 };
    var ok = false;
    try {
        dv.setUint8(1048575, value);
    } catch(e61) {
        ok = true;
    }
    ab.byteLength;
}
testValue();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
