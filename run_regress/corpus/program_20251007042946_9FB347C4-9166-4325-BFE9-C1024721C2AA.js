function f0() {
    var array = [,];
    function find() {
        const v5 = (a6) => {
            return a6 > 0;
        };
        return array.find(v5);
    }
    find();
    find();
    find();
    array.__proto__.push(6);
    find();
}
f0();
