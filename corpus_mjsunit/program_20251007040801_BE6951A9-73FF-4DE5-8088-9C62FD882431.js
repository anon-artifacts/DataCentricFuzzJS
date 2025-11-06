function f0() {
    let v1 = arguments;
    return v1++;
}
isNaN(f0());
function f6() {
    let v7 = arguments;
    return ++v7;
}
isNaN(f6());
function f11() {
    let v12 = arguments;
    return v12--;
}
isNaN(f11());
function f16() {
    let v17 = arguments;
    return --v17;
}
isNaN(f16());
