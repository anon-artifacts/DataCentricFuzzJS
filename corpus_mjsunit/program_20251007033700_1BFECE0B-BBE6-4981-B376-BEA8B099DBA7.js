function defineSetter(a1) {
    function f3() {
    }
    a1.__defineSetter__("property", f3);
}
defineSetter(Object.prototype);
property = 0;
defineSetter(this);
var keys = Object.keys(this);
