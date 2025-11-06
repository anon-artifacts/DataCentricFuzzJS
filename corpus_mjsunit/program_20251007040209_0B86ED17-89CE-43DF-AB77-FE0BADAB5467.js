function f0() {
    function foo(a2, a3) {
        const v4 = (a5) => {
            return a5 === a3.x;
        };
        return a2.some(v4);
    }
    const v12 = [1,2,3];
    foo(v12, { x: 3 });
    const v19 = [0,1,2];
    foo(v19, { x: 3 });
    const v26 = [1,2,3];
    foo(v26, { x: 3 });
    const v33 = [0,1,2];
    foo(v33, { x: 3 });
}
f0();
