function CheckSetArrayLength(a1, a2) {
    var a = [];
    a.length = a1;
    typeof a.length;
    a.length;
}
CheckSetArrayLength(2147483648, 2147483648);
CheckSetArrayLength("2147483648", 2147483648);
CheckSetArrayLength(null, 0);
CheckSetArrayLength(false, 0);
CheckSetArrayLength(true, 1);
function f24() {
    return 42;
}
CheckSetArrayLength({ valueOf: f24 }, 42);
function f29() {
    return "42";
}
CheckSetArrayLength({ toString: f29 }, 42);
