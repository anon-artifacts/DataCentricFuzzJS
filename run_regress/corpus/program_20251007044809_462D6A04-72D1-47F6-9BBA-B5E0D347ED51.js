function test2() {
    x = 10;
}
try {
    test2();
} catch(e4) {
    print(e4);
}
function f10() {
    return false;
}
Object.defineProperty(this, "accessor", { configurable: true, get: f10 });
try {
    test2();
} catch(e16) {
    print(e16);
}
