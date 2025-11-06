console.log("Tests that we don't emit unnecessary speculation checks when performing an int32 to double conversion on a value that is proved to be a number, predicted to be an int32, but not proved to be an int32.");
function foo(a4, a5) {
    var x = a4.f;
    var y;
    function bar() {
        return y;
    }
    var z = x + a5;
    y = x;
    if (z > 1) {
        return (y + a5) + bar();
    } else {
        return 72;
    }
}
for (let i20 = 0; i20 < 200; ++i20) {
    foo({ f: 5 }, 42.5);
}
