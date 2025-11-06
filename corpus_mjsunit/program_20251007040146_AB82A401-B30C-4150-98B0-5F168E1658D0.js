function f0() {
}
if ((typeof gczeal != "undefined") && (typeof gc != "undefined")) {
    try {
        try {
            __defineGetter__("x", gc);
        } catch(e13) {
        }
        gczeal(1);
        const v19 = Array(-8);
        const t10 = f0(x);
        t10(v19);
    } catch(e23) {
    }
}
if (typeof gczeal !== "undefined") {
    gczeal(0);
}
f0("no assertion failure", "no assertion failure", "bug 563210");
