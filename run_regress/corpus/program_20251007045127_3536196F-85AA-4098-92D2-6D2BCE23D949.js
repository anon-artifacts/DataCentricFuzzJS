var a = 42;
function f3() {
    this.x = 7;
}
function f6() {
    this.x = a | 1;
}
function f10() {
    this.x = a;
}
var obj = { x: 0, f: f3, g: f6, h: f10 };
var i;
for ((() => {
        i = 0;
    })();
    i < 5;
    i++) {
    obj.f();
}
obj.f();
obj.x;
for ((() => {
        i = 0;
    })();
    i < 5;
    i++) {
    obj.g();
}
obj.g();
obj.x;
for ((() => {
        i = 0;
    })();
    i < 5;
    i++) {
    obj.h();
}
obj.h();
obj.x;
