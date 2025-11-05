const t0 = Array.prototype;
t0[1] = "element 1";
function test(a4) {
    a4.shift();
    return a4;
}
["element 1",{}];
test([0,,{}]);
["element 1",10];
test([9,,10]);
["element 1",10];
test([9,,10]);
