var BUGNUMBER = 1185106;
var summary = "Bound names of async functions";
print((BUGNUMBER + ": ") + summary);
async function test() {
}
test.name;
async function test2() {
}
var test2 = test2;
test2.name;
async function f16() {
}
var anon = f16;
anon.name;
if ((typeof Reflect !== "undefined") && Reflect.parse) {
    var tree = Reflect.parse("export default async function() {}", { target: "module" });
    tree.body[0].declaration.id.name;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
