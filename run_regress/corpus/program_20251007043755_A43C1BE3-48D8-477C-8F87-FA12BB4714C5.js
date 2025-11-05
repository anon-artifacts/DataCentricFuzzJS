var result = 0;
function test1(a3) {
    return Array.of(...a3);
}
function test2() {
    return Array(...arguments);
}
var result = 0;
if (this.noInline) {
    noInline(test1);
    noInline(test2);
}
var array = [1,2,3,4,5];
for (let i25 = 0; i25 < 10000; i25++) {
    result ^= test2(1, 2, 3, 4, 5, 6, 7).length;
}
if (result != 0) {
    throw "Error: bad result: " + result;
}
