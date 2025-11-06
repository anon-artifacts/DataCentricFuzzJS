function f() {
    const b = 0;
    b = 0;
    switch (1) {
        case 0:
    }
}
var err;
try {
    f();
} catch(e8) {
    err = e8;
}
err.name;
function g() {
    const z = 0;
    while (z = 1, 1) {
    }
}
err = null;
try {
    g();
} catch(e17) {
    err = e17;
}
err.name;
