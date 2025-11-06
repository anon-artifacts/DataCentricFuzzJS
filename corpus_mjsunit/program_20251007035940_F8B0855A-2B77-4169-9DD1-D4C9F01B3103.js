console.log("This tests ordering of static properties.");
function arrayEqual(a4, a5) {
    if (a4.length != a5.length) {
        return false;
    }
    for (const v10 in a4) {
        if (a4[v10] !== a5[v10]) {
            return false;
        }
    }
    return true;
}
var before = Object.getOwnPropertyNames(Math);
Math.sin = 42;
var after = Object.getOwnPropertyNames(Math);
arrayEqual(before, after);
successfullyParsed = true;
