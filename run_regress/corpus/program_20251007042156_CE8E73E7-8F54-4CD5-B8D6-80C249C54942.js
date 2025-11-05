function f0() {
}
print = f0;
function constructor() {
}
function assertHasOwnProperties(a4, a5) {
    for (let i7 = 0; i7 < a5; i7++) {
    }
}
try {
    Object.keys();
} catch(e14) {
    print(e14.stack);
}
const v19 = new Object();
var x1 = v19;
try {
    new Function("A Man Called Horse", x1.d);
} catch(e25) {
    print(e25.stack);
}
try {
    (-true).toPrecision(48, "lib1-f1");
} catch(e34) {
    print(e34.stack);
}
