function testUKeyUObject(a1, a2, a3, a4) {
    -1;
    try { a1[a1](); } catch (e) {}
}
for (let i10 = 0; i10 < 5; i10++) {
    testUKeyUObject({}, "a", "b", "c");
}
