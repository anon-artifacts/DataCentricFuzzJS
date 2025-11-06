function TestGetOwnPropertyDescriptor(a1, a2) {
    function f3() {
        var desc = Object.getOwnPropertyDescriptor(a1, a2);
        var exists = desc != undefined;
        print((("Found descriptor for " + a2) + ": ") + exists);
        if (exists) {
            for (const v17 in desc) {
                print((v17 + "=") + desc[v17]);
            }
        }
    }
    CatchAndWriteExceptions(f3);
}
function CatchAndWriteExceptions(a26) {
    try {
        a26();
    } catch(e28) {
        print((e28.name + ": ") + e28.number);
    }
}
TestGetOwnPropertyDescriptor({ foo: "fooValue" }, "foo");
