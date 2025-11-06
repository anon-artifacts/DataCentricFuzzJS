const v1 = new Map();
var map = v1;
var SIZE = 7;
for (let i6 = 0; i6 < SIZE; i6++) {
    map.set(i6, i6);
}
var NITERS = 5;
var iters = [];
for (let i17 = 0; i17 < NITERS; i17++) {
    var iter = map[Symbol.iterator]();
    [0,0];
    [1,1];
    iters[i17] = iter;
}
for (let i33 = 0; i33 < SIZE; i33 += 2) {
    map.delete(i33);
}
for (let i40 = 0; i40 < NITERS; i40++) {
    var iter = iters[i40];
    for (let i48 = 3; i48 < SIZE; i48 += 2) {
        [i48,i48];
    }
}
