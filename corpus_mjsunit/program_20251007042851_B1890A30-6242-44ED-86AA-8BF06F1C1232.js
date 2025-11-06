function f0() {
    return {};
}
function f2() {
    return 23;
}
function f4() {
    return 4.2;
}
var values = [f0,f2,f4];
function constructor(a9) {
    this.x = a9();
}
function access(a13, a14, a15) {
    const v16 = new constructor(a13);
    var o = v16;
    o.x = a14;
    a15.deopt;
    o.x;
}
function test(a21, a22) {
    var deopt = { deopt: false };
    access(a21, a21(), deopt);
    access(a21, a21(), deopt);
    access(a21, a21(), deopt);
    delete deopt.deopt;
    access(a21, a22(), deopt);
    constructor.prototype = {};
}
for (let i37 = 0; i37 < values.length; i37++) {
    for (let i44 = 0; i44 < values.length; i44++) {
        test(values[i37], values[i44]);
    }
}
