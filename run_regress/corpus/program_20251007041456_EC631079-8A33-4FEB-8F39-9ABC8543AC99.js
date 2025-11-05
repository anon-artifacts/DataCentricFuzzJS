let warm = 1000;
function bar() {
    for (let i4 = 0; i4 < warm; ++i4) {
        arguments.callee;
    }
}
function baz() {
    'use strict';
    arguments.callee;
}
bar();
let caught = false;
try {
    baz();
} catch(e18) {
    caught = true;
}
if (!caught) {
    const v23 = new Error(`bad!`);
    throw v23;
}
