function test() {
    var obj = { x: true };
    for (let i5 = 0; i5 < 10; i5++) {
        delete obj.x;
    }
}
test();
