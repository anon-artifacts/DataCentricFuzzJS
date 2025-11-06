function TestConstructor() {
    this[0] = 1;
    this[1] = 2;
    this[2] = 3;
}
function bad_func(a8, a9) {
    var s = 0;
    for (let i13 = 0; i13 < 1; ++i13) {
        a8.newFileToChangeMap = undefined;
        var x = a9[0];
        s += x;
    }
    return s;
}
const v23 = new Object();
o = v23;
const v25 = new TestConstructor();
a = v25;
bad_func(o, a);
const v30 = new Object();
o = v30;
const v31 = new TestConstructor();
a = v31;
bad_func(o, a);
const v33 = new Object();
o = v33;
const v34 = new TestConstructor();
a = v34;
bad_func(o, a);
const v36 = new Object();
o = v36;
a = [2.122e-314,2.122e-314,2.122e-314];
bad_func(o, a);
