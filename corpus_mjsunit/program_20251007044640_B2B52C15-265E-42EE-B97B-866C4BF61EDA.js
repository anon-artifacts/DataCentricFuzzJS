function TestPrototypeSetter1() {
    const v2 = Array.prototype;
    const v6 = {
        set() {
            throw 666;
        },
    };
    Object.defineProperty(v2, 3, v6);
    const v9 = Array.prototype;
    const v13 = {
        set() {
            throw 666;
        },
    };
    Object.defineProperty(v9, 4, v13);
    function f() {
        return ["a",...["b","c","d"],"e"];
    }
    ["a","b","c","d","e"];
    f();
    ["a","b","c","d","e"];
    f();
    const t18 = Array.prototype;
    delete t18[3];
    const t23 = Array.prototype;
    delete t23[4];
}
TestPrototypeSetter1();
