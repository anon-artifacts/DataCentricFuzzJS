function f0() {
    'use strict';
    return -this;
}
const t4 = Number.prototype;
t4.negate = f0;
for (let i6 = 1; i6 < 10000; ++i6) {
    (4342338).negate();
}
