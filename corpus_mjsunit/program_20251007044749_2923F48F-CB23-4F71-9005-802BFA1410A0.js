function write(a1) {
    print(a1 + "");
}
function f6() {
    function f7() {
        return true ? true : x;
    }
    f7();
    function x() {
    }
}
f6();
try {
    var z = Object instanceof null;
} catch(e19) {
    write(e19.message);
}
function f22() {
    function f23() {
        return true ? true : x;
    }
    f23();
    var x;
}
f22();
try {
    var z = Object instanceof null;
} catch(e36) {
    write(e36.message);
}
function f39() {
    function f40() {
        return false ? x : false;
    }
    f40();
    function x() {
    }
}
f39();
try {
    var z = Object instanceof null;
} catch(e52) {
    write(e52.message);
}
function f55() {
    function f56() {
        return false ? x : false;
    }
    f56();
    var x;
}
f55();
try {
    var z = Object instanceof null;
} catch(e69) {
    write(e69.message);
}
