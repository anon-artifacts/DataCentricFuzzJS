var a = 0;
function isless(a3, a4) {
    return a3 < a4;
}
var i = 0;
do {
    a += i;
    ++i;
} while (isless(i, 100) && isless(a, 5000))
print(a);
