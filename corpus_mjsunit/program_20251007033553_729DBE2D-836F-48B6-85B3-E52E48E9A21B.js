const v2 = new Int32Array(100);
var dummy = v2;
const v5 = new Int32Array(100);
array = v5;
const v8 = new Int32Array(100);
var dummy2 = v8;
array[-17] = 0;
function fun(a15, a16) {
    array[a15 - 1] = 1;
    array[a15 - 2] = 2;
    if (a16) {
        array[a15 - 4] = 3;
        array[a15 - 5] = 4;
    } else {
        array[a15 - 6] = 5;
        array[a15 - 100] = 777;
    }
}
fun(5, true);
fun(7, false);
fun(7, false);
for (let i45 = 0; i45 < dummy.length; i45++) {
    dummy[i45];
}
for (let i54 = 0; i54 < dummy2.length; i54++) {
    dummy2[i54];
}
