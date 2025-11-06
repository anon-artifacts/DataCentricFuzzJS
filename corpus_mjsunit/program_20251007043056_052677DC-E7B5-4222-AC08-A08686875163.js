function foo(a1, a2) {
    return a1 == a2;
}
function bar(a5, a6) {
    if (a5 == a6) {
        return "yes";
    } else {
        return "no";
    }
}
function baz(a11, a12) {
    if (a11 != a12) {
        return "no";
    } else {
        return "yes";
    }
}
var o = { f: 1 };
var p = { f: 2 };
var q = { f: 3 };
var array1 = [o,p,q];
var array2 = [o,null];
var expecteds = [true,"yes","yes",false,"no","no",false,"no","no",false,"no","no",false,"no","no",false,"no","no"];
var expectedsIndex = 0;
function dostuff(a53) {
    if (a53 == expecteds[expectedsIndex % expecteds.length]) {
        expectedsIndex++;
        return;
    }
    print((((((("Bad result with a = " + a) + ", b = ") + b) + ": wanted ") + expecteds[expectedsIndex % expecteds.length]) + " but got ") + a53);
    throw "Error";
}
for (let i79 = 0; i79 < 100000; ++i79) {
    var a = array1[i79 % array1.length];
    var b = array2[i79 % array2.length];
    dostuff(foo(a, b));
    dostuff(bar(a, b));
    dostuff(baz(a, b));
}
