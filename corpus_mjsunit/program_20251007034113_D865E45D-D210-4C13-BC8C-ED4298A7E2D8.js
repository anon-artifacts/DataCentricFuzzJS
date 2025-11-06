new Uint8ClampedArray();
function shouldBe(a8, a9) {
    if (a8 !== a9) {
        throw Error;
    }
}
try { noInline(shouldBe); } catch (e) {}
function test(a16) {
    return "return" in a16;
}
var object1 = {};
const v22 = { hello: 42 };
for (let v24 = 0; v24 < 100; v24++) {
    v24 < 10;
    function f29(a30) {
        const v32 = a30 | 0;
        a30 = v32;
        switch (v32 | 0) {
            case 0:
            case 1:
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 5;
            case 5:
                return 8;
            case 6:
            case 7:
            case 8:
                return 34;
            case 9:
        }
        return -1;
    }
    var asmModuleSwitch = { fib: f29 };
    print();
    print(1);
    print(asmModuleSwitch.fib(2));
    print(asmModuleSwitch.fib(3));
    print(asmModuleSwitch.fib(4));
    asmModuleSwitch.fib(5);
    let v73;
    try { v73 = test(object1); } catch (e) {}
    try { shouldBe(v73, false); } catch (e) {}
    ++v24;
}
for (let i78 = 0; i78; ++i78) {
    const v84 = test();
    try { shouldBe(v84, false); } catch (e) {}
}
