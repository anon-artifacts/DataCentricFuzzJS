const v0 = (a1) => {
    const v2 = (a3, a4) => {
        return a4(a1(a3));
    };
    return v2;
};
let lift = v0;
lift(isNaN);
