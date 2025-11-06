var shouldBailout = false;
function test1() {
    function f3() {
    }
    var z1 = f3;
    function f5() {
        if (shouldBailout) {
            for (let i7 = 0; i7 < 6; ++i7) {
                const v14 = { a1: 1 };
            }
        }
    }
    f5();
    function f17() {
        `,${[z1]}`;
    }
    f17();
}
try {
    test1();
    test1();
    shouldBailout = true;
    test1();
} catch(e25) {
    print(e25.message);
}
