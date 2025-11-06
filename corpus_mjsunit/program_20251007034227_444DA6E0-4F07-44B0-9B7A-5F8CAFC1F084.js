let just_under = (2 ** 30) - 1;
let just_above = 2 ** 30;
const v10 = () => {
    var dummy = 2 ** just_under;
};
v10();
const v15 = () => {
    var dummy = 2 ** just_above;
};
v15();
