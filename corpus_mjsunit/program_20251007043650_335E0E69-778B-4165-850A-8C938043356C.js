var height = 267;
var count = 0;
function inner() {
    height = 0;
    ++count;
}
function outer() {
}
function test() {
    for (let i10 = 0; i10 < height; ++i10) {
        for (let i17 = -6; i17 < 7; ++i17) {
            if (((i10 + i17) < 0) || ((i10 + i17) >= height)) {
                continue;
            }
            for (let i31 = -6; i31 < 7; ++i31) {
                inner();
            }
        }
        outer();
    }
}
test();
