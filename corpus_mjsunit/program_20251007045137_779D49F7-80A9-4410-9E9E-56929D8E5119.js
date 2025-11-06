function f1() {
}
const v2 = new Promise(f1);
v2.then();
function f4() {
    return Promise;
}
v2.constructor = f4;
