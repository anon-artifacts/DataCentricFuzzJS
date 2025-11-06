const v2 = () => {
    return "inner toString";
};
const v4 = { toString: v2 };
const v5 = (a6, a7) => {
    const v9 = a7 === "toString";
    const v10 = () => {
        return "proxy toString";
    };
    return v9 ? v10 : a6[a7];
};
const v15 = new Proxy(v4, { get: v5 });
"" + v15;
const v19 = () => {
    return "inner valueOf";
};
const v21 = { valueOf: v19 };
const v22 = (a23, a24) => {
    const v26 = a24 === "valueOf";
    const v27 = () => {
        return "proxy valueOf";
    };
    return v26 ? v27 : a23[a24];
};
const v32 = new Proxy(v21, { get: v22 });
"" + v32;
