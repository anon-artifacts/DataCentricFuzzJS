function f(a1) {
    switch (a1) {
        case "foo":
            return 87;
        case "bar":
            return 42;
    }
    return 99;
}
for (let i8 = 0; i8 < 5; i8++) {
    f("foo");
}
f("foo");
f("bar");
