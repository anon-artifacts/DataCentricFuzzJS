function foo(a1) {
    'use strict';
    var ok = false;
    try {
        a1.c = 10;
    } catch(e5) {
        ok = true;
    }
    a1.c;
}
x = { a: 0, b: 1 };
Object.freeze(x);
foo(x);
