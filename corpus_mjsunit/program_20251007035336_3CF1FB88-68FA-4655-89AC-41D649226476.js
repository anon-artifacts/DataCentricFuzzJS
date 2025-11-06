function f0(a1) {
    var a = [];
    function f4() {
        a = [];
        for (let i7 = 0; i7 < 10; i7++) {
            a.push(0);
        }
        a.length;
    }
    this.fillArray = f4;
    a1.go(this);
}
var Test = f0;
function f23(a24) {
    function f25() {
        a24.fillArray();
    }
    a24.fill = f25;
}
const v28 = new Test({ go: f23 });
v28.fill();
function f30(a31) {
    for (let i33 = 0; i33 < 10; i33++) {
        a31.fillArray();
    }
}
new Test({ go: f30 });
