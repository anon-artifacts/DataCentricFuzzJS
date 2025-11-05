console.log("This test makes sure we don't incorrectly cache virtual registers in system registers across VM branches");
function f4() {
    return true;
}
const t4 = true ? f4 : a.b;
t4();
function f10() {
    return true;
}
const t9 = f10 || a.b;
t9();
function f15() {
    function f17() {
        return true;
    }
    const t15 = true ? f17 : a.b;
    return t15();
}
f15();
function f23() {
    function f24() {
        return true;
    }
    const t23 = f24 || a.b;
    return t23();
}
f23();
function f30() {
    var i = 0;
    var result = false;
    var a = ({ c: true }).c;
    do {
        result = a;
        i++;
    } while (i < 2)
    return result;
}
f30();
