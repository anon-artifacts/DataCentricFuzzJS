function sprod(a1, a2) {
    var iprod = Math.imul(a1 | 0, a2 | 0);
    var fprod = (a1 | 0) * (a2 | 0);
    return iprod + fprod;
}
sprod(2, 2);
sprod(65536, 65536);
