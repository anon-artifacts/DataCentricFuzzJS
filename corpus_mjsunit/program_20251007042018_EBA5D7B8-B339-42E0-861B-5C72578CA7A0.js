function args(a1) {
    return arguments;
}
var a = args(false);
function f6() {
    'use strict';
    a["const" + 0] = 0;
}
f6();
function f12() {
    'use strict';
    a[0] = 0;
}
f12();
