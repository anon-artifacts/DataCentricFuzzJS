function testAsmWithWasmOff() {
    function Module() {
        'use asm';
        function foo() {
            return 0;
        }
        return { foo: foo };
    }
    Module();
}
testAsmWithWasmOff();
