var maxPushArgs = 3;
for (let i3 = 0; i3 <= 1; i3++) {
    var isArray = i3 === 0;
    for (let i13 = 1; i13 <= maxPushArgs; i13++) {
        var testType = isArray ? "Array" : "Object";
        print((testType + " Test ") + i13);
        var a = Create(isArray);
        print("Pushing...");
        PushArgs(a, i13, "Bef");
        Output(a, i13);
        print("Pushing...");
        PushArgs(a, 1, "Aft");
        Output(a, i13 + 1);
    }
}
function Create(a46) {
    var arr;
    if (a46) {
        arr = [];
    } else {
        arr = {};
        arr.push = Array.prototype.push;
        arr.length = 4294967294;
    }
    arr[0] = "Value0";
    arr[1] = "Value1";
    arr[2] = "Value2";
    arr[4294967293] = "Value4294967293";
    return arr;
}
function PushArgs(a60, a61, a62) {
    if ((a61 < 1) || (a61 > maxPushArgs)) {
        print("FAIL");
        return;
    }
    try {
        if (a61 === 1) {
            a60.push(a62 + "1");
        } else {
            if (a61 === 2) {
                a60.push(a62 + "1", a62 + "2");
            } else {
                if (a61 === 3) {
                    a60.push(a62 + "1", a62 + "2", a62 + "3");
                }
            }
        }
        print("No exception");
    } catch(e94) {
        print((e94.name + ": ") + e94.message);
    }
}
function Output(a103, a104) {
    if (a104 > maxPushArgs) {
        print("FAIL");
        return;
    }
    print("Length is: " + a103.length);
    OutputIndex(a103, 0);
    OutputIndex(a103, 1);
    OutputIndex(a103, 2);
    for (let i122 = 0; i122 <= a104; i122++) {
        var index = "429496729" + (3 + i122);
        OutputIndex(a103, index);
    }
}
function OutputIndex(a134, a135) {
    var v = a134[a135];
    if (v == undefined) {
        v = "UNDEFINED";
    }
    print((a135 + ": ") + v);
}
function foo() {
    var obj = {};
    const v151 = Array.prototype.push;
    const t76 = Object.prototype;
    t76.push = v151;
    var x;
    function f157() {
        x = true;
        return 5;
    }
    Object.defineProperty(obj, "length", { get: f157 });
    x = false;
    try {
        var len = obj.push(1);
    } catch(e166) {
        print("caught exception calling push");
    }
    print(x);
    return len;
}
print(foo());
function bar() {
    var a = Number();
    const v182 = Array.prototype.push;
    const t97 = Number.prototype;
    t97.push = v182;
    a.push(1);
}
bar();
function test0(a188) {
    for (let i190 = 0; i190 < 2; i190++) {
        let v196 = a188.length;
        v196--;
        a188.push(3);
    }
    return a188.length;
}
const v204 = new Array(10);
print("ary.length = " + test0(v204));
function popTest() {
    ([,]).pop();
}
print(popTest());
