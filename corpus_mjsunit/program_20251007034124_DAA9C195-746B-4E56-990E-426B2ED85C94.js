function B(a1, a2) {
    this.x = a1;
    this.y = a2;
    return this;
}
function test_params1(a7, a8) {
    var i = a7.x;
    var j = a7.x;
    var k = a8.x;
    var l = a8.x;
    return ((i + j) + k) + l;
}
const v23 = new B(3, 4);
const v26 = new B(4, 5);
test_params1(v23, v26);
const v31 = new B(11, 7);
const v34 = new B(44, 8);
test_params1(v31, v34);
const v39 = new B(1, 7);
const v42 = new B(2, 8);
test_params1(v39, v42);
function test_params2(a45, a46) {
    const v49 = new B(a45 + 1, a46);
    var o = v49;
    o.x = a45;
    var i = o.x;
    o.x = a45;
    var j = o.x;
    o.x = a46;
    var k = o.x;
    o.x = a46;
    var l = o.x;
    return ((i + j) + k) + l;
}
test_params2(3, 4);
test_params2(11, 44);
test_params2(1, 2);
