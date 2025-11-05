function foo() {
    var x = 0;
    var y = 0;
    const v7 = new Float32Array(1);
    var a = v7;
    function bar() {
        x = y;
        y = a[0];
    }
    for (let i12 = 0; i12 < 1000; i12++) {
        bar();
    }
}
for (let i20 = 0; i20 < 50; i20++) {
    foo();
}
