function f1() {
}
const v2 = new Promise(f1);
var test = v2;
function f4() {
}
test.constructor = f4;
const v5 = (a6) => {
    return print(a6 + " FAILED!");
};
Promise.resolve(test).catch(v5);
