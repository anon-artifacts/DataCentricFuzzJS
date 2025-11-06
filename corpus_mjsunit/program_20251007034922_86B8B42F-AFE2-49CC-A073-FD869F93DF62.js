var prototype = Object.create(null);
var object = Object.create(prototype);
function foo() {
    return Object.getPrototypeOf(object);
}
foo();
foo();
foo();
