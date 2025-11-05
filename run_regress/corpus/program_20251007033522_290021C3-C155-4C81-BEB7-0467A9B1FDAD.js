function test(a1) {
    a1();
}
for (let i4 = 0; i4 < 20; i4++) {
    function f10() {
    }
    test(f10);
}
class C12 {
    constructor() {
    }
}
for (let i15 = 0; i15 < 11; i15++) {
    new C12();
}
try {
    test(C12);
    const v25 = new Error("Invoking a class constructor without new must throw");
    throw v25;
} catch(e26) {
    if (!(e26 instanceof TypeError)) {
        throw e26;
    }
}
