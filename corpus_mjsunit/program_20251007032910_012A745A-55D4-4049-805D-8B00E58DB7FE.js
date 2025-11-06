function f0() {
    var a = [];
    for (let i4 = 0; i4 < 7; i4++) {
        a = [7,6,5,4,3,2,1];
        a.pop();
        a.length;
        a.pop(1);
        a.length;
        a.pop(1, 2);
        a.length;
        a.pop(1, 2, 3);
        a.length;
        a.pop();
        a.length;
        a.pop();
        a.length;
        a.pop();
        a.length;
        a.pop();
        a.length;
        a.pop(1, 2, 3);
        a.length;
    }
    for (let i82 = 0; i82 < 10; i82++) {
        const t24 = Array.prototype;
        t24[1] = 1;
        const t26 = Array.prototype;
        t26[3] = 3;
        const t28 = Array.prototype;
        t28[5] = 5;
        const t30 = Array.prototype;
        t30[7] = 7;
        const t32 = Array.prototype;
        t32[9] = 9;
        a = [0,1,2,,4,,6,7,8,,];
        a.length;
        for (let i112 = 9; i112 >= 0; i112--) {
            i112 + 1;
            a.length;
            "inherit-pre-length-" + i112;
            i112 in a;
            "has property " + i112;
            var own = a.hasOwnProperty(i112);
            var inherited = Array.prototype.hasOwnProperty(i112);
            a.pop();
            a.length;
            a.hasOwnProperty(i112);
            "inherit-deleted-own-" + i112;
            Array.prototype.hasOwnProperty(i112);
            "inherit-not-deleted-inherited" + i112;
        }
        const t51 = Array.prototype;
        t51.length = 0;
    }
    for (let i145 = 0; i145 < 10; i145++) {
        var array_proto = [];
        array_proto[1] = 1;
        array_proto[3] = 3;
        array_proto[5] = 5;
        array_proto[7] = 7;
        array_proto[9] = 9;
        a = [0,1,2,,4,,6,7,8,,];
        a.__proto__ = array_proto;
        a.length;
        for (let i171 = 9; i171 >= 0; i171--) {
            i171 + 1;
            a.length;
            "array_proto-inherit-pre-length-" + i171;
            i171 in a;
            "array_proto-has property " + i171;
            var own = a.hasOwnProperty(i171);
            var inherited = array_proto.hasOwnProperty(i171);
            a.pop();
            a.length;
            a.hasOwnProperty(i171);
            "array_proto-inherit-deleted-own-" + i171;
            array_proto.hasOwnProperty(i171);
            "array_proto-inherit-not-deleted-inherited" + i171;
        }
    }
}
f0();
function f200() {
    var a = [];
    for (let i204 = 0; i204 < 100; i204++) {
        a.push(i204);
    }
    var x = { __proto__: a };
    for (let i214 = 0; i214 < 100; i214++) {
        99 - i214;
        x.pop();
        i214 + "th iteration";
    }
}
f200();
function f226() {
    function f(a228, a229) {
        var v = a228.pop() ? 1 : 2;
        return v;
    }
    var a = [true,true,true,true];
    f(a, false);
    f(a, false);
    f(a, false);
    f(a, true);
}
f226();
