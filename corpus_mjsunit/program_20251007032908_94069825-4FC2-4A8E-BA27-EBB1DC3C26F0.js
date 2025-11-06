const v3 = new Set(["a"]);
var set = v3;
var n = 5;
for (const v7 of set) {
    if (n === 0) {
        break;
    }
    set.delete("a");
    set.add("a");
    n--;
}
