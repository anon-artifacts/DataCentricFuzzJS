function MyReplace(a1, a2, a3, a4, a5, a6, a7) {
    print("$0=" + a1);
    print("$1=" + a2);
    print("$2=" + a3);
    print("$3=" + a4);
    print("$4=" + a5);
    print("offset=" + a6);
    print("input=" + a7);
    return a1;
}
var p = /(a)(b)(c)(d)/g;
var s = "xxabcdxxabcdxx";
print(s.replace(p, MyReplace));
function f37(a38, a39, a40) {
    this.x = 10;
    return "xyz";
}
var replacefn = f37;
const v47 = new String("abcdef");
var a = v47;
print(a.replace("def", replacefn));
print(x);
function f54(a55) {
    print(re.lastIndex);
    return "_" + a55;
}
replacefn = f54;
var re = /abc/g;
var str = "abcabc";
re.lastIndex = 3;
print(str.replace(re, replacefn));
