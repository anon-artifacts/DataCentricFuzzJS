test();
function test() {
    const v5 = { e: "foo" };
    v5[Symbol.unscopables] = 448595;
    with (v5) {
        var e = "wibble";
    }
    return test;
}
