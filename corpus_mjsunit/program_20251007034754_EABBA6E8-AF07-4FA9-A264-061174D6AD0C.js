try {
    let warm = 1000;
    function foo(a3) {
        return a3?.arguments;
    }
    try { noInline(foo); } catch (e) {}
    let caught = false;
    function bar() {
        for (let i11 = 0; i11 < warm; ++i11) {
            try { foo(bar); } catch (e) {}
        }
        function baz() {
            'use strict';
            try {
                try { foo(baz); } catch (e) {}
            } catch(e19) {
                caught = true;
            }
        }
        try { baz(); } catch (e) {}
    }
    try { bar(); } catch (e) {}
    if (!caught) {
        const v25 = `bad!`;
        let v26;
        try { v26 = new Error(v25); } catch (e) {}
        throw v26;
    }
} catch(e27) {
}
