var array = ["agdsagdwd","bgbgbgbga","cb3w53bq4","dwerweeww"];
function foo(a7, a8) {
    for (let i10 = 0; i10 < a7.length; ++i10) {
        if (a7[i10] == a8) {
            return true;
        }
    }
    return false;
}
var result = 0;
for (let i23 = 0; i23 < 1000000; ++i23) {
    result += foo(array, "cb3w53bq4");
}
if (result != 1000000) {
    throw "Bad result: " + result;
}
