const v8 = new Map([["a","b"],["b","c"]]);
var m = v8;
m.size;
m.clear();
m.size;
m.has("a");
m.get("a");
m.delete("a");
m.has("b");
for (const v27 of m) {
    throw "FAIL";
}
m.set("c", "d");
m.size;
m.has("a");
m.has("b");
