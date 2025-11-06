function f0() {
    var array = [,];
    function slice() {
        return array.slice();
    }
    slice();
    slice();
    slice();
    [,];
    array.__proto__.push(5);
    var narr = slice();
    Object.getOwnPropertyDescriptor(narr, 0);
    narr[0];
}
f0();
