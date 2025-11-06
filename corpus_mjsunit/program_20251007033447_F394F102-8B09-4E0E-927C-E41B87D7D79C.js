var isPassed1 = false;
var isPassed2 = false;
function test1() {
    try {
        for (const v13 in Object(Math.imul(1073741824, Object(Symbol())))) {
        }
    } catch(e14) {
        if (e14 instanceof TypeError) {
            if (e14.message === "Number expected") {
                isPassed1 = true;
            }
        }
    }
}
function test2() {
    const v23 = new Uint8Array();
    ejdmhf_0 = v23;
    try {
        ejdmhf_0[50341] = Symbol();
    } catch(e28) {
        if (e28 instanceof TypeError) {
            if (e28.message === "Number expected") {
                isPassed2 = true;
            }
        }
    }
}
test1();
test2();
test2();
test2();
print(isPassed1 ? "PASS" : "FAIL");
print(isPassed2 ? "PASS" : "FAIL");
