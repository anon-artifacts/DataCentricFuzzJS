console.log("Tests whether peephole optimizations on bytecode properly deal with local registers.");
function if_less_test() {
    var a = 0;
    var b = 2;
    const v10 = 1 < 2;
    a = v10;
    if (v10) {
        return a == 1;
    }
}
if_less_test();
function if_else_less_test() {
    var a = 0;
    var b = 2;
    const v21 = 1 < 2;
    a = v21;
    if (v21) {
        return a == 1;
    } else {
        return false;
    }
}
if_else_less_test();
function conditional_less_test() {
    var a = 0;
    var b = 2;
    const v33 = 1 < 2;
    return v33 ? (a = v33) == 1 : false;
}
conditional_less_test();
function logical_and_less_test() {
    var a = 0;
    var b = 2;
    const v46 = 1 < 2;
    return v46 && ((a = v46) == 1);
}
logical_and_less_test();
function logical_or_less_test() {
    var a = 0;
    var b = 2;
    const v58 = 1 < 2;
    var result = v58 || ((a = v58) == 1);
    return a == 1;
}
logical_or_less_test();
function do_while_less_test() {
    var a = 0;
    var count = 0;
    do {
        if (count == 1) {
            return a == 1;
        }
        count++;
    } while ((() => {
            const v78 = 1 < 2;
            a = v78;
            return v78;
        })())
}
do_while_less_test();
function while_less_test() {
    var a = 0;
    while ((() => {
            const v85 = 1 < 2;
            a = v85;
            return v85;
        })()) {
        return a == 1;
    }
}
while_less_test();
function for_less_test() {
    for (let i91 = 0;
        (() => {
            const v94 = 1 < 2;
            i91 = v94;
            return v94;
        })();
        ) {
        return i91 == 1;
    }
}
for_less_test();
