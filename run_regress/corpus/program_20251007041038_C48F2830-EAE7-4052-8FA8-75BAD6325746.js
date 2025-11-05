function f0() {
}
async function* f() {
    return "success";
}
async function* f3() {
}
var AsyncGenerator = f3.constructor;
f instanceof AsyncGenerator;
const v8 = (a9) => {
    f0("success", a9.value);
};
f().next().then(v8);
