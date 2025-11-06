function f0() {
}
if ((typeof gczeal != "undefined") && (typeof gc != "undefined")) {
    try {
        gczeal(2);
        var obj = {};
        for (let i15 = 0; i15 < 50; i15++) {
            obj["_" + i15] = 0;
            gc();
        }
    } catch(e25) {
    }
    gczeal(0);
}
f0("no assertion failure", "no assertion failure", "bug 524743");
