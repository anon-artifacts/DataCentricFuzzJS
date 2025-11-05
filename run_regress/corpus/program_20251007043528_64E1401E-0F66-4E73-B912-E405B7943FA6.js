function jit(a1) {
    const v2 = /tracejit/;
    if (a1 && !options().match(v2)) {
    }
}
try {
    test();
} catch(e10) {
}
function test() {
    for (let i13 = 0; i13 < 5; ++i13) {
        switch (1.1) {
            case 2:
            case NaN:
        }
    }
    jit(false);
    const v26 = new j("(x+)(x*)");
    reportCompare(("xxxxxxx").test(v26));
}
