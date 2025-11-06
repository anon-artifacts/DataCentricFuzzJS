function reportCompare(a1, a2) {
    if (a1 != a2) {
    }
}
function exitFunc(a5) {
    return reportCompare(undefined, "");
}
reportCompare("", "");
exitFunc();
