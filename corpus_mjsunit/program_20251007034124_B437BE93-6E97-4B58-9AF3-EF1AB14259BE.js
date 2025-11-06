var z = 0;
function f() {
    function f3() {
    }
    this.b = f3;
    this.b = undefined;
    if (z++ > 8) {
        this.b();
    }
}
try {
    for (let i13 = 0; i13 < 10; i13++) {
        new f();
    }
} catch(e20) {
}
