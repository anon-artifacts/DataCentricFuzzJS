var pd = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
var __proto__set = pd.set;
var __proto__get = pd.get;
function t1() {
    console.log("function", typeof __proto__set);
    console.log("function", typeof __proto__get);
}
t1();
function t2() {
    try {
        try { __proto__set.call(); } catch (e) {}
    } catch(e20) {
    }
    try {
        try { __proto__set.call(undefined); } catch (e) {}
    } catch(e23) {
    }
    try {
        try { __proto__set.call(null); } catch (e) {}
    } catch(e26) {
    }
    try {
        try { __proto__get.call(); } catch (e) {}
    } catch(e28) {
    }
    try {
        try { __proto__get.call(undefined); } catch (e) {}
    } catch(e31) {
    }
    try {
        try { __proto__get.call(null); } catch (e) {}
    } catch(e34) {
    }
}
t2();
function t3() {
    var p = {};
    var o = Object.create(p);
    console.log(undefined, __proto__set.call(o));
    console.log(p, __proto__get.call(o));
    console.log(undefined, __proto__set.call(o, undefined));
    console.log(p, __proto__get.call(o));
    console.log(undefined, __proto__set.call(o, 5));
    console.log(p, __proto__get.call(o));
    var n = 5;
    console.log(undefined, __proto__set.call(n, {}));
    console.log(Number.prototype, __proto__get.call(n));
}
t3();
function t4() {
    var p = {};
    var o = Object.create(p);
    console.log(undefined, __proto__set.call(o, null));
    console.log(null, __proto__get.call(o));
    console.log(undefined, __proto__set.call(o, p));
    console.log(p, __proto__get.call(o));
}
t4();
function t5() {
    try {
        try { Object.setPrototypeOf(); } catch (e) {}
    } catch(e91) {
    }
    try {
        try { Object.setPrototypeOf(undefined); } catch (e) {}
    } catch(e94) {
    }
    try {
        try { Object.setPrototypeOf(null); } catch (e) {}
    } catch(e97) {
    }
    try {
        const v98 = {};
        try { Object.setPrototypeOf(v98); } catch (e) {}
    } catch(e100) {
    }
    try {
        const v101 = {};
        try { Object.setPrototypeOf(v101, undefined); } catch (e) {}
    } catch(e104) {
    }
    try {
        const v105 = {};
        try { Object.setPrototypeOf(v105, 5); } catch (e) {}
    } catch(e108) {
    }
    try {
        try { Object.getPrototypeOf(); } catch (e) {}
    } catch(e110) {
    }
    try {
        try { Object.getPrototypeOf(undefined); } catch (e) {}
    } catch(e113) {
    }
    try {
        try { Object.getPrototypeOf(null); } catch (e) {}
    } catch(e116) {
    }
}
t5();
function t6() {
    var n = 5;
    console.log(5, Object.setPrototypeOf(n, {}));
    console.log(Number.prototype, Object.getPrototypeOf(n));
}
t6();
function t7() {
    var p = {};
    var o = Object.create(p);
    const v137 = Object.setPrototypeOf(o, null);
    try { console.log(o, v137); } catch (e) {}
    console.log(null, Object.getPrototypeOf(o));
    console.log(o, Object.setPrototypeOf(o, p));
    console.log(p, Object.getPrototypeOf(o));
}
t7();
function t8() {
    function main() {
        const v151 = -1;
        var l0 = { a: v151, b: 4276545 };
        l0.a = l0.a + l0.a;
        l0.y = {};
        function f160() {
            delete l0.a;
            return 5;
        }
        l0.__defineGetter__("z", f160);
        l0.a = l0.a - l0.z;
        l0.__proto__ = l0.y;
        l0.z = l0.z / l0.a;
        var o = {};
        o.a = 42;
        const t132 = l0.y;
        t132.__proto__ = o;
        return l0.a;
    }
    for (let i177 = 0; i177 < 20; i177++) {
        console.log(42, main());
    }
}
t8();
