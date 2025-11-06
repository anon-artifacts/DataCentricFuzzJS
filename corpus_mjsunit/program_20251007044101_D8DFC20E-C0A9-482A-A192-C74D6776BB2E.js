function f0(a1) {
    'use strict';
    return arguments;
}
const v3 = f0(f0);
v3.length = v3;
