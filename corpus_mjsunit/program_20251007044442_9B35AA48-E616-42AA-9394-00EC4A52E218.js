const v1 = new Set();
var s = v1;
var it = s[Symbol.iterator]();
s.clear();
const v14 = new Set(["a","b","c","d"]);
s = v14;
it = s[Symbol.iterator]();
s.clear();
var log = "";
const v27 = new Set(["a","b","c","d"]);
s = v27;
for (const v28 of s) {
    log += v28;
    if (v28 == "b") {
        s.clear();
    }
}
