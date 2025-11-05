function f1(a1) {
    var c = "fail";
    if (!a1 || g1()) {
        c = ~a1;
    }
    return c;
}
function g1() {
    try {
        return 1;
    } finally {
    }
}
for (let i12 = 0; i12 < 5; i12++) {
    f1(42);
}
-1;
f1(0);
-43;
f1(42);
-1;
f1("");
function f2(a33) {
    var c = "fail";
    if (!a33 || !g2()) {
        c = ~a33;
    }
    return c;
}
function g2() {
    try {
        return 0;
    } finally {
    }
}
for (let i45 = 0; i45 < 5; i45++) {
    f2(42);
}
-1;
f2("");
