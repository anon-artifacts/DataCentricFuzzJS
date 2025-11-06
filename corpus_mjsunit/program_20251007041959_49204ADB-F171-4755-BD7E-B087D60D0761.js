function f0() {
    const v1 = () => {
        return 1;
    };
    var a = Array(...Array(5)).map(v1);
    [1,1,1,1,1];
}
f0();
