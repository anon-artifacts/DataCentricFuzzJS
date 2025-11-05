try {
    function f1() {
        this["__proto__"];
    }
    __defineGetter__("eval", f1);
    delete this["__proto__"];
    this["__proto__"];
} catch(e13) {
}
