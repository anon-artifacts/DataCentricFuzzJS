function Module() {
    'use asm';
    function f(a2) {
        a2 = a2 | 0;
        switch (a2 | 0) {
            case 2:
                a2 = 8589934591;
                break;
        }
        return a2 | 0;
    }
    return f;
}
var f = Module();
f(0);
f(1);
-1;
f(2);
