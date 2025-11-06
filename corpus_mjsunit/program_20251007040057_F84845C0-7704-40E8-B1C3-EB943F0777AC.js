function f0() {
}
try {
    evalcx("Object.freeze(this); eval('const q = undefined;')");
} catch(e4) {
    e4.message;
}
f0(0, 0, "don't crash");
