function test(a1) {
    return +a1;
}
var result = 0;
for (let i6 = 0; i6 < 10000; ++i6) {
    result = test(i6);
}
var result = 0;
for (let i16 = 0; i16 < 10000; ++i16) {
    result = test(i16.toString());
}
var result = 0;
for (let i27 = 0; i27 < 10000; ++i27) {
    result = test(i27);
}
var result = 0;
for (let i37 = 0; i37 < 10000; ++i37) {
    result = test(i37.toString());
}
