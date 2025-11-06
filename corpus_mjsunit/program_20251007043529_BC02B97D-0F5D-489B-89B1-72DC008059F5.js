function f0() {
    var array = [,3];
    function accumulate(a6, a7, a8, a9) {
        a9[a8] = a7 + a6;
    }
    function reduce() {
        array.reduce(accumulate);
    }
    reduce();
    [,3];
    array.__proto__.push(3);
    reduce();
    [,6];
    Object.getOwnPropertyDescriptor(array, 0);
}
f0();
