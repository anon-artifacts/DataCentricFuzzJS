function AsmModuleSwitch() {
    'use asm';
    function fib(a2) {
        switch ((a2 = a2 | 0) | 0) {
            case 0:
                return 1;
            case 100:
                return 1;
            case 200:
                return 2;
            case 300:
                return 3;
            case 400:
                return 5;
            case 500:
                return 8;
            case 600:
                return 13;
            case 700:
                return 21;
            case 800:
                return 34;
            case 900:
                return 55;
        }
        return -1;
    }
    return { fib: fib };
}
var asmModuleSwitch = AsmModuleSwitch();
print(asmModuleSwitch.fib(0));
print(asmModuleSwitch.fib(100));
print(asmModuleSwitch.fib(200));
print(asmModuleSwitch.fib(300));
print(asmModuleSwitch.fib(400));
print(asmModuleSwitch.fib(500));
print(asmModuleSwitch.fib(600));
