function Module(a1, a2) {
    'use asm';
    var unused_fun = a2?.fun;
    function f() {
    }
    return { f: f };
}
const v7 = () => {
    return Module();
};
v7();
