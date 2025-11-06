function f() {
    try {
        f();
    } catch(e2) {
        try {
            const v4 = {};
            Map.prototype.forEach.call("", v4);
        } catch(e9) {
        }
    }
}
f();
