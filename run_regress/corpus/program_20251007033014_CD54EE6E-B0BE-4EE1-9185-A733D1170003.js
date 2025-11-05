function test() {
    function f1() {
        return 42.1;
    }
    var box = { call: f1 };
    for (let i6 = 0; i6 < 50; i6++) {
        box.call(undefined, 42.1);
    }
}
test();
