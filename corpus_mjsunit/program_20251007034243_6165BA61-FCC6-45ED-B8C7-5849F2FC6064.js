function f() {
    for (let i2 = 0; i2 < 3; i2++) {
        var x = -i2 / 100;
        x * -100;
    }
}
f();
function g() {
    for (let i18 = 0; i18 < 2; i18++) {
        var a = i18 ? true : false;
        var x = -a / 100;
        x * -100;
    }
}
g();
function h() {
    for (let i38 = 0; i38 < 20; i38++) {
        var x = (2147483636 + i38) / 100;
    }
}
h();
