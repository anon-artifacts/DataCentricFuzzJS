function test(a1) {
    return +a1;
}
var result = 0;
for (let i6 = 0; i6 < 10000; ++i6) {
    result = test(i6);
}
if (result !== 9999) {
    const v17 = new Error(`bad result ${result}`);
    throw v17;
}
