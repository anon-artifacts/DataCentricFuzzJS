function* gen() {
    try {
        yield 3;
    } finally {
        quit();
    }
}
try {
    for (const v6 of gen()) {
        foo();
    }
} catch(e9) {
}
