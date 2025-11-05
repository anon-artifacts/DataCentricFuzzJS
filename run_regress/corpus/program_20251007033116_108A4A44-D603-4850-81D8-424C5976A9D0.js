console.log("Test to ensure correct behaviour of Array.array");
Array.isArray([]);
const v6 = new Array();
Array.isArray(v6);
Array.isArray(Array());
Array.isArray(("abc").match(/(a)*/g));
function f14() {
    return Array.isArray(arguments);
}
f14();
Array.isArray();
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(true);
Array.isArray(false);
Array.isArray("a string");
Array.isArray({});
Array.isArray({ length: 5 });
const v34 = Array.prototype;
Array.isArray({ __proto__: v34, length: 1, 0: 1, 1: 2 });
