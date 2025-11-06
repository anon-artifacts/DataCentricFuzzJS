function f0() {
    'use strict';
    const v1 = () => {
        return this;
    };
    return v1;
}
const t7 = Number.prototype;
t7.foo = f0;
for (let i6 = 0; i6 < 5; i6++) {
    const t10 = i6.foo();
    var n = t10();
    typeof n;
}
