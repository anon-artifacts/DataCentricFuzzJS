function F() {
}
function GrowNamed(a2) {
    a2.a = 1;
    a2.b = 2;
    a2.c = 3;
    a2.d = 4;
    a2.e = 5;
    a2.f = 6;
}
function GrowKeyed(a10) {
    var names = ["a","b","c","d","e","f"];
    var i = 0;
    a10[names[i++]] = i;
    a10[names[i++]] = i;
    a10[names[i++]] = i;
    a10[names[i++]] = i;
    a10[names[i++]] = i;
    a10[names[i++]] = i;
}
const v33 = new F();
GrowNamed(v33);
const v35 = new F();
GrowNamed(v35);
const v37 = new F();
GrowNamed(v37);
const v39 = new F();
GrowKeyed(v39);
const v41 = new F();
GrowKeyed(v41);
const v43 = new F();
GrowKeyed(v43);
