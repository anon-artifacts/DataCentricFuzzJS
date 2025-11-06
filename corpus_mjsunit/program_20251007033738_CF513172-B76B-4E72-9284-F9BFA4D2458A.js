const v2 = new Set("abcd");
var set = v2;
var iter = set[Symbol.iterator]();
var log = "";
for (const v10 of iter) {
    log += v10;
    if (v10 === "b") {
        set.delete("c");
    }
}
