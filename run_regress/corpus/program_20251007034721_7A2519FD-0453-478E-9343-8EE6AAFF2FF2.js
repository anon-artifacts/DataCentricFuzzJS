function f0() {
}
var BUGNUMBER = 23612;
test();
function test() {
    f0("Unicode Characters 1C-1F with regexps test.");
    f0(BUGNUMBER);
    var ary = ["foo","foo","foo","foo"];
    for (const v15 in ary) {
        const v17 = /^\Sfoo$/;
        f0(0, ary[Number(v15)].search(v17), ("Unicode characters 1C-1F in regexps, ary[" + v15) + "] did not match \S test (it should not.)");
        const v28 = -1;
        const v29 = /^\sfoo$/;
        f0(v28, ary[Number(v15)].search(v29), ("Unicode characters 1C-1F in regexps, ary[" + v15) + "] matched \s test (it should not.)");
    }
}
