function f0() {
    function check(a2) {
        return a2.x;
    }
    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };
    check(d);
    check(d);
    d.x = "d";
    check(d);
}
f0();
function f21() {
    function check(a23) {
        return a23.x;
    }
    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };
    check(d);
    check(d);
    c.x = "c";
    check(d);
}
f21();
function f42() {
    function check(a44) {
        return a44.x;
    }
    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };
    check(d);
    check(d);
    d.__proto__ = { x: "?" };
    check(d);
}
f42();
function f64() {
    function check(a66) {
        return a66.x;
    }
    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };
    check(d);
    check(d);
    c.__proto__ = { x: "?" };
    check(d);
}
f64();
function f86() {
    function check(a88) {
        return a88.x;
    }
    function Base() {
        this.x = "a";
    }
    const v93 = new Base();
    let a = v93;
    const v96 = new Object();
    a.__proto__ = v96;
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };
    check(d);
    check(d);
    b.__proto__ = { x: "?" };
    check(d);
}
f86();
function f112() {
    function check(a114) {
        return a114.x;
    }
    function Base() {
        this.x = "a";
    }
    function Node() {
    }
    const v120 = new Base();
    let a = v120;
    const v122 = new Node();
    let b = v122;
    b.__proto__ = a;
    let c = { __proto__: b };
    let d = { __proto__: c };
    check(d);
    check(d);
    b.__proto__ = { x: "?" };
    check(d);
}
f112();
function f137() {
    function check(a139) {
        return a139.x;
    }
    function Base() {
        this.x = "a";
    }
    function Node() {
    }
    const v145 = new Base();
    let a = v145;
    let b = { __proto__: a };
    let c = { __proto__: b };
    const v151 = new Node();
    let d = v151;
    d.__proto__ = c;
    check(d);
    check(d);
    d.__proto__ = { x: "?" };
    check(d);
}
f137();
function f162() {
    function check(a164) {
        return a164.x;
    }
    function Base() {
        this.x = "a";
    }
    function Node() {
    }
    const v170 = new Base();
    let a = v170;
    const v172 = new Node();
    let b = v172;
    b.__proto__ = a;
    check(b);
    check(b);
    b.__proto__ = { x: "?" };
    check(b);
}
f162();
