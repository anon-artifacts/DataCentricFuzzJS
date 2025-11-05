function* f() {
    x.__defineGetter__();
    var x = 0;
    for (const v6 of iterable) {
        yield v6;
    }
}
f();
