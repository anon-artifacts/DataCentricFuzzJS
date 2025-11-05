function f(a1) {
    function g() {
    }
    const v3 = (a4) => {
        return g();
    };
    Object.keys(a1).forEach(v3);
}
const v9 = () => {
    return f({});
};
v9();
const v13 = () => {
    return f({ x: 0 });
};
v13();
const v18 = () => {
    return f({ x: 0 });
};
v18();
