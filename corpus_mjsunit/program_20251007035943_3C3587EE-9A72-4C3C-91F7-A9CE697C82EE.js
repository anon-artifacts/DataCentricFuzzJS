function store_generator(a1) {
    function f2(a3, a4, a5) {
        a3[a4] = a5;
        a3[a4];
        a3[a4];
    }
    return f2;
}
f = store_generator(5);
a = [0,0,0];
f(a, 0, 5);
a = [0,0,0];
f(a, 1, 5);
a = [0,0,0];
f(a, 2, 5);
f = store_generator(5.5);
const v39 = new Float32Array(5);
a = v39;
f(a, 0, 5.5);
f(a, 1, 5.5);
f(a, 2, 5.5);
