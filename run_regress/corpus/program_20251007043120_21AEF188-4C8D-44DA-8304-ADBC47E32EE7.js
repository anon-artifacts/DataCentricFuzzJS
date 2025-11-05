var consCalled = false;
function Object() {
    consCalled = true;
}
function Array() {
    consCalled = true;
}
var x1 = {};
var x2 = { a: 3, b: 4 };
var x3 = [];
var x4 = [1,2,3];
