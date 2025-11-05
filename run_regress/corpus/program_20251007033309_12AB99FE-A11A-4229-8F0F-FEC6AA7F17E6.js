const v2 = new Array(86016);
var a = v2;
var i = 0;
for (let i7 = 50; i7 < 60; i7++) {
    a[i7] = i7 + 10;
}
for (let i16 = 0; i16 < 10; i16++) {
    a[i16] = i16 + 20;
}
for (let i25 = 100; i25 < 110; i25++) {
    a[i25] = i25 * 10;
}
const v34 = new Array(86016);
var b = v34;
for (let i37 = 50; i37 < 60; i37++) {
    a[i37] = i37 + 10;
}
for (let i46 = 0; i46 < 10; i46++) {
    a[i46] = i46 + 20;
}
for (let i55 = 100; i55 < 110; i55++) {
    a[i55] = i55 + 40;
}
var c = a.concat(b);
print(c[50]);
print(c[0]);
print(a.shift());
print(a[7]);
print(a[8]);
print(a.shift());
print(a.length);
var d = a.slice(10);
print(d[41]);
print(d[90]);
a.splice(45, 3, "a", "b", "c");
print(a[45]);
print(a[46]);
print(a[50]);
print(a[100]);
print(a.length);
var x = [];
x[4294967295] = 0;
print(x[4294967295], x.length);
x[4294967294] = 1;
print(x[4294967294], x.length === 4294967295);
x[4294967293] = 2;
print(x[4294967293], x.length === 4294967295);
function errors() {
    try {
        const v124 = new Array(-0);
        var e1 = v124;
        print("[-0.0].length = " + e1.length);
    } catch(e130) {
        print("[-0.0]: error");
    }
    try {
        const v135 = new Array(-0.01);
        var e1 = v135;
        print("[-0.01].length = " + e1.length);
    } catch(e141) {
        print("[-0.01]: error");
    }
    try {
        const v145 = new Array(0.01);
        var e1 = v145;
        print("[0.01].length = " + e1.length);
    } catch(e151) {
        print("[0.01]: error");
    }
    try {
        const v155 = new Array(4294967295);
        var e1 = v155;
        print("[4294967295.0].length = " + e1.length);
    } catch(e161) {
        print("[4294967295.0]: error");
    }
    try {
        const v165 = new Array(4294967294.9);
        var e1 = v165;
        print("[4294967294.9].length = " + e1.length);
    } catch(e171) {
        print("[4294967294.9]: error");
    }
    try {
        const v175 = new Array(4294967296);
        var e1 = v175;
        print("[4294967296.0].length = " + e1.length);
    } catch(e181) {
        print("[4294967296.0]: error");
    }
}
var sparse = [];
sparse[2147483648] = "hello";
if (sparse[1] != undefined) {
    print("Bad element in sparse array");
}
sparse[0] = "here i am";
print(sparse[0]);
errors();
function f196() {
    print("Win8 611708: bound size to max array length");
    var a = [];
    a[4294967293] = 1;
    a[0] = 0;
    a[4294967294] = 2;
    a[4294967295] = 3;
    for (let i206 = 0; i206 < 10; i206++) {
        a[4294967296 + i206] = i206;
    }
    print("length:", a.length);
    for (const v217 in a) {
        print(v217 + ":", a[v217]);
    }
}
f196();
