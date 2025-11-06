let arr = [1.5,2.5];
function f5() {
    arr.length = 0;
    return 2;
}
arr.slice(0, { valueOf: f5 });
