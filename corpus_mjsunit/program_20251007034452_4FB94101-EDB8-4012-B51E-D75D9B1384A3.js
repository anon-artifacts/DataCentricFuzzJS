var magicNumbers = [1,-1,0,0];
var magicIndex = 0;
var sum = 0;
function foo(a12) {
    for (let i14 = 0; i14 < a12; ++i14) {
        sum += 10;
        bar();
    }
}
function bar() {
    var q = magicNumbers[magicIndex++];
    if (q != -1) {
        sum += 1;
        foo(q);
    }
}
foo(3);
