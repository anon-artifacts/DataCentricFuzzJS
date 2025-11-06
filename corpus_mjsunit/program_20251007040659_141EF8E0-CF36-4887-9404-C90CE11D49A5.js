function f0() {
    var array = [,];
    function every() {
        const v5 = (a6) => {
            return a6 > 0;
        };
        return array.every(v5);
    }
    every();
    every();
    every();
    const v15 = -6;
    array.__proto__.push(v15);
    every();
}
f0();
