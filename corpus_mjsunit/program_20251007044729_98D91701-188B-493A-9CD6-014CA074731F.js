function f0() {
    custom_valueOf.caller;
    return 2;
}
var custom_valueOf = f0;
function f6() {
    custom_toString.caller;
    return "I used to be an adventurer like you";
}
var custom_toString = f6;
var object = {};
object.valueOf = custom_valueOf;
object.toString = custom_toString;
Number(object);
String(object)[0];
