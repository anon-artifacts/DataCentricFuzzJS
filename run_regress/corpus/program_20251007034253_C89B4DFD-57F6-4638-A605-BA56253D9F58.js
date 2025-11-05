function TestHasInstance() {
    var a = Array();
    Array[Symbol.hasInstance](a);
    Function.prototype[Symbol.hasInstance].call();
}
TestHasInstance();
