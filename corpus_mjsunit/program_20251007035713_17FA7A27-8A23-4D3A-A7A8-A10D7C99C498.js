testcase();
function testcase() {
    const v6 = {
        get try() {
            try {
                super.actual();
            } catch(e5) {
            }
        },
    };
    var tokenCodes = v6;
    var arr = ["try"];
    for (let i12 = 0; i12 < arr.length; i12++) {
        if (tokenCodes[arr[i12]] !== i12) {
        }
    }
}
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
