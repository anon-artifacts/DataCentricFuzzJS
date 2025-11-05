const v1 = new Set();
var set = v1;
var SIZE = 7;
for (let i6 = 0; i6 < SIZE; i6++) {
    set.add(i6);
}
var NITERS = 5;
var iters = [];
for (let i17 = 0; i17 < NITERS; i17++) {
    var iter = set[Symbol.iterator]();
    iters[i17] = iter;
}
for (let i29 = 0; i29 < SIZE; i29 += 2) {
    set.delete(i29);
}
for (let i36 = 0; i36 < NITERS; i36++) {
    var iter = iters[i36];
    for (let i44 = 3; i44 < SIZE; i44 += 2) {
    }
}
