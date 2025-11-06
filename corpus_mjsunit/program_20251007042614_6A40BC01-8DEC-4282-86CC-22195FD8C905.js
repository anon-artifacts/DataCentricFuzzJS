function f0() {
    'use strict';
    try {
        x = ref_error;
        let x = 0;
    } catch(e5) {
        throw e5;
    }
}
try { f0(); } catch (e) {}
function f8() {
    'use strict';
    try {
        x = ref_error;
        let x = 0;
    } finally {
    }
}
try { f8(); } catch (e) {}
