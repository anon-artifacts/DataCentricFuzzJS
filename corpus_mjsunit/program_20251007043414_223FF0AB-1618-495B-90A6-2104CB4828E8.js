function testBug465688() {
    for (const v6 of [-2147483648,-2147483648]) {
        -(-v6);
    }
    return true;
}
testBug465688();
