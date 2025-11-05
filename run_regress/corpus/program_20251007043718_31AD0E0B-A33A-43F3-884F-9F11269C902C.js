const v6 = new Set(["a","b","c","d"]);
var s = v6;
for (const v8 of s) {
    if (v8 !== "c") {
        s.delete(v8);
    }
}
s.clear();
s.size;
s.has("c");
s.has("d");
