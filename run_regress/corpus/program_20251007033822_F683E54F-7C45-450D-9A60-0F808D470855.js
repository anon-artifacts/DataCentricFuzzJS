var x = "5";
var b = false;
function f4() {
    if (b) {
        x = {};
    }
    return 0;
}
check = f4;
var obj = {};
obj.valueOf = check;
function f() {
    try {
        return x + Number(obj);
    } catch(e15) {
        console.log(e15.stack);
    }
}
f();
f();
b = true;
f();
