function test(a1) {
    return Number(a1);
}
var result = 0;
for (let i7 = 0; i7 < 10000; ++i7) {
    result = test(i7);
}
if (result !== 9999) {
    const v18 = new Error(`bad result ${result}`);
    throw v18;
}
