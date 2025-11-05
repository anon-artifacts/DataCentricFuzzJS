function bar(a1, a2) {
    'use strict';
    if (a2 > 0) {
        throw "Hello";
    }
    return a1;
}
boundBar = bar.bind(null, 42);
function foo(a11, a12) {
    'use strict';
    return boundBar(a12);
}
boundFoo = foo.bind(null, 41);
try {
    boundFoo(1);
} catch(e22) {
}
