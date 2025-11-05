console.log("Test for (foo in somethingWhichThrows) to catch ASSERT");
function throwNullException() {
    throw null;
}
function throwUndefinedException() {
    throw undefined;
}
function throwStringException() {
    throw "PASSED";
}
function test(a10) {
    for (const v12 in a10()) {
        console.log("Shoud not be reached");
    }
}
try {
    test(throwUndefinedException);
} catch(e16) {
}
try {
    test(throwNullException);
} catch(e18) {
}
try {
    test(throwStringException);
} catch(e20) {
}
