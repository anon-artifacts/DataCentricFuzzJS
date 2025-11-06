function f1() {
    'use strict';
    const t2 = 4;
    t2.name = "foo";
    return "foo";
}
try { f1(); } catch (e) {}
