try {
    new Error();
} catch(e2) {
}
const N = 18;
var arr = [];
for (let i8 = 0; i8 < N; ++i8) {
    arr[i8] = "a";
}
arr[N] = "%";
function inner(a16) {
    decodeURI(arr[a16]);
}
function outer() {
    for (let i22 = 0; i22 <= N; ++i22) {
        inner(i22);
    }
}
var caught = false;
try {
    outer();
} catch(e31) {
    caught = true;
}
