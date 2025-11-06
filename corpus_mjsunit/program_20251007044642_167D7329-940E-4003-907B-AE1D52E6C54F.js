var arrays = [[],[1],[1,2],[1,2,3],[1,2,3,4]];
function test() {
    for (let i19 = 0; i19 < arrays.length; i19++) {
        var array = arrays[i19];
        Math.max(array.length, 0);
        Math.max(0, array.length);
        Math.max(array.length, -1);
        Math.max(-1, array.length);
        Math.max(array.length, -1.5);
        Math.max(-1.5, array.length);
    }
}
test();
test();
