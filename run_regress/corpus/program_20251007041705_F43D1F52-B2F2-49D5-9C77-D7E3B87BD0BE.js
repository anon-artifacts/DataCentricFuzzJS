z = 2;
z += 4;
const v8 = new Array(10);
a = v8;
a[2] += 7;
a[2] = 15;
a[2] += 2;
a[2];
const v17 = new Object();
b = v17;
b.foo = 5;
b.foo += 12;
b.foo;
function f24() {
    var z = 2;
    z += 4;
    const v30 = new Array(10);
    var a = v30;
    a[2] += 7;
    a[2] = 15;
    a[2] += 2;
    a[2];
    const v37 = new Object();
    var b = v37;
    b.foo = 5;
    b.foo += 12;
    b.foo;
}
f24();
function f44() {
    z = 2;
    z += 4;
    const v49 = new Array(10);
    a = v49;
    a[2] += 7;
    a[2] = 15;
    a[2] += 2;
    a[2];
    const v55 = new Object();
    b = v55;
    b.foo = 5;
    b.foo += 12;
    b.foo;
}
f44();
function foo() {
    var z = 3;
    z += 4;
    const v67 = new Array(10);
    var a = v67;
    a[2] += 7;
    a[2] = 15;
    a[2] += 2;
    a[2];
    const v74 = new Object();
    var b = v74;
    b.foo = 5;
    b.foo += 12;
    b.foo;
}
foo();
function bar() {
    z = 2;
    z += 5;
    const v86 = new Array(10);
    a = v86;
    a[2] += 7;
    a[2] = 15;
    a[2] += 2;
    a[2];
    const v92 = new Object();
    b = v92;
    b.foo = 5;
    b.foo += 12;
    b.foo;
}
bar();
for (i = 0; i < 5; ++i) {
    z = 2;
    z += 4;
    const v109 = new Array(10);
    a = v109;
    a[2] += 7;
    a[2] = 15;
    a[2] += 2;
    a[2];
    const v115 = new Object();
    b = v115;
    b.foo = 5;
    b.foo += 12;
    b.foo;
}
function f120() {
    for (let i122 = 0; i122 < 5; ++i122) {
        var z = 2;
        z += 4;
        const v133 = new Array(10);
        var a = v133;
        a[2] += 7;
        a[2] = 15;
        a[2] += 2;
        a[2];
        const v140 = new Object();
        var b = v140;
        b.foo = 5;
        b.foo += 12;
        b.foo;
    }
}
f120();
function f147() {
    for (i = 0; i < 5; ++i) {
        z = 2;
        z += 4;
        const v159 = new Array(10);
        a = v159;
        a[2] += 7;
        a[2] = 15;
        a[2] += 2;
        a[2];
        const v165 = new Object();
        b = v165;
        b.foo = 5;
        b.foo += 12;
        b.foo;
    }
}
f147();
function foo_loop() {
    for (i = 0; i < 5; ++i) {
        var z = 3;
        z += 4;
        const v184 = new Array(10);
        var a = v184;
        a[2] += 7;
        a[2] = 15;
        a[2] += 2;
        a[2];
        const v191 = new Object();
        var b = v191;
        b.foo = 5;
        b.foo += 12;
        b.foo;
    }
}
foo_loop();
function bar_loop() {
    for (i = 0; i < 5; ++i) {
        z = 2;
        z += 5;
        const v210 = new Array(10);
        a = v210;
        a[2] += 7;
        a[2] = 15;
        a[2] += 2;
        a[2];
        const v216 = new Object();
        b = v216;
        b.foo = 5;
        b.foo += 12;
        b.foo;
    }
}
bar_loop();
function test_assign(a223, a224) {
    a223 = a224;
    if (a224) {
        return a223;
    }
}
test_assign(0, 42);
typeof test_assign(42, 0);
function store_i_in_element_i_of_object_i() {
    const v235 = new Object();
    var i = v235;
    i[i] = i;
}
store_i_in_element_i_of_object_i();
store_i_in_element_i_of_object_i();
store_i_in_element_i_of_object_i();
