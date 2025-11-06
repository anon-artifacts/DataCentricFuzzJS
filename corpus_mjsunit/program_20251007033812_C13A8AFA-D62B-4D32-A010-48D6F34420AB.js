async function asyncFunc1(a1) {
    return a1 * a1;
}
const v3 = (a4) => {
    return print(a4);
};
const v7 = (a8) => {
    return print(a8);
};
asyncFunc1(10).then(v3, v7);
async function f14(a15) {
    return a15 * a15;
}
var asyncFunc2 = f14;
const v18 = (a19) => {
    return print(a19);
};
const v22 = (a23) => {
    return print(a23);
};
asyncFunc2(10).then(v18, v22);
const v29 = async (a30) => {
    return a30 * a30;
};
var asyncFunc3 = v29;
const v33 = (a34) => {
    return print(a34);
};
const v37 = (a38) => {
    return print(a38);
};
asyncFunc3(10).then(v33, v37);
const v44 = async (a45) => {
    return a45 * a45;
};
var asyncFunc4 = v44;
const v48 = (a49) => {
    return print(a49);
};
const v52 = (a53) => {
    return print(a53);
};
asyncFunc4(10).then(v48, v52);
