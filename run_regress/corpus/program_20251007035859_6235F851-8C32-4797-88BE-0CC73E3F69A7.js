function f(a1) {
    for (let i3 = 0; i3 < 10; i3++) {
        arr = /foo(ba(r))?/.exec(a1);
        var x = (((arr[0] + " ") + arr[1]) + " ") + arr[2];
    }
}
f("foobar");
f("foo");
