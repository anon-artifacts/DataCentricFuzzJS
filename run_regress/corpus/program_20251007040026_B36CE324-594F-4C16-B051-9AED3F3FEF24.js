function test(a1) {
    return +a1;
}
var result = 0;
for (let i6 = 0; i6 < 10000; ++i6) {
    result = test(i6.toString());
}
var result = 0;
for (let i17 = 0; i17 < 10000; ++i17) {
    result = test(i17);
}
var result = 0;
for (let i27 = 0; i27 < 10000; ++i27) {
    result = test(i27.toString());
}
var result = 0;
for (let i38 = 0; i38 < 10000; ++i38) {
    result = test(i38);
}
