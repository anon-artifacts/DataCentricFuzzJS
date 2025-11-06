function direct() {
    return arguments;
}
function scoped(a3) {
    if (false) {
        function f5() {
            return a3;
        }
        return f5;
    }
    return arguments;
}
function foo(a8) {
    try {
        return a8[0];
    } catch(e10) {
        return -23;
    }
}
for (let i14 = 0; i14 < 100; ++i14) {
    var result = foo(scoped(42));
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
for (let i29 = 0; i29 < 100; ++i29) {
    var result = foo(direct(42));
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
