var result = "";
function f2() {
    throw "cow";
}
o = { valueOf: f2 };
try {
    String.fromCharCode(o);
} catch(e9) {
    result = e9.toString();
}
