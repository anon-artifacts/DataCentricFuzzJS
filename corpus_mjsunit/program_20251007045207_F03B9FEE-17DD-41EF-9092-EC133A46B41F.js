try {
    function f(a2) {
        if (a2 > 0) {
            f(-1);
        }
    }
    let x = f(1);
} catch(e12) {
    e12 instanceof ReferenceError;
}
