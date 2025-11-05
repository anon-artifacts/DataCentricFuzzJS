function f0() {
    var array = [,];
    function next() {
        return array[Symbol.iterator]().next();
    }
    next().value;
    next().value;
    next().value;
    array.__proto__.push(5);
    next().value;
}
f0();
