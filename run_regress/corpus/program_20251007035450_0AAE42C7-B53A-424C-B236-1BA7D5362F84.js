var g = false;
function test(a3) {
    var a = a3 + 1;
    var b = a;
    if (g) {
        return b;
    }
    return 1;
}
print(test(10));
g = true;
print(test(10));
