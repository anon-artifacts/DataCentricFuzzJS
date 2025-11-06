var array = ["a","b","c","d"];
function addFoo(a7) {
    return a7 + "foo";
}
for (let i11 = 0; i11 < array.length; ++i11) {
    array[i11] = addFoo(array[i11]);
}
function foo(a20, a21) {
    for (let i23 = 0; i23 < a20.length; ++i23) {
        if (a20[i23] == a21) {
            return true;
        }
    }
    return false;
}
var dFoo = addFoo("d");
var result = 0;
for (let i39 = 0; i39 < 1000000; ++i39) {
    result += foo(array, dFoo);
}
if (result != 1000000) {
    throw "Bad result: " + result;
}
