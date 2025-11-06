let v0 = 4;
function f3(a4, a5) {
    if (a4 !== a5) {
        throw Error;
    }
}
var object1 = {};
const v10 = {};
for (let v11 = 0; v11 < 100; v11++) {
    function f12(a13) {
        switch (a13 | 0) {
            case 0:
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 5;
            case 5:
                return 8;
            case 8:
                return 34;
        }
    }
    var asmModuleSwitch = { fib: f12 };
    print();
    print(1);
    asmModuleSwitch.fib(1);
    print();
    print(asmModuleSwitch.fib());
    const v38 = asmModuleSwitch.fib();
    print(v38);
    let v40;
    try { v40 = v38(object1); } catch (e) {}
    try { f3(v40, false); } catch (e) {}
    ++v11;
}
for (let i45 = 0; i45; ++v0) {
}
