function Person() {
}
function Ninja() {
}
const v2 = new Person();
Ninja.prototype = v2;
function House() {
}
var empty = {};
const v6 = new Person();
var person = v6;
const v8 = new Ninja();
var ninja = v8;
const v10 = new House();
var house = v10;
const v13 = new String();
var string = v13;
var bindNinja = Ninja.bind({});
var array = {};
array.__proto__ = Array.prototype;
var array2 = {};
array2.__proto__ = array.prototype;
function test(a26, a27) {
    return a26 instanceof a27;
}
function test2(a30, a31) {
    return a30 instanceof a31;
}
function test3(a34, a35) {
    return a34 instanceof a35;
}
function test4(a38, a39) {
    return a38 instanceof a39;
}
for (let i42 = 0; i42 != 41; i42++) {
    test(person, Person);
    test(empty, Person);
    test(ninja, Person);
    test(house, Person);
    test(string, Person);
    const v58 = new bindNinja();
    test(v58, Person);
    const v61 = new Ninja();
    test(v61, bindNinja);
    test(string, String);
    test(array, Array);
    test(empty, Object);
    test(0.1, Object);
    var err = false;
    try {
        test(0.1, 5);
    } catch(e79) {
        err = true;
    }
    var err = false;
    try {
        test(empty, empty);
    } catch(e85) {
        err = true;
    }
    var err = false;
    try {
        test(5, empty);
    } catch(e92) {
        err = true;
    }
}
for (let i96 = 0; i96 != 41; i96++) {
    test2(0.1, Object);
}
function Foo() {
}
theproto = {};
Foo.prototype = theproto;
for (let i111 = 0; i111 != 41; i111++) {
    test3(theproto, Foo);
}
