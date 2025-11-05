function f() {
    try {
        f();
    } catch(e2) {
        try {
        } catch(e3) {
            quit();
        }
    }
}
f();
