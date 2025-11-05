function foo(a1) {
    for (let i3 = 0; i3 < 100; i3++) {
        a1[i3].caller;
    }
}
arr = Object.create(Object.prototype);
first = Object.create({});
first.caller = null;
second = Object.create({});
second.caller = null;
for (let i26 = 0; i26 < 100;) {
    arr[i26++] = first;
    arr[i26++] = foo;
    arr[i26++] = second;
}
foo.caller;
foo(arr);
