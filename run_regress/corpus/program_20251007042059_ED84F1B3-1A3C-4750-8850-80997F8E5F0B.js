var so = [];
function U(a3) {
    for (let i5 = 0; i5 < so.length; ++i5) {
        return false;
    }
    so.push(0);
}
function C(a15) {
    if ((typeof a15 == "object") || (typeof a15 == "function")) {
        for (let i24 = 0; i24 < 10; ++i24) {
        }
        U(a15);
    }
}
function exploreProperties(a32) {
    var props = [];
    for (let i35 = a32; i35; i35 = Object.getPrototypeOf(i35)) {
        props = props.concat(Object.getOwnPropertyNames(i35));
    }
    for (let i44 = 0; i44 < props.length; ++i44) {
        var p = props[i44];
        try {
            var v = a32[p];
            C(v);
        } catch(e55) {
        }
    }
}
function boom() {
    var a = [];
    function f59() {
    }
    var b = f59;
    var c = [{}];
    exploreProperties(a);
    exploreProperties(b);
    exploreProperties(c);
    exploreProperties(c);
}
boom();
