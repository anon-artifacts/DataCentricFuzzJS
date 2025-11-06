function f0() {
    let v3;
    try { v3 = new Int8Array(1); } catch (e) {}
    try { Object.freeze(v3); } catch (e) {}
}
try { f0(); } catch (e) {}
function f7() {
    'use strict';
    const v = 42;
    v += 1;
}
try { f7(); } catch (e) {}
