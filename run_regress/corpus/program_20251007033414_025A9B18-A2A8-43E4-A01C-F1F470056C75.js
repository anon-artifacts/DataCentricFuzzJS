function test() {
    const re = /./y;
    re.lastIndex = 3;
    const str = "fg";
    return re[Symbol.replace](str, "$");
}
const fast = test();
const slow = test();
