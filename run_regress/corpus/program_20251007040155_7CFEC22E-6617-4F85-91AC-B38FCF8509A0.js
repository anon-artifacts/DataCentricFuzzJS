expected = 4;
var fourth = { nextSibling: null };
var third = { nextSibling: fourth };
var second = { nextSibling: third };
var first = { nextSibling: second };
function f() {
    let loopcount = 0;
    for (let i14 = first; i14; i14 = i14.nextSibling) {
        loopcount++;
    }
    return loopcount;
}
actual = f();
