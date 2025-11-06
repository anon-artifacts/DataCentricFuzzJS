function A() {
    for (let i2 = 0; i2 < 13; i2++) {
        this["a" + i2] = i2;
    }
    function f11() {
    }
    this.i = f11;
}
new A();
new A();
