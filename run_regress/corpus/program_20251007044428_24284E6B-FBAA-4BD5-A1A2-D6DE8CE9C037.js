function foo(a1) {
    return a1;
}
function run() {
    const v5 = new Array(2);
    var line = v5;
    for (let i8 = 3; i8 > 0; i8 = i8 - 1) {
        if (i8 < foo(line.length)) {
            const v18 = new Array(i8);
            line = v18;
        }
        line[0] = i8;
    }
}
void 0;
run();
void 0;
run();
