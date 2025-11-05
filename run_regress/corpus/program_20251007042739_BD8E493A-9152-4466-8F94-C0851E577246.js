let xxx = 1;
let ff;
{
    let inner_x = xxx;
    function f5() {
        return inner_x;
    }
    ff = f5;
}
ff();
xxx = 42;
{
    function f9() {
        return inner_x1;
    }
    ff = f9;
    let inner_x1 = xxx;
}
ff();
xxx = 31;
{
    let inner_x1 = xxx;
    try {
        const v17 = new Error();
        throw v17;
    } catch(e18) {
        function f19() {
            return inner_x1;
        }
        ff = f19;
    }
}
ff();
