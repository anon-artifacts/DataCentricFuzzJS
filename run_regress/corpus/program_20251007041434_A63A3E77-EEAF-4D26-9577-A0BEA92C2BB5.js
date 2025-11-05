console.log("This tests that common subexpression elimination knows to be conservative when getters are involved.");
var array = [1,2,3];
var counter = 2;
function f11() {
    counter++;
    array[1] = counter;
    return 72;
}
array.__defineGetter__("foo", f11);
function doSomeGets(a16) {
    return (a16[1] + a16["foo"]) + a16[1];
}
for (let i24 = 0; i24 < 1000; ++i24) {
    doSomeGets(array);
    array[1];
}
