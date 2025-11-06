function f(a1, a2, a3) {
    arguments[0] = 3;
    return a3-- + 1;
}
var r = f();
print(r);
r !== r;
