function f() {
    var input = [];
    var expected = [];
    function f5(a6, a7) {
        input.push(a6);
        expected.push(a7);
    }
    var add = f5;
    add(-0, 0);
    add(-0.1, 0);
    add(-0.7, 0);
    add(0.1, 0);
    add(NaN, 0);
    add(-Infinity, 0);
    add(Infinity, 255);
    add(0.7, 1);
    add(1.2, 1);
    add(3.5, 4);
    add(4.5, 4);
    add(254.4, 254);
    add(254.5, 254);
    add(254.6, 255);
    add(254.9, 255);
    add(255.1, 255);
    add(255.4, 255);
    add(255.5, 255);
    add(255.9, 255);
    var len = input.length;
    const v74 = new Uint8ClampedArray(len);
    var a = v74;
    for (let i77 = 0; i77 < len; i77++) {
        a[i77] = input[i77];
    }
    for (let i84 = 0; i84 < len; i84++) {
        a[i84];
        expected[i84];
        "Failed: " + input[i84];
    }
}
f();
f();
