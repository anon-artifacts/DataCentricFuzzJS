function bar(a1, a2) {
    try {
        return a1;
    } finally {
    }
}
function test_context() {
    function foo(a5) {
        return 42;
    }
    var s;
    var t;
    for (let i12 = 2147418112; i12 < 2147483648; i12++) {
        const v25 = foo(i12) ? bar((42 + i12) - i12) : bar(0);
        const v26 = i12 + (t = v25);
        s = v26;
        bar(v25, v26);
    }
    return s;
}
2147483647 + 42;
test_context();
function value_context() {
    function foo(a34) {
        return 42;
    }
    var s;
    var t;
    for (let i41 = 2147418112; i41 < 2147483648; i41++) {
        const v47 = foo(i41);
        const v48 = i41 + (t = v47);
        s = v48;
        bar(v47, v48);
    }
    return s;
}
2147483647 + 42;
value_context();
function effect_context() {
    function foo(a56) {
        return 42;
    }
    var s;
    var t;
    for (let i63 = 2147418112; i63 < 2147483648; i63++) {
        const v69 = foo(i63);
        const v71 = i63 + 42;
        s = v71;
        bar(v69, v71);
    }
    return s;
}
2147483647 + 42;
effect_context();
