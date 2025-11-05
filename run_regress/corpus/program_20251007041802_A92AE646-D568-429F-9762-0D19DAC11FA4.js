function f0() {
    'use strict';
    return this;
}
const t4 = Symbol?.prototype;
t4.identity = f0;
const v5 = Symbol?.prototype?.identity;
try { noInline(v5); } catch (e) {}
function f8() {
    'use strict';
    return this;
}
const t12 = Symbol?.prototype;
t12.identity2 = f8;
for (let i12 = 1; i12 < 10000; ++i12) {
    let v18;
    try { v18 = Symbol(i12); } catch (e) {}
    const v20 = Symbol?.prototype?.identity;
    try { v20.call(v18); } catch (e) {}
}
for (let i23 = 1; i23 < 10000; ++i23) {
    let v29;
    try { v29 = Symbol(i23); } catch (e) {}
    const v31 = Symbol?.prototype?.identity2;
    try { v31.call(v29); } catch (e) {}
}
