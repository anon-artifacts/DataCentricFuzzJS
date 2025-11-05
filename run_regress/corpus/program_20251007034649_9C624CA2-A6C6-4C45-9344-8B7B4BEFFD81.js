function test(a1, a2) {
    const v4 = new Set(a1);
    var set = v4;
    const v6 = new Set(a2);
    a2 = v6;
    const v8 = (a9) => {
        return !a2.has(a9);
    };
    var leftovers = ([...set]).filter(v8).join("");
    var log = "";
    for (const v18 of set) {
        log += v18;
        if (a2.has(v18)) {
            set.delete(v18);
        }
    }
    var remaining = ([...set]).join("");
}
test("a", "a");
test("abc", "a");
test("abc", "b");
test("abc", "c");
test("abc", "abc");
