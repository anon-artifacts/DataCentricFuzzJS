function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var errorThrown = false;
    var error = null;
    try {
        a4();
    } catch(e11) {
        errorThrown = true;
        error = e11;
    }
}
{
    const v15 = {
        toString() {
            return "C";
        },
    };
    let object = v15;
    shouldBe(String.prototype.repeat.call(object, 2.5), "CC");
    const v25 = -0;
    shouldBe(String.prototype.repeat.call(object, v25), "");
    shouldBe(String.prototype.repeat.call(object, 1), "C");
    const v39 = {
        valueOf() {
            return 2.5;
        },
    };
    shouldBe(String.prototype.repeat.call(object, v39), "CC");
    const v45 = () => {
        const v50 = {
            valueOf() {
                const v49 = new Error("OK");
                throw v49;
            },
        };
        String.prototype.repeat.call(object, v50);
    };
    shouldThrow(v45, `Error: OK`);
}
{
    shouldBe(String.prototype.repeat.call("", 0), "");
    shouldBe(String.prototype.repeat.call("", 68719476735), "");
    const v71 = () => {
        String.prototype.repeat.call("", Infinity);
    };
    shouldThrow(v71, `RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity`);
    const v79 = () => {
        const v82 = -2000;
        String.prototype.repeat.call("", v82);
    };
    shouldThrow(v79, `RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity`);
}
