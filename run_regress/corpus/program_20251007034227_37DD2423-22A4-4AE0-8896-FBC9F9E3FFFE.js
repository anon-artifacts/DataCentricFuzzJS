function deopt() {
}
function fun3() {
    const v2 = deopt();
    var r = { 113: v2, 113: 7 };
    return r[113];
}
fun3();
fun3();
var y = fun3();
