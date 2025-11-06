function f0() {
    const v2 = new Error();
    throw v2;
}
const v10 = {
    f: f0,
    get j() {
        o.h();
    },
    set k(a7) {
        o.j;
    },
};
var o = v10;
function f12() {
    o.f();
}
o.g1 = f12;
o.g2 = o.g1;
function f15() {
    o.g1();
}
o.h = f15;
try {
    o.k = 42;
} catch(e18) {
    function f19(a20, a21) {
        return a21;
    }
    Error.prepareStackTrace = f19;
    var frames = e18.stack;
    Error.prepareStackTrace = undefined;
    frames[0].getMethodName();
    frames[1].getMethodName();
    frames[2].getMethodName();
    frames[3].getMethodName();
    frames[4].getMethodName();
    frames[5].getMethodName();
}
function testMethodName(a45, a46, a47) {
    try {
        function f48(a49, a50) {
            return a50;
        }
        Error.prepareStackTrace = f48;
        a45();
    } catch(e53) {
        const frame = e53.stack[a46];
        frame.getMethodName();
    } finally {
        Error.prepareStackTrace = undefined;
    }
}
const v60 = () => {
    const v62 = new Error();
    throw v62;
};
const thrower = { valueOf: v60 };
{
    const str = "";
    const v67 = () => {
        str.indexOf(str, thrower);
    };
    testMethodName(v67, 1, "indexOf");
}
{
    const nr = 42;
    const v74 = () => {
        nr.toString(thrower);
    };
    testMethodName(v74, 1, "toString");
}
