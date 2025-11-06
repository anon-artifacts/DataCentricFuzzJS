function f() {
    try {
        for (let i2 = 7; i2 > -2; i2--) {
            const v11 = new Array(i2);
            v11.join("*");
        }
    } catch(e13) {
        return e13 instanceof RangeError;
    }
    return false;
}
f();
