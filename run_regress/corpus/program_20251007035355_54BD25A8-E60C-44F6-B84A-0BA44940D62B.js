function func(a1) {
    var a = 3;
    var b;
    if (a1) {
        b = (a = 4) + a1;
    } else {
        b = a + a1;
    }
    return b;
}
print(func(true));
print(func(false));
