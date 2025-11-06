function test0() {
    const v3 = new Int32Array(256);
    var i32 = v3;
    var __loopvar1 = 0;
    for (const v7 in i32) {
        if (v7.indexOf("method") != -1) {
            continue;
        }
        if (__loopvar1++ > 3) {
            break;
        }
        i32[v7] = -684194670.9 * 1;
    }
}
test0();
test0();
print("pass");
