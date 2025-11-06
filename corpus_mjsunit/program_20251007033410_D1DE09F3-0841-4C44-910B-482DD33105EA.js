var Failed = 0;
function FAILED() {
    Failed++;
}
function test(a5, a6) {
    if (((a5 | 0) >>> 0) > ((a6 | 0) >>> 0)) {
        return true;
    } else {
        return false;
    }
}
function foo() {
    return 1;
}
function bar() {
    return -1;
}
function test2(a24, a25) {
    if (((a24 | 0) >>> 0) > ((a25() | 0) >>> 0)) {
        return true;
    } else {
        return false;
    }
}
for (let i39 = 0; i39 < 50; i39++) {
    if (!test(-1, 1)) {
        FAILED();
    }
    if (!test2(-1, foo)) {
        FAILED();
    }
}
if (test(1, -1)) {
    FAILED();
}
if (!test(-1, (-1 >>> 0) + 10)) {
    FAILED();
}
if (test2(1, bar)) {
    FAILED();
}
if (Failed == 0) {
    print("Passed");
} else {
    print("FAILED");
}
