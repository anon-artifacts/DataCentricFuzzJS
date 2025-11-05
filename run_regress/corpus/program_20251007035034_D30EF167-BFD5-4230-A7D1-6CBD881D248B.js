console.log("Test that a generic array (object) accepts DFG PutByValueDirect operation.");
function foo1() {
    var computedProperty1 = "hello";
    var computedProperty2 = 42;
    var object = { [computedProperty1]: "world", [computedProperty2]: "world2", he: "a", 30000: 42 };
    return object.hello;
}
function foo2() {
    var computedProperty1 = "hello";
    var computedProperty2 = 42;
    var object = { [computedProperty1]: "world", [computedProperty2]: "world2", he: "a", 30000: 42 };
    return object[42];
}
for (let i28 = 0; i28 < 200; i28++) {
    foo1();
}
foo1();
for (let i37 = 0; i37 < 200; i37++) {
    foo2();
}
foo2();
