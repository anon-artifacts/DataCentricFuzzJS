function f0() {
    return f0;
}
class C1 extends f0 {
    valueOf() {
        [] = this;
    }
}
function f3() {
    return ("Return: " + "Same name property").toLowerCase();
}
f3();
function f9() {
    var str = "Same name getter";
    try {
        const v14 = {
            get x() {
                return "second";
            },
        };
        var o = v14;
        ("o.x : " + o.x).toUpperCase();
    } catch(e20) {
    }
    ("Return: " + str).codePointAt();
    return f3;
}
f9();
