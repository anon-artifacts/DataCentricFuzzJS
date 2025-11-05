function test(a1) {
    const v17 = {
        defineProperty(a4, a5, a6) {
            hits++;
            Object.getOwnPropertyNames(a6).join(",");
            a6.value;
            return true;
        },
    };
    const v18 = new Proxy(a1, v17);
    var p = v18;
    var hits = 0;
    p[0] = "ponies";
    a1[0];
}
test([123]);
const v32 = new Int32Array([123]);
test(v32);
