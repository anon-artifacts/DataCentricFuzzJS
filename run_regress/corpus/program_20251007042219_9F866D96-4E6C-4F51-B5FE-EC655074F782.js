function f0() {
    return "PASS";
}
const t3 = String.prototype;
t3.toString = f0;
const v5 = new String("FAIL");
var mySpace = v5;
print(mySpace.substr(0, 4));
