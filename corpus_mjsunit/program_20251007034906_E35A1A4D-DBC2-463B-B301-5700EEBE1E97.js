console.log("Tests what happens if you post-inc and then OSR exit.");
function foo(a4, a5) {
    const v6 = a5++;
    const t3 = a4.f;
    t3.f = v6;
}
for (let i9 = 0; i9 < 100; ++i9) {
    var o = {};
    if (i9 == 99) {
        o.f = 42;
    }
    foo({ f: o }, 0);
    o.f;
}
