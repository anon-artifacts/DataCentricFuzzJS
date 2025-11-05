function truth() {
    return true;
}
try { noInline(truth); } catch (e) {}
function assert(a5) {
}
try { noInline(assert); } catch (e) {}
function f7() {
    function foo() {
        let x = 40;
        with ({ x: 100 }) {
            x === 100;
        }
        with ({ y: 100 }) {
            x === 40;
        }
    }
    try { noInline(foo); } catch (e) {}
    function bar() {
        let x = 40;
        function capX() {
            return x;
        }
        with ({ x: 100 }) {
            let v26;
            try { v26 = truth(); } catch (e) {}
            if (v26) {
                let x = 50;
                function f29() {
                    return x;
                }
                let capX = f29;
                x === 50;
                let v33;
                try { v33 = capX(); } catch (e) {}
                v33 === x;
            }
            x === 100;
            let v37;
            try { v37 = capX(); } catch (e) {}
            v37 === 40;
        }
        with ({ y: 100 }) {
            let v42;
            try { v42 = truth(); } catch (e) {}
            if (v42) {
                let x = 50;
                function f45() {
                    return x;
                }
                let capX = f45;
                x === 50;
                let v49;
                try { v49 = capX(); } catch (e) {}
                v49 === x;
            }
            x === 40;
            let v53;
            try { v53 = capX(); } catch (e) {}
            v53 === 40;
        }
    }
    try { noInline(bar); } catch (e) {}
    function baz() {
        let x = 40;
        function capX() {
            return x;
        }
        with ({ x: 100 }) {
            let v63;
            try { v63 = truth(); } catch (e) {}
            if (v63) {
                let x = 50;
                x === 50;
            }
            x === 100;
            let v70;
            try { v70 = capX(); } catch (e) {}
            v70 === 40;
        }
        with ({ y: 100 }) {
            let v75;
            try { v75 = truth(); } catch (e) {}
            if (v75) {
                let x = 50;
                x === 50;
            }
            x === 40;
            let v82;
            try { v82 = capX(); } catch (e) {}
            v82 === 40;
        }
    }
    try { noInline(baz); } catch (e) {}
    for (let i87 = 0; i87 < 100; i87++) {
        try { foo(); } catch (e) {}
        try { bar(); } catch (e) {}
        try { baz(); } catch (e) {}
    }
}
try { f7(); } catch (e) {}
