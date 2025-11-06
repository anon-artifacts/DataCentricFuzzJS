function poly(a1) {
    return a1.foo;
}
var one = { foo: 0 };
var two = { foo: 0, bar: 1 };
var three = { bar: 0 };
three.__proto__ = {};
const v14 = {};
const t8 = three.__proto__;
t8.__proto__ = v14;
const v16 = {};
const t11 = three.__proto__.__proto__;
t11.__proto__ = v16;
const v19 = {};
const t14 = three.__proto__.__proto__.__proto__;
t14.__proto__ = v19;
const v23 = {};
const t17 = three.__proto__.__proto__.__proto__.__proto__;
t17.__proto__ = v23;
poly(one);
poly(two);
poly(three);
poly(one);
poly(two);
poly(three);
