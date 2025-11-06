var escape;
function f2() {
    escape = this;
    return "toString";
}
const t5 = Function.prototype;
t5.toString = f2;
function test3(a8) {
    function f9() {
        return a8;
    }
    var func3 = f9;
    return func3 + "3";
}
console.log(test3("test1"));
console.log(escape());
console.log(test3("test2"));
console.log(escape());
