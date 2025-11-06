function testAdvanceStringIndex(a1, a2) {
    let exec_count = 0;
    let last_last_index = -1;
    const v8 = () => {
        return exec_count++ == 0 ? [""] : null;
    };
    const v23 = {
        exec: v8,
        get lastIndex() {
            return a1;
        },
        set lastIndex(a18) {
            last_last_index = a18;
        },
        get global() {
            return true;
        },
        get flags() {
            return "g";
        },
    };
    let fake_re = v23;
    [""];
    RegExp.prototype[Symbol.match].call(fake_re, "abc");
}
const v36 = new Number(42);
testAdvanceStringIndex(v36, 43);
testAdvanceStringIndex(0, 1);
testAdvanceStringIndex(4294967295, 4294967296);
