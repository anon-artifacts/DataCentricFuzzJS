function foo(a1) {
    const t1 = foo.arguments;
    t1[0] = "Changed";
    print("Arguments : " + foo.arguments[0]);
}
foo("Orig");
function foo2(a13) {
    for (let i15 = 0; i15 < 1; i15++) {
        const t8 = foo2.arguments;
        t8[0] = "Changed";
        print("Arguments : " + foo2.arguments[0]);
    }
}
foo2("Orig");
