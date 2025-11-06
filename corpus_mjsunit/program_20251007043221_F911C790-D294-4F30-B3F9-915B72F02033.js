function testNestedForIn() {
    var a = { x: 1, y: 2, z: 3 };
    var s = "";
    for (const v8 in a) {
        for (const v9 in a) {
            s += (v8 + v9) + " ";
        }
    }
    return s;
}
testNestedForIn();
