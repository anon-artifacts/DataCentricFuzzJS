function f0() {
    var array = [,];
    function lastIndexOf(a5) {
        return array.lastIndexOf(a5);
    }
    lastIndexOf(6);
    -1;
    array.__proto__.push(6);
    lastIndexOf(6);
}
f0();
