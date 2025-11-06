function f() {
    const v1 = (a2) => {
        const v3 = (a4) => {
            return a4 + a2;
        };
        return ([0,1]).map(v3);
    };
    var g = v1;
    const v12 = g(13);
    let v13;
    try { v13 = v12.toSource(); } catch (e) {}
    return v13;
}
f();
