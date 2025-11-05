function f0() {
    var f = ([]).concat;
    f();
}
function f5() {
    var f = ([]).push;
    f();
}
function f10() {
    var f = ([]).shift;
    f();
}
function f15() {
    const t13 = ([]).concat;
    t13();
}
function f20() {
    const t17 = ([]).push;
    t17();
}
function f25() {
    const t21 = ([]).shift;
    t21();
}
var functions = [f0,f5,f10,f15,f20,f25];
for (let i33 = 0; i33 < 5; ++i33) {
    for (const v39 in functions) {
        print(functions[i33]);
        functions[v39];
    }
    if (i33 === 3) {
        for (const v47 in functions) {
        }
    }
}
