function test0() {
    const v3 = new Uint8Array(256);
    var ui8 = v3;
    this.prop0 = 1;
    if (this.prop0) {
        function f9() {
            function foo() {
                function bar() {
                    foo();
                }
            }
        }
        f9();
    }
    var __loopvar1 = 0;
    for (const v16 in ui8) {
        if (v16.indexOf("method") != -1) {
            continue;
        }
        if (__loopvar1++ > 3) {
            break;
        }
        -2144361518.9 - this.prop0;
        ui8[v16] = this.prop0;
    }
}
test0();
test0();
