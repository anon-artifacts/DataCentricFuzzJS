function f0() {
    var x;
    x = arguments.length;
    function f5() {
        const v7 = [1];
        const v9 = arguments.length;
        x = v9;
        v7[v9];
    }
    return f5;
}
f0.call().apply();
