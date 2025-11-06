function B() {
}
const t2 = B.prototype;
t2.x = 1;
const v3 = new B();
var d = v3;
var names = ["z","z","z","z","z","z","z","x"];
for (let i16 = 0; i16 < names.length; i16++) {
    x = d.x;
    d[names[i16]] = 2;
    y = d.x;
}
