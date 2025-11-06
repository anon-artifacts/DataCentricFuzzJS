SECTION = 0;
function TestCase() {
}
function outer_func(a4) {
    var y = "inner";
    const v8 = ++y;
    new TestCase(SECTION, { SECTION: v8 });
}
outer_func(1111);
