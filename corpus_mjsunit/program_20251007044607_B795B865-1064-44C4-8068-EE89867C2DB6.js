function shouldThrow(a1, a2) {
    var errorThrown = false;
    var error = null;
    try {
        a1();
    } catch(e8) {
        errorThrown = true;
        error = e8;
    }
}
var iterator;
var a = [];
function* foo(a15) {
    while (1) {
        var q = a.pop();
        if (q) {
            q.__proto__ = iterator;
            q.next();
        }
        yield a15++;
    }
}
function* foo2() {
    yield;
}
var temp = foo2(0);
for (let i28 = 0; i28 < 10; i28++) {
    var q = {};
    q.__proto__ = temp;
    const v36 = () => {
        q.next();
    };
    shouldThrow(v36, `TypeError: |this| should be a generator`);
    q.__proto__ = {};
    a.push(q);
}
iterator = foo(0);
var q = {};
q.__proto__ = iterator;
const v46 = () => {
    q.next();
};
shouldThrow(v46, `TypeError: |this| should be a generator`);
