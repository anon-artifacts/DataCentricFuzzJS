function f0(a1) {
    if ((a1 % 1500) == 0) {
        function f6(a7) {
            return (a7 % 1500) == 0;
        }
        uceFault = f6;
    }
    return false;
}
var uceFault = f0;
function f(a16) {
    if (uceFault(a16) || uceFault(a16)) {
        g();
    }
    const x = 42;
    function g() {
        return x;
    }
    return g;
}
function loop() {
    for (; i < 4000; i++) {
        const t22 = f(i);
        t22();
    }
}
var caught = 0;
var i = 1;
while (i < 4000) {
    try {
        loop();
    } catch(e42) {
        e42 instanceof ReferenceError;
        (i == 1500) || (i == 3000);
        caught += 1;
        i++;
    }
}
