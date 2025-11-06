function getRoundValue(a1) {
    if (!(a1 == 0)) {
        return a1.toFixed();
    }
}
function formatOutput(a7) {
    const v8 = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g;
    function f9() {
        return getRoundValue(parseFloat());
    }
    return a7.replace(v8, f9);
}
print(0);
print(0);
