function f(a1) {
    for (let i3 = 0; i3 < 1; ++i3) {
        if ((i3 % 10) == 3) {
            print(x);
        } else {
        }
    }
}
function Ctor() {
}
const v19 = Number.prototype.toString;
const t11 = Ctor.prototype;
t11.toString = v19;
try {
    const v21 = new Ctor();
    f(v21);
} catch(e23) {
    print(e23);
}
const v28 = RegExp.prototype.toString;
const t20 = Ctor.prototype;
t20.toString = v28;
try {
    const v30 = new Ctor();
    f(v30);
} catch(e32) {
    print(e32);
}
const v37 = Function.prototype.toString;
const t29 = Ctor.prototype;
t29.toString = v37;
try {
    const v39 = new Ctor();
    f(v39);
} catch(e41) {
    print(e41);
}
const v46 = Object.prototype.toString;
const t38 = Ctor.prototype;
t38.toString = v46;
try {
    const v48 = new Ctor();
    f(v48);
} catch(e50) {
    print(e50);
}
const v55 = Error.prototype.toString;
const t47 = Ctor.prototype;
t47.toString = v55;
try {
    const v57 = new Ctor();
    f(v57);
} catch(e59) {
    print(e59);
}
const v64 = Boolean.prototype.toString;
const t56 = Ctor.prototype;
t56.toString = v64;
try {
    const v66 = new Ctor();
    f(v66);
} catch(e68) {
    print(e68);
}
const v73 = Array.prototype.toString;
const t65 = Ctor.prototype;
t65.toString = v73;
try {
    const v75 = new Ctor();
    f(v75);
} catch(e77) {
    print(e77);
}
const v82 = String.prototype.toString;
const t74 = Ctor.prototype;
t74.toString = v82;
try {
    const v84 = new Ctor();
    f(v84);
} catch(e86) {
    print(e86);
}
const v91 = Date.prototype.toString;
const t83 = Ctor.prototype;
t83.toString = v91;
try {
    const v93 = new Ctor();
    f(v93);
} catch(e95) {
    print(e95);
}
const v98 = new Object();
Ctor.prototype = v98;
const v100 = Boolean.prototype.valueOf;
const t94 = Ctor.prototype;
t94.valueOf = v100;
try {
    const v102 = new Ctor();
    f(v102);
} catch(e104) {
    print(e104);
}
const v108 = Date.prototype.valueOf;
const t103 = Ctor.prototype;
t103.valueOf = v108;
try {
    const v110 = new Ctor();
    f(v110);
} catch(e112) {
    print(e112);
}
const v116 = Number.prototype.valueOf;
const t112 = Ctor.prototype;
t112.valueOf = v116;
try {
    const v118 = new Ctor();
    f(v118);
} catch(e120) {
    print(e120);
}
const v124 = Object.prototype.valueOf;
const t121 = Ctor.prototype;
t121.valueOf = v124;
try {
    const v126 = new Ctor();
    f(v126);
} catch(e128) {
    print(e128);
}
const v132 = String.prototype.valueOf;
const t130 = Ctor.prototype;
t130.valueOf = v132;
try {
    const v134 = new Ctor();
    f(v134);
} catch(e136) {
    print(e136);
}
