try {
    const v1 = Symbol();
    const v3 = {};
    const v5 = {
        get() {
        },
    };
    const v6 = new Proxy(v3, v5);
    String.fromCharCode(v1, v6);
} catch(e9) {
}
