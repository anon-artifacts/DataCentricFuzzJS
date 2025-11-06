function f0() {
    var array = [,];
    function findIndex() {
        const v5 = (a6) => {
            return a6 > 0;
        };
        return array.findIndex(v5);
    }
    findIndex();
    -1;
    array.__proto__.push(6);
    findIndex();
}
f0();
