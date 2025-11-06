var check = [];
function t(a3) {
    check.push(a3);
    return a3;
}
[3,...[t(1)],,...[t(2),t(3)],34,42,...[t(4)]];
[1,2,3,4];
var arr = [1,2,3];
[...arr,arr.pop()];
[1,2,3,3];
