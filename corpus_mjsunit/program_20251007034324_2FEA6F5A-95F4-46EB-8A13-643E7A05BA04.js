function foo() {
    for (let i2 = 0; i2 < arguments.length; i2++) {
        if (arguments[i2] != (i2 + 1)) {
            print("FAIL");
        }
    }
    print("PASS");
}
