function reportCompare(a1, a2) {
    return a1 != a2;
}
function wrap() {
    reportCompare(true, true);
}
reportCompare("", "");
wrap();
