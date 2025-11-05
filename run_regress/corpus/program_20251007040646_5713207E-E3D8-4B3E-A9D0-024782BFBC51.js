function foo() {
    const v3 = new Int8Array(500);
    var a = v3;
    for (let i6 = 500; i6 < 1000; ++i6) {
        a[i6] = 0;
    }
}
foo();
foo();
print("PASSED");
