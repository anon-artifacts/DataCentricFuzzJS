var confuzzle = 0;
function BailFromConstructor() {
    this.x = "cats";
    this.y = confuzzle + 5;
    return 4;
}
function f() {
    var x;
    for (let i13 = 0; i13 < 100; i13++) {
        if (i13 == 99) {
            confuzzle = undefined;
        }
        const v22 = new BailFromConstructor();
        typeof (x = v22);
    }
}
f();
