var arr = [];
var ki = arr.keys();
var ei = arr.entries();
var p = Object.getPrototypeOf(ki);
Object.getPrototypeOf(ei);
for (const v10 of ki) {
    throw "FAIL";
}
for (const v12 of ei) {
    throw "FAIL";
}
