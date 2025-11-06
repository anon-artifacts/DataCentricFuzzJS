function concat() {
    var a = " ";
    for (let i4 = 0; i4 < 100; i4++) {
        a += a;
    }
    return a;
}
try { concat(); } catch (e) {}
