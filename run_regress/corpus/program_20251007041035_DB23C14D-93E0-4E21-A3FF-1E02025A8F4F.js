function f0() {
    var array = [,];
    function increment(a5, a6, a7) {
        a7[a6] = a5 + 1;
    }
    function forEach() {
        array.forEach(increment);
    }
    forEach();
    forEach();
    forEach();
    [,];
    array.__proto__.push(5);
    Object.getOwnPropertyDescriptor(array, 0);
    forEach();
    Object.getOwnPropertyDescriptor(array, 0);
    array[0];
}
f0();
