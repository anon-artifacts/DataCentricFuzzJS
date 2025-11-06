try {
    const v0 = () => {
        return f?.a;
    };
    try { v0(); } catch (e) {}
    const v5 = () => {
        'use strict';
        f.a = 1;
    };
    try { v5(); } catch (e) {}
    f2?.a;
    f2.a = 1;
    f2?.a;
} catch(e15) {
}
