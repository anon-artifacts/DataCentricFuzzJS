function Module() {
    'use asm';
    function f() {
        var i = 140737463189505;
        do {
            x = (undefined + (i = (i + i) | 0)) | 0;
        } while (!i)
    }
    return { f: f };
}
Module().f();
