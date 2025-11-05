function nonEmptyStack1Helper(a1, a2) {
    var a = [];
    var j = 0;
    for (const v7 in a1) {
        a[j++] = v7;
    }
    return a.join("");
}
function nonEmptyStack1() {
    const v20 = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
    };
    return nonEmptyStack1Helper(v20, "hi");
}
nonEmptyStack1();
