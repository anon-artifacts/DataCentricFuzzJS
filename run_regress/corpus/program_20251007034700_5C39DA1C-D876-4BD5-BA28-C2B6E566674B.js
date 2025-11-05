try {
    let warm = 1000;
    function foo(a3) {
        return a3?.arguments;
    }
    try { noInline(foo); } catch (e) {}
    function bar() {
        for (let i9 = 0; i9 < warm; ++i9) {
            try { foo(bar); } catch (e) {}
        }
    }
    function baz() {
        'use strict';
        try { foo(baz); } catch (e) {}
    }
    try { bar(); } catch (e) {}
    let caught = false;
    try {
        try { baz(); } catch (e) {}
    } catch(e21) {
        caught = true;
    }
    if (!caught) {
        const v25 = `bad!`;
        let v26;
        try { v26 = new Error(v25); } catch (e) {}
        throw v26;
    }
} catch(e27) {
}
