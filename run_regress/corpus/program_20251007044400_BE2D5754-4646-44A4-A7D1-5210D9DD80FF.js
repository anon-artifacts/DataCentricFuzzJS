function f(a1) {
    'use strict';
    return arguments.length;
}
function g() {
    'use strict';
    return arguments[f(1, 2)];
}
g(4, 5, 6);
g(4, 5, 6);
g(4, 5, 6);
