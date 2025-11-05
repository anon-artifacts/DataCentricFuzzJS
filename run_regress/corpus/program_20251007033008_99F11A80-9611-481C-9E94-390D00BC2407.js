var stackAlloc = true;
var g;
function Ctor() {
}
function test(a6) {
    var a;
    if (stackAlloc) {
        const v9 = new Ctor();
        a = v9;
        a.z = a6 + 0.1;
        a.escape = a6 + 0.2;
    } else {
        const v14 = new Ctor();
        a = v14;
        g = a;
        a.z = a6 + 0.1;
        a.escape = a6 + 0.2;
    }
    a.x = a.z + 0.2;
    var c;
    if (stackAlloc) {
        c = a;
    } else {
        const v24 = new Ctor();
        c = v24;
    }
    c.y = a6 + 0.3;
    return a.escape;
}
print(test(0.1));
stackAlloc = false;
print(test(0.1));
print(g.z);
print(g.x);
print(g.y);
stackAlloc = true;
print(test(0.1));
stackAlloc = false;
print(test(0.1));
print(g.z);
print(g.x);
print(g.y);
function test2(a57) {
    var a;
    if (stackAlloc) {
        const v60 = new Ctor();
        a = v60;
        a.x = 1.1 + a57;
    } else {
        const v63 = new Ctor();
        a = v63;
        a.x = 1.2 + a57;
    }
    a.y = 1.3 + a57;
    var c = a;
    c.z = 1.4 + a57;
}
print("Test 2");
stackAlloc = true;
test2(0.1);
stackAlloc = false;
test2(0.1);
stackAlloc = true;
test2(0.1);
stackAlloc = false;
test2(0.1);
function test3(a86) {
    const v87 = new Ctor();
    var a = v87;
    a.x = a86 + 1.1;
    a.y = a86 + 1.2;
    for (let i94 = 0; i94 < 2; i94++) {
        var n = a.x;
        a.x = n + 1.1;
        var q = a.y;
        a.y = i94 + 1.4;
        a.z = q;
        print("kill field hoist/copy prop");
    }
    var temp = a.y + 1.3;
    var temp2 = a.z + 1.3;
    print(temp);
    print(temp2);
}
print("Test 3");
test3(0.1);
test3(0.1);
test3(0.1);
var name = "y";
function test4(a131) {
    const v132 = new Ctor();
    var a = v132;
    a.x = a131 + 1.1;
    a.y = a.x + 1.1;
    return a[name];
}
print("Test 4");
print(test4(0.1));
print(test4(0.1));
print(test4(0.1));
print("Test 5");
function test5(a154) {
    const v155 = new Ctor();
    var a = v155;
    a.x = a154 + 1.1;
    a.y = a.x + 1.1;
    a[0] = a154 + 1.2;
    print(a[0]);
    return a[name] + 1.1;
}
print(test5(0.1));
print(test5(0.1));
print(test5(0.1));
print("Test 6");
function test6(a181) {
    const v182 = new Ctor();
    var a = v182;
    a.x = a181 + 1.1;
    a.y = a181 + 1.2;
    for (let i189 = 0; i189 < 2; i189++) {
        var n = a[name];
        a.y = i189 + 1.4;
        a.z = n;
    }
    print(a.z + 0.1);
}
test6(0.1);
test6(0.1);
test6(0.1);
print("Test 7");
function f211(a212) {
    return a212 + 4.4;
}
var func = f211;
function test7(a217) {
    const v219 = a217 + 1.1;
    const v222 = a217 + 2.2;
    const v224 = a217 + 0.1;
    const v225 = func(a217);
    const v227 = a217 + 3.3;
    const v228 = {
        prop1: v219,
        14: 4.4,
        prop2: v222,
        prop1: v224,
        prop5: v225,
        prop3: v227,
    };
    var lit = v228;
    return lit.prop1 + lit.prop5;
}
print(test7(1));
print(test7(1));
function f239(a240) {
    return a240 + 5.5;
}
var func = f239;
print(test7(1));
print("Test 8");
var obj = {};
function f251(a252) {
    var alias = obj;
    const v255 = a252 + 0.1;
    var lit = { prop1: v255 };
    var prop1;
    for (let i261 = 0; i261 < 1; i261++) {
        prop1 = lit.prop1;
    }
    alias.prop1 = prop1;
}
var func = f251;
func(0.1);
func(0.1);
func(0.1);
print(obj.prop1);
