function truth() {
    return true;
}
try { noInline(truth); } catch (e) {}
function assert(a5) {
}
try { noInline(assert); } catch (e) {}
function shouldThrowInvalidConstAssignment(a8) {
    var threw = false;
    try {
        try { a8(); } catch (e) {}
    } catch(e12) {
    }
}
try { noInline(shouldThrowInvalidConstAssignment); } catch (e) {}
const NUM_LOOPS = 100;
function f16() {
    function foo() {
        const x = 40;
        with ({ x: 100 }) {
            x === 100;
        }
        with ({ y: 100 }) {
            x === 40;
        }
    }
    try { noInline(foo); } catch (e) {}
    function bar() {
        const x = 40;
        function capX() {
            return x;
        }
        with ({ x: 100 }) {
            let v35;
            try { v35 = truth(); } catch (e) {}
            if (v35) {
                const x = 50;
                function f38() {
                    return x;
                }
                const capX = f38;
                x === 50;
                let v42;
                try { v42 = capX(); } catch (e) {}
                v42 === x;
            }
            x === 100;
            let v46;
            try { v46 = capX(); } catch (e) {}
            v46 === 40;
        }
        with ({ y: 100 }) {
            let v51;
            try { v51 = truth(); } catch (e) {}
            if (v51) {
                const x = 50;
                function f54() {
                    return x;
                }
                const capX = f54;
                x === 50;
                let v58;
                try { v58 = capX(); } catch (e) {}
                v58 === x;
            }
            x === 40;
            let v62;
            try { v62 = capX(); } catch (e) {}
            v62 === 40;
        }
    }
    try { noInline(bar); } catch (e) {}
    function baz() {
        const x = 40;
        function capX() {
            return x;
        }
        with ({ x: 100 }) {
            let v72;
            try { v72 = truth(); } catch (e) {}
            if (v72) {
                const x = 50;
                x === 50;
            }
            x === 100;
            let v79;
            try { v79 = capX(); } catch (e) {}
            v79 === 40;
        }
        with ({ y: 100 }) {
            let v84;
            try { v84 = truth(); } catch (e) {}
            if (v84) {
                const x = 50;
                x === 50;
            }
            x === 40;
            let v91;
            try { v91 = capX(); } catch (e) {}
            v91 === 40;
        }
    }
    try { noInline(baz); } catch (e) {}
    for (let i96 = 0; i96 < NUM_LOOPS; i96++) {
        try { foo(); } catch (e) {}
        try { bar(); } catch (e) {}
        try { baz(); } catch (e) {}
    }
}
try { f16(); } catch (e) {}
function f105() {
    function foo() {
        const x = 40;
        with ({ x: 100 }) {
            x === 100;
            x = 20;
            x === 20;
        }
        x === 40;
        with ({ y: 100 }) {
            x === 40;
            x = 100;
        }
    }
    for (let i124 = 0; i124 < NUM_LOOPS; ++i124) {
        try { shouldThrowInvalidConstAssignment(foo); } catch (e) {}
    }
}
try { f105(); } catch (e) {}
