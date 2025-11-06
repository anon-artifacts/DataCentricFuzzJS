console.log("This tests that a call to array.sort(compareFunction) works correctly for numeric comparisons (arg1 - arg2), and also for things that might look like numeric comparisons.");
function doSort(a4, a5) {
    return a4 - a5;
}
function dontSort(a8, a9, a10) {
    return a9 - a10;
}
([3,1,5,2,4]).sort(doSort);
([3,1,5,2,4]).sort(dontSort);
