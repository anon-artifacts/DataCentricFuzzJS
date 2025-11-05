function f0() {
    function f(a2, a3, a4) {
        return Array.prototype.slice.call(arguments);
    }
    let result = f(456, 789, 111112);
    result[0];
    result[1];
    result[2];
    result.length;
}
f0();
function f24() {
    function f(a26, a27, a28) {
        return Array.prototype.slice.call(arguments);
    }
    let result = f(456, 789, 111112, 543, 654);
    result[0];
    result[1];
    result[2];
    result[3];
    result[4];
    result.length;
}
f24();
