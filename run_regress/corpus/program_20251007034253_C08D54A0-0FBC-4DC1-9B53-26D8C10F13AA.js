function f0() {
    var array = [,];
    function filter() {
        const v5 = (a6) => {
            return a6 > 0;
        };
        return array.filter(v5);
    }
    filter();
    filter();
    filter();
    [];
    array.__proto__.push(6);
    var narr = filter();
    Object.getOwnPropertyDescriptor(narr, 0);
    [6];
}
f0();
