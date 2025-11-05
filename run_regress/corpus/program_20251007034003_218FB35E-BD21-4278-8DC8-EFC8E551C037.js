function test() {
    setRNGState(305402420, 624485);
    function f() {
        let x = [];
        for (let i9 = 0; i9 < 10000; i9++) {
            x.push(Math.random());
        }
        return x;
    }
    let x = f();
    x[0];
    x[10];
    x[100];
    x[1000];
    x[2000];
    x[3000];
    x[4000];
    x[5000];
    x[6000];
    x[7000];
    x[8000];
    x[9000];
    x[9999];
    setRNGState(0, 1);
    x = f();
    x[0];
    x[2000];
    x[6000];
    x[9999];
    setRNGState(268370177, 1145307137);
    x = f();
    x[0];
    x[2000];
    x[6000];
    x[9999];
}
if (typeof setRNGState == "function") {
    test();
}
