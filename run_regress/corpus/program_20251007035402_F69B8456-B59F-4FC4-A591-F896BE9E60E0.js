var x = ("1").repeat((32 * 1024) * 1024);
for (let i8 = x;;) {
    try {
        function f12() {
            return x;
        }
        i8 += { toString: f12 };
    } catch(e14) {
        break;
    }
}
