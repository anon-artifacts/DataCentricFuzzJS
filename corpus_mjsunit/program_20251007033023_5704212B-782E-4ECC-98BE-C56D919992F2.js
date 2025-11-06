console.log("This tests that a call to array.sort(compareFunction) does not crash from within a sort comparison function.");
var numbers1 = [1,2,3,4,5,6,7];
var numbers2 = numbers1.slice();
function compareFn1(a15, a16) {
    return a16 - a15;
}
function compareFn2(a19, a20) {
    numbers1.sort(compareFn1);
    return a20 - a19;
}
numbers2.sort(compareFn2);
