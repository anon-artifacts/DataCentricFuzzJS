var calledToString = false;
function f2() {
    function f4() {
        calledToString = true;
    }
    const v6 = { toString: f4 };
    const v9 = Object.prototype.hasOwnProperty;
    try { v9.call(null, v6); } catch (e) {}
}
f2();
