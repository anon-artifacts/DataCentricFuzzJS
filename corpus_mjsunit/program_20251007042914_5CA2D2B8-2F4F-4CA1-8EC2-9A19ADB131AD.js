function f0() {
}
var BUGNUMBER = 108440;
var summary = "Shouldn't crash trying to add an array as an element of itself";
var self = this;
var temp = "";
f0(BUGNUMBER);
f0(summary);
var a = [];
a[a.length] = a;
temp = a;
a = [];
for (const v15 in self) {
    temp = v15;
    const v16 = self[v15];
    a[a.length] = v16;
    temp = v16;
}
a = [];
for (let i20 = 0; i20 < 10; i20++) {
    a[a.length] = a;
}
a = [];
for (let i29 = 0; i29 < 10; i29++) {
    const v35 = a.toString();
    a[a.length] = v35;
}
a = [];
try {
    for (let i39 = 0; i39 < 10; i39++) {
        const v45 = a.toSource();
        a[a.length] = v45;
    }
} catch(e47) {
}
f0("No Crash", "No Crash", "");
