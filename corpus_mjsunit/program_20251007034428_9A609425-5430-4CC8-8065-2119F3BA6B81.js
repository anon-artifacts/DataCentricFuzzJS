function f(a1) {
    'use strict';
    if (arguments === a1) {
        return 1;
    }
    return arguments.length;
}
function g(a8) {
    return f(a8, 1, 2, 3);
}
g();
g();
g();
