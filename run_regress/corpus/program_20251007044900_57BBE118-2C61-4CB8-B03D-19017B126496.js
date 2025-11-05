function testBug501690() {
    function B() {
    }
    B.prototype = { x: 123 };
    function D() {
    }
    const v5 = new B();
    D.prototype = v5;
    const t8 = D.prototype;
    t8.x = 1;
    const v8 = new D();
    const v9 = new D();
    const v10 = new D();
    arr = [v8,v9,v10,D.prototype];
    for (let i15 = 0; i15 < 4; i15++) {
        arr[i15].x;
    }
}
testBug501690();
