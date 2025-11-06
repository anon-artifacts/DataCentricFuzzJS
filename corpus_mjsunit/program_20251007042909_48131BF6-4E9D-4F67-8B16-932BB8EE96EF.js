console.log("This tests that common subexpression elimination knows how to accurately model PutBuVal.");
function doAccesses(a4, a5, a6, a7, a8) {
    var x = a4[a6];
    a5[a7] = a8;
    return a4[a6];
}
var array1 = [1,2,3,4];
var array2 = [5,6,7,8];
for (let i25 = 0; i25 < 1000; ++i25) {
    doAccesses(array1, array2, i25 % 4, (i25 + 1) % 4, i25);
    array2[(i25 + 1) % 4] === i25;
    const v47 = (i25 % 4) + 5;
    array2[(i25 + 1) % 4] = v47;
    doAccesses(array1, array1, i25 % 4, 0, i25);
    array1[0] = 1;
}
