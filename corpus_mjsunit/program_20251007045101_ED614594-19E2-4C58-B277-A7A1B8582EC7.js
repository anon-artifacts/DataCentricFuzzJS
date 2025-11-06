console.log("Test that finally behaviour is correct.");
function f3() {
    return true;
}
a = { f: f3 };
function f7() {
    return "Fail";
}
const t8 = a.f;
t8.toString = f7;
function f() {
    try {
        a.f();
        a.f();
        return a.f();
    } finally {
        a.f();
    }
}
f();
function f17() {
    var a = true;
    try {
        return a;
    } finally {
        a = false;
    }
}
f17();
try {
    function f22() {
        var a = "PASS";
        try {
            throw a;
        } finally {
            a = "FAIL";
        }
    }
    f22();
} catch(e27) {
}
