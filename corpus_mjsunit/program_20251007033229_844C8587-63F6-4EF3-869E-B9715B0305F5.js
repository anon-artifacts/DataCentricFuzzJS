const v1 = Promise.resolve();
const v5 = {
    value() {
        return 0;
    },
};
const p = Object.defineProperty(v1, "then", v5);
function f9() {
    function foo() {
        const v11 = p.catch();
        let v12;
        try { v12 = v11.catch(); } catch (e) {}
        return v12;
    }
    foo();
    foo();
    foo();
}
f9();
function f18() {
    function foo() {
        const v20 = p.finally();
        let v21;
        try { v21 = v20.finally(); } catch (e) {}
        return v21;
    }
    foo();
    foo();
    foo();
}
f18();
