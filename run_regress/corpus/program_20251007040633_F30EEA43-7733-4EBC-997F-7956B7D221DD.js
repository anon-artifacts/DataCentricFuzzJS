try {
    function f0(a1, a2) {
        a2.some();
    }
    Error.prepareStackTrace = f0;
} catch(e6) {
}
