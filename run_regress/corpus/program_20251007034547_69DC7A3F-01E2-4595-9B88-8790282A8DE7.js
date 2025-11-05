console.log("This tests that sort(compareFn) is a stable sort.");
var count = 100;
var ones = [];
for (let i8 = 0; i8 < count; ++i8) {
    const v15 = new Number(1);
    ones.push(v15);
}
var twos = [];
for (let i20 = 0; i20 < count; ++i20) {
    const v27 = new Number(2);
    twos.push(v27);
}
var array = [];
for (let i32 = 0; i32 < count; ++i32) {
    array.push(ones[i32]);
    array.push(twos[i32]);
}
function f41(a42, a43) {
    return a42 - a43;
}
array.sort(f41);
for (let i47 = 0; i47 < count; ++i47) {
    array[i47];
}
for (let i54 = 0; i54 < count; ++i54) {
    array[count + i54];
}
