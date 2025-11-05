const v0 = () => {
    function f(a2) {
        for (let i4 = 0; i4 < 20; ++i4) {
            print("" + a2.codePointAt());
        }
    }
    f("test");
    f("foo");
    f("");
};
v0();
