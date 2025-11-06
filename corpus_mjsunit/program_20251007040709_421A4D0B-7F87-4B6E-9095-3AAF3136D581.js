function foo(a1) {
    Object.defineProperty(arguments, 0, { configurable: true, enumerable: true, writable: true, value: 42 });
    return [a1,arguments[0],arguments];
}
var result = foo(1);
if (result[0] !== 42) {
    const v22 = new Error();
    throw v22;
}
if (result[1] !== 42) {
    const v27 = new Error();
    throw v27;
}
const v28 = result[2];
if (Array.prototype.join.call(v28, ",") != "42") {
    const v37 = new Error();
    throw v37;
}
var array = [];
for (const v41 in result[2]) {
    array.push(v41);
}
if (array.join(",") != "0") {
    const v48 = new Error();
    throw v48;
}
if (Object.keys(result[2]).join(",") != "0") {
    const v57 = new Error();
    throw v57;
}
