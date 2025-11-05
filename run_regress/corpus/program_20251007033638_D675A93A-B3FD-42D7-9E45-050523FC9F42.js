function foo(a1) {
    try {
    } catch(e2) {
        if (e2.name != "TypeError") {
            throw e2;
        }
    }
    try {
        Object.getPrototypeOf(a1);
    } catch(e8) {
    }
}
foo(true);
