function foo() {
    throw "Error";
    return 1 > 5;
}
try {
    foo();
} catch(e6) {
}
try {
    foo();
} catch(e8) {
}
try {
    foo();
} catch(e10) {
}
