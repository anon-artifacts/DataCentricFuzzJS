const v0 = () => {
    function f(a2) {
        try {
            with (a2) {
                return x;
            }
        } catch(e4) {
            return e4;
        }
    }
    f({ x: 23 });
    f({ x: 42 });
    f(null);
    f(undefined);
    f(null);
    f(undefined);
};
v0();
