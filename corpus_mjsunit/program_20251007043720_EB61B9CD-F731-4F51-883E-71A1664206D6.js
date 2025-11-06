const v2 = {
    get p() {
        return 11;
    },
};
var a = v2;
function f() {
    return a;
}
var g = 0;
for (let i8 = 0; i8 < 9; i8++) {
    g += f().p;
}
