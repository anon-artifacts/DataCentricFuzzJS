console.log("This test checks that uninitialized parameters for cached call functions correctly defaults to undefined.");
function doForEach(a4) {
    function callback(a6, a7, a8, a9, a10, a11) {
        try {
        } catch(e12) {
        }
        try {
        } catch(e13) {
        }
        try {
        } catch(e14) {
        }
    }
    a4.forEach(callback);
}
function callAfterRecursingForDepth(a17, a18, a19) {
    if (a17 > 0) {
        callAfterRecursingForDepth(a17 - 1, a18, a19);
    } else {
        a18(a19);
    }
}
var arr = [1];
callAfterRecursingForDepth(20, doForEach, arr);
