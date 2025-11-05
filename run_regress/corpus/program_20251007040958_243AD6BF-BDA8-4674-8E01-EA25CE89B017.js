function outer() {
    var x = "yes!";
    function inner() {
        console.log(x);
        x = "no!";
    }
    function inner2() {
        return inner;
    }
    return inner2();
}
var escaped = [2];
for (let i13 = 0; i13 < 2; i13++) {
    escaped[i13] = outer();
}
for (i = 0; i < escaped.length; i++) {
    escaped[i]();
}
function outer2() {
    var x = "yes!";
    function inner() {
        console.log(x);
        x = "no!";
    }
    function inner2() {
        return inner;
    }
    return inner2();
}
for (i = 0; i < 2; i++) {
    escaped[i] = outer2();
}
for (i = 0; i < escaped.length; i++) {
    escaped[i]();
}
