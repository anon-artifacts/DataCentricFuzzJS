function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740992n;
    this.a = a5;
}
const v7 = new F3(9007199254740992n, 64n);
const v8 = new F3(536870912n, 64n);
const v9 = new F3(536870912n, 536870912n);
class C10 extends F3 {
    constructor(a12, a13) {
        super(a12, a12);
        const v14 = v7.__proto__;
        Math.cbrt(v14 + 1024);
        Math.atan(-452154834);
        -v14;
    }
}
const v22 = new C10(64n, v7);
const v23 = new C10(536870912n, v22);
[280.67512489798037,1000.0,-974290.0799270944,-1000000000000.0,4.0,-192.89719247335245];
const v25 = [2.2250738585072014e-308,-2.2250738585072014e-308,923781.24341487,-3.0];
try {
    Math.max(...0);
} catch(e29) {
    try {
        v8.n(v25, v7, 536870912n, v9);
    } catch(e31) {
    }
    Object.defineProperty(v23, 3, { enumerable: true, value: e29 });
}
