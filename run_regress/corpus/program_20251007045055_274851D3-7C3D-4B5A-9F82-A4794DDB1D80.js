function outer() {
    var f = "f";
    if (true) {
        function f4() {
            if (f !== "f") {
                WScript.Echo("fail");
                throw 1;
            }
        }
        let o = { x: f4 };
        function i() {
        }
        o.x();
    }
}
for (let i16 = 0; i16 < 100; i16++) {
    arr = [10000];
}
outer();
