function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
function shouldThrow(a9, a10) {
    var error = null;
    try {
        a9();
    } catch(e14) {
        error = e14;
    }
    if (!error) {
        const v18 = new Error("not thrown.");
        throw v18;
    }
    if (String(error) !== a10) {
        const v26 = new Error("bad error: " + String(error));
        throw v26;
    }
}
const v29 = new Array(10);
var array = v29;
for (let i32 = 0; i32 < 10; ++i32) {
    function f38(a39) {
        var seenOnce = false;
        const v48 = {
            get() {
                if (seenOnce) {
                    const v46 = new Error("get is called." + a39);
                    throw v46;
                }
                seenOnce = true;
                return a39;
            },
        };
        Object.defineProperty(array, a39, v48);
    }
    f38(i32);
}
shouldBe(array.length, 10);
function f55(a56) {
    return a56 === 9;
}
var findValue = array.find(f55);
shouldBe(findValue, 9);
for (let i64 = 0; i64 < 10; ++i64) {
    function f70() {
        var value = array[i64];
    }
    shouldThrow(f70, "Error: get is called." + i64);
}
