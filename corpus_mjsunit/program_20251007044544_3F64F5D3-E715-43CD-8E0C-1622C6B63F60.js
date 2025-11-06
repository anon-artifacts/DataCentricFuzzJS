function f0() {
    var array = [,];
    function some() {
        const v5 = (a6) => {
            return a6 > 0;
        };
        return array.some(v5);
    }
    some();
    some();
    some();
    array.__proto__.push(6);
    some();
}
f0();
