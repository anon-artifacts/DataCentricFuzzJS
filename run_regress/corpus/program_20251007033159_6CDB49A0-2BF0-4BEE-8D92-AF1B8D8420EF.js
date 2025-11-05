function AsmModule() {
    'use asm';
    function xxx() {
        return 43;
    }
    function yyy() {
        return 43;
    }
    function zzz() {
        return 43;
    }
    function main() {
        return 43;
    }
    return { main: main };
}
const v15 = new ArrayBuffer(1024);
AsmModule(undefined, undefined, v15).main();
