function TestCase(a1, a2, a3, a4, a5) {
    print(a1);
    const v9 = new RegExp(a3, a4);
    var re = v9;
    var output = a5.replace(re, MakeReplaceString);
}
function MakeReplaceString() {
    var l = arguments.length;
    const v21 = new Array(l - 3);
    var a = v21;
    a.push(arguments[0]);
    for (let i27 = 2; i27 < (l - 2); i27++) {
        a.push(arguments[i27]);
    }
    return ((("[@" + arguments[l - 2]) + ":") + a.join(",")) + "]";
}
function f50() {
    TestCase(1, "ajaxNiceForm.villesHome([@24:#OBJ#])", "#OBJ#", "g", "ajaxNiceForm.villesHome(#OBJ#)");
    TestCase(2, "A long string with no non-ASCII characters", "Unicode string ሴ", "g", "A long string with no non-ASCII characters");
}
f50();
