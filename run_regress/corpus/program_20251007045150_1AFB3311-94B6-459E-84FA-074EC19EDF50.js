function f(a1) {
    'use strict';
    a1(arguments);
    return arguments.length;
}
function g(a7) {
    return f(a7, 1, 2, 3);
}
function h(a13) {
    '[object Arguments]';
    "" + a13;
}
g(h);
g(h);
g(h);
