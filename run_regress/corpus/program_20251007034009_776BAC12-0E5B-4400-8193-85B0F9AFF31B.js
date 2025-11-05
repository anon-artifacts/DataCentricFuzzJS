function getPropertiesString(a1) {
    var props = [];
    for (const v4 in a1) {
        props.push(v4);
    }
    return (props = props.sort()).join();
}
function t1() {
    var obj = {};
    obj.a1 = 1;
    obj.a2 = 2;
    obj.a3 = 3;
    delete obj.a3;
    console.log(obj.a1 === 1);
    console.log(obj.a2 === 2);
    console.log(obj.a3 === undefined);
}
t1();
function t2() {
    var obj = {};
    obj.b1 = 1;
    obj.b2 = 2;
    var obj1 = {};
    obj1.b1 = 1;
    obj1.b3 = 3;
    delete obj1.b3;
    console.log(obj.b1 === 1);
    console.log(obj.b2 === 2);
    console.log(obj.b3 === undefined);
    console.log(obj1.b1 === 1);
    console.log(obj1.b2 === undefined);
    console.log(obj1.b3 === undefined);
}
t2();
function t3() {
    var obj = { c1: 1 };
    obj.c2 = 2;
    delete obj.c2;
    console.log(obj.c1 === 1);
    console.log(obj.c2 === undefined);
}
t3();
function t4() {
    var obj = { d1: 1, d2: 2 };
    var obj1 = { d1: 1, d2: 2 };
    delete obj.d2;
    console.log(obj.d1 === 1);
    console.log(obj.d2 === undefined);
    console.log(obj1.d1 === 1);
    console.log(obj1.d2 === 2);
}
t4();
function t5() {
    function foo() {
        this.e1 = 1;
        this.e2 = 2;
        this.e3 = 3;
        this.e4 = 4;
        this.e5 = 5;
    }
    const v121 = new foo();
    var obj = v121;
    const v123 = new foo();
    var obj1 = v123;
    const v125 = new foo();
    var obj2 = v125;
    delete obj1.e5;
    console.log(obj.e1 === 1);
    console.log(obj.e2 === 2);
    console.log(obj.e3 === 3);
    console.log(obj.e4 === 4);
    console.log(obj.e5 === 5);
    console.log(obj1.e1 === 1);
    console.log(obj1.e2 === 2);
    console.log(obj1.e3 === 3);
    console.log(obj1.e4 === 4);
    console.log(obj1.e5 === undefined);
    console.log(obj2.e1 === 1);
    console.log(obj2.e2 === 2);
    console.log(obj2.e3 === 3);
    console.log(obj2.e4 === 4);
    console.log(obj2.e5 === 5);
}
t5();
function t6() {
    function foo() {
        this.f1 = 1;
        this.f2 = 2;
        this.f3 = 3;
        this.f4 = 4;
        this.f5 = 5;
        this.f6 = 6;
        this.f7 = 7;
        this.f8 = 8;
    }
    const v208 = new foo();
    var obj = v208;
    const v210 = new foo();
    var obj1 = v210;
    const v212 = new foo();
    var obj2 = v212;
    delete obj1.f8;
    console.log(obj1.f1 === 1);
    console.log(obj1.f2 === 2);
    console.log(obj1.f3 === 3);
    console.log(obj1.f4 === 4);
    console.log(obj1.f5 === 5);
    console.log(obj1.f6 === 6);
    console.log(obj1.f7 === 7);
    console.log(obj1.f8 === undefined);
}
t6();
function t7() {
    function foo() {
        this.g1 = 1;
        this.g2 = 2;
        this.g3 = 3;
        this.g4 = 4;
        this.g5 = 5;
        this.g6 = 6;
        this.g7 = 7;
        this.g8 = 8;
    }
    const v267 = new foo();
    var obj = v267;
    obj.g9 = 9;
    delete obj.g9;
    console.log(obj.g1 === 1);
    console.log(obj.g2 === 2);
    console.log(obj.g3 === 3);
    console.log(obj.g4 === 4);
    console.log(obj.g5 === 5);
    console.log(obj.g6 === 6);
    console.log(obj.g7 === 7);
    console.log(obj.g8 === 8);
    console.log(obj.g9 === undefined);
}
t7();
function t8() {
    var obj = {};
    obj.h1 = 1;
    obj.h2 = 2;
    obj[0] = 4;
    obj.h3 = 3;
    delete obj.h3;
    console.log(obj.h1 === 1);
    console.log(obj.h2 === 2);
    console.log(obj.h3 === undefined);
    console.log(obj[0] === 4);
}
t8();
function t9() {
    function foo() {
        this.i1 = 1;
        this.i2 = 2;
    }
    const v341 = new foo();
    var obj = v341;
    const v343 = new foo();
    var obj1 = v343;
    const v345 = new foo();
    var obj2 = v345;
    obj[0] = 10;
    obj[1] = 11;
    delete obj.i2;
    console.log(obj.i1 === 1);
    console.log(obj.i2 === undefined);
    console.log(obj[0] === 10);
    console.log(obj[1] === 11);
}
t9();
function t10() {
    var obj = { j1: 1, j2: 2, j3: 3, j4: 4 };
    for (const v375 in obj) {
    }
    var expectedProps = "j1j2j3j4";
    var elemCount = 0;
    var propsString = "";
    for (const v382 in obj) {
        propsString += v382;
        elemCount++;
        if (elemCount == 2) {
            delete obj.j4;
        } else {
            if (elemCount == 3) {
                obj.j4 = 5;
            }
        }
    }
    console.log(propsString === expectedProps);
}
t10();
function t11() {
    var obj = { k1: 1, k2: 2, k3: 3, k4: 4 };
    for (const v401 in obj) {
    }
    var expectedProps = "k1k2k3k4";
    var elemCount = 0;
    var propsString = "";
    for (const v408 in obj) {
        propsString += v408;
        elemCount++;
        if (elemCount == 2) {
            delete obj.k4;
            obj.k4 = 5;
            obj.k5 = 6;
        }
    }
    console.log(propsString === expectedProps);
}
t11();
function t12() {
    var obj = { l1: 1, l2: 2, l3: 3 };
    var expectedProps = "l1l2l3";
    var elemCount = 0;
    var propsString = "";
    for (const v431 in obj) {
        propsString += v431;
        elemCount++;
        if (elemCount == 2) {
            delete obj.l3;
            obj.l3 = 5;
        }
    }
    console.log(propsString === expectedProps);
}
t12();
function t13() {
    var obj = { m1: 1, m2: 2, m3: 3 };
    var obj1 = { m1: 1, m2: 2, m3: 3 };
    var expectedProps = "m1m2m3";
    var elemCount = 0;
    var propsString = "";
    for (const v458 in obj1) {
        propsString += v458;
        elemCount++;
        if (elemCount == 2) {
            delete obj.l3;
            obj.l3 = 5;
        }
    }
    console.log(propsString === expectedProps);
}
t13();
function t14() {
    var obj = { n1: 1, n2: 2 };
    obj.n3 = 3;
    obj[10] = 10;
    delete obj.n3;
    console.log(obj[10] === 10);
    console.log(obj.n3 === undefined);
}
t14();
function t15() {
    var arrObj0 = {};
    function f489() {
        delete arrObj0.length;
        function f491() {
        }
        function f492() {
        }
        arrObj0 = { method0: f491, method1: f492 };
    }
    var func1 = f489;
    function f495() {
        arrObj0[15] = 1;
        func1();
        arrObj0.length = arrObj0;
        return arrObj0;
    }
    var func4 = f495;
    func4();
    func4();
}
t15();
function t16() {
    var obj1 = {};
    obj1.o1 = 1;
    var obj2 = {};
    obj2.o2 = 1;
    obj2.__proto__ = obj1;
    delete obj2.o2;
    console.log(1, obj2.o1);
}
t16();
function t17() {
    var obj1 = {};
    obj1.p1 = 1;
    var obj2 = {};
    obj2.__proto__ = obj1;
    obj2.p2 = 1;
    delete obj2.p2;
    console.log(1, obj2.p1);
}
t17();
function t18() {
    var obj1 = {};
    obj1.q1 = 1;
    obj1.q2 = 1;
    var obj2 = {};
    obj2.q3 = 1;
    obj1.q4 = 1;
    obj2.__proto__ = obj1;
    delete obj2.q3;
    console.log("q1,q2,q4", getPropertiesString(obj2));
}
t18();
function t19() {
    var obj1 = {};
    obj1.r1 = 1;
    obj1.r2 = 1;
    var obj2 = {};
    obj2.r3 = 1;
    obj2.r4 = 1;
    obj2.__proto__ = obj1;
    delete obj2.r4;
    console.log("r1,r2,r3", getPropertiesString(obj2));
    delete obj2.r3;
    console.log("r1,r2", getPropertiesString(obj2));
}
t19();
