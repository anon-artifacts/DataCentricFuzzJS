function f() {
    var _L1 = arguments;
    for (let i4 = 0; i4 < _L1.length; i4++) {
        if (typeof _L1[i4] == "string") {
            const v15 = new Object();
            _L1[i4] = v15;
        }
    }
    print(arguments[2]);
}
f(1, 2, "3", 4, 5);
f(1, 2, "3", 4, 5);
f(1, 2, "3", 4, 5);
f(1, 2, "3", 4, 5);
