function test4() {
    const v3 = 1 % {};
    with ({ x: v3 }) {
        for (let i6 = 0; i6 < 1; i6++) {
        }
    }
}
test4();
test4();
print("PASS");
