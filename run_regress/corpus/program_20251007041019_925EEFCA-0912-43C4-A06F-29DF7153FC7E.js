var a = [1,2,3,4,5];
function foo(a8) {
    var filled = 0;
    for (let i12 = 0; i12 < a8.length; ++i12) {
        if (i12 in a8) {
            ++filled;
        }
    }
    return filled;
}
foo(a);
foo(a);
foo(a);
