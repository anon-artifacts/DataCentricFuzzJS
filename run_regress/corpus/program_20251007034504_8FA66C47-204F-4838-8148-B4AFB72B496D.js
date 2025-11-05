try {
    function f0() {
    }
    let env = { k: 1 };
    let f;
    with (env) {
        function f6() {
            'use strict';
            k = 2;
        }
        f = f6;
    }
    f();
    env.k;
    const v13 = { k: true };
    env[Symbol.unscopables] = v13;
    let g;
    with (env) {
        function f19() {
            'use strict';
            Symbol.unscopables;
            const t20 = env[env];
            t20.k = true;
            k = 3;
        }
        g = f19;
    }
    Symbol.unscopables;
    const t27 = env[env];
    t27.k = false;
    try { g(); } catch (e) {}
    env.k;
    f0(0, 0);
} catch(e34) {
}
