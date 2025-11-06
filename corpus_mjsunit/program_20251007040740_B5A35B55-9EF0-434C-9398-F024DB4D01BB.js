const v0 = {};
function AsmModule(a2) {
    'use asm';
    function empty() {
    }
    function changeType() {
        return empty() | 0;
    }
    return { empty: empty };
}
let asmModule = AsmModule(v0);
print(asmModule.empty());
