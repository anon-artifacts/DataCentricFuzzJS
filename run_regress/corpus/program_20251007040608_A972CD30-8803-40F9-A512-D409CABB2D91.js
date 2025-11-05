function f() {
    try {
        throw "boom";
    } catch(e2) {
    }
}
f();
f();
f();
