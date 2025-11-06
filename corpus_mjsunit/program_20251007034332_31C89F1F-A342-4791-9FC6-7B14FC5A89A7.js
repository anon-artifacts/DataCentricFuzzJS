function assert(a1, a2) {
}
function assertThrowTypeError(a4, a5, a6) {
    try {
        let n = a4 - a5;
    } catch(e9) {
    }
}
function f10() {
}
let o = { valueOf: f10 };
Symbol("3");
try {
    let n = o - Symbol("3");
} catch(e21) {
}
