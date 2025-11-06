function test(a1) {
    let x = 0;
    for (let i6 = 0, i7 = a1.length; i6 < i7; i6++) {
        x += a1[i6];
    }
    return x;
}
test([10.1,10.2,10.3,10.4,10]);
