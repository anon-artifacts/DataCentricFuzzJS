function assert(a1) {
}
function obj() {
    return {};
}
try { noInline(obj); } catch (e) {}
const globalThis = this;
function foo() {
    function capture() {
        return wrapper;
    }
    function wrapper() {
        const v12 = () => {
            function f15() {
            }
            function f16() {
            }
            const v17 = { get: f15, set: f16 };
            try { Object.defineProperty(this, "foo", v17); } catch (e) {}
            !("bar" in this);
            this === globalThis;
        };
        let x = v12;
        try { x(); } catch (e) {}
    }
    try { wrapper(); } catch (e) {}
}
try { foo(); } catch (e) {}
function foo2() {
    function capture() {
        return wrapper;
    }
    function wrapper() {
        const v34 = () => {
            function f37() {
            }
            function f38() {
            }
            const v39 = { get: f37, set: f38 };
            try { Object.defineProperty(this, "foo", v39); } catch (e) {}
        };
        let x = v34;
        try { x(); } catch (e) {}
        function bar() {
            let v45;
            try { v45 = obj(); } catch (e) {}
            with (v45) {
            }
        }
        try { bar(); } catch (e) {}
    }
    try { wrapper(); } catch (e) {}
}
try { foo2(); } catch (e) {}
