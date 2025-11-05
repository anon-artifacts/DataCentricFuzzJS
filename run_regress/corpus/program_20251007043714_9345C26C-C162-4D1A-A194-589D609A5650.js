function f0() {
}
var gTestfile = "getPrototypeOf.js";
var BUGNUMBER = 888969;
var summary = "Scripted proxies' [[GetPrototypeOf]] behavior";
f0((BUGNUMBER + ": ") + summary);
const log = [];
function observe(a14) {
    const v16 = {};
    const v24 = {
        get(a18, a19, a20) {
            log.push(a19);
            return Reflect.get(a18, a19, a20);
        },
    };
    const v25 = new Proxy(v16, v24);
    var observingHandler = v25;
    const v27 = new Proxy(a14, observingHandler);
    return v27;
}
function nop() {
}
var p;
var h;
const v33 = {};
var rev = Proxy.revocable(v33, {});
p = rev.proxy;
Object.getPrototypeOf(p);
Object.prototype;
rev.revoke();
const v43 = () => {
    let v44;
    try { v44 = Object.getPrototypeOf(p); } catch (e) {}
    return v44;
};
v43();
const v47 = () => {
    const v48 = {};
    const v51 = {
        get getPrototypeOf() {
            throw 17;
        },
    };
    const v52 = new Proxy(v48, v51);
    let v53;
    try { v53 = Object.getPrototypeOf(v52); } catch (e) {}
    return v53;
};
v47();
const v56 = {};
const v59 = {
    getPrototypeOf() {
        throw 42;
    },
};
const v60 = new Proxy(v56, v59);
p = v60;
const v61 = () => {
    let v62;
    try { v62 = Object.getPrototypeOf(p); } catch (e) {}
    return v62;
};
v61();
const v65 = {};
const v68 = new Proxy(v65, { getPrototypeOf: 17 });
p = v68;
const v69 = () => {
    let v70;
    try { v70 = Object.getPrototypeOf(p); } catch (e) {}
    return v70;
};
v69();
var x;
var tp;
const v78 = new Number(8675309);
const v82 = {
    getPrototypeOf() {
        x = "getPrototypeOf trap";
        return null;
    },
};
const v83 = new Proxy(v78, v82);
tp = v83;
const v86 = new Proxy(tp, { getPrototypeOf: undefined });
p = v86;
x = "unset";
Object.getPrototypeOf(p);
const v93 = new Proxy(tp, { getPrototypeOf: null });
p = v93;
x = "unset";
Object.getPrototypeOf(p);
const v99 = new Number(8675309);
var customProto = v99;
const v101 = {};
const v104 = {
    getPrototypeOf() {
        x = "getPrototypeOf trap";
        return customProto;
    },
};
const v105 = new Proxy(v101, v104);
tp = v105;
const v108 = new Proxy(tp, { getPrototypeOf: undefined });
p = v108;
x = "unset";
Object.getPrototypeOf(p);
const v114 = new Proxy(tp, { getPrototypeOf: null });
p = v114;
x = "unset";
Object.getPrototypeOf(p);
const v118 = {};
const v121 = {
    getPrototypeOf() {
        throw "ohai";
    },
};
const v122 = new Proxy(v118, v121);
p = v122;
const v123 = () => {
    let v124;
    try { v124 = Object.getPrototypeOf(p); } catch (e) {}
    return v124;
};
v123();
function f127() {
    throw "not called";
}
const v131 = {
    apply() {
        throw 37;
    },
};
const v132 = new Proxy(f127, v131);
var throwingTrap = v132;
const v134 = {};
const v136 = new Proxy(v134, { getPrototypeOf: throwingTrap });
p = v136;
const v137 = () => {
    let v138;
    try { v138 = Object.getPrototypeOf(p); } catch (e) {}
    return v138;
};
v137();
const v141 = {};
function f142() {
    throw "boo-urns";
}
const v144 = observe(f142);
const v146 = new Proxy(v141, { getPrototypeOf: v144 });
p = v146;
log.length = 0;
const v148 = () => {
    let v149;
    try { v149 = Object.getPrototypeOf(p); } catch (e) {}
    return v149;
};
v148();
log.length;
log[0];
var rval;
var typeTestingTarget = {};
const v161 = {
    getPrototypeOf() {
        return rval;
    },
};
const v162 = new Proxy(typeTestingTarget, v161);
p = v162;
function returnsPrimitives() {
    rval = undefined;
    const v165 = () => {
        let v166;
        try { v166 = Object.getPrototypeOf(p); } catch (e) {}
        return v166;
    };
    v165();
    rval = true;
    const v169 = () => {
        let v170;
        try { v170 = Object.getPrototypeOf(p); } catch (e) {}
        return v170;
    };
    v169();
    rval = false;
    const v173 = () => {
        let v174;
        try { v174 = Object.getPrototypeOf(p); } catch (e) {}
        return v174;
    };
    v173();
    rval = 0;
    const v177 = () => {
        let v178;
        try { v178 = Object.getPrototypeOf(p); } catch (e) {}
        return v178;
    };
    v177();
    rval = -0;
    const v182 = () => {
        let v183;
        try { v183 = Object.getPrototypeOf(p); } catch (e) {}
        return v183;
    };
    v182();
    rval = 3.141592654;
    const v186 = () => {
        let v187;
        try { v187 = Object.getPrototypeOf(p); } catch (e) {}
        return v187;
    };
    v186();
    rval = NaN;
    const v190 = () => {
        let v191;
        try { v191 = Object.getPrototypeOf(p); } catch (e) {}
        return v191;
    };
    v190();
    rval = -Infinity;
    const v195 = () => {
        let v196;
        try { v196 = Object.getPrototypeOf(p); } catch (e) {}
        return v196;
    };
    v195();
    rval = "[[Prototype]] FOR REALZ";
    const v199 = () => {
        let v200;
        try { v200 = Object.getPrototypeOf(p); } catch (e) {}
        return v200;
    };
    v199();
    rval = Symbol("[[Prototype]] FOR REALZ");
    const v205 = () => {
        let v206;
        try { v206 = Object.getPrototypeOf(p); } catch (e) {}
        return v206;
    };
    v205();
}
returnsPrimitives();
Object.preventExtensions(typeTestingTarget);
returnsPrimitives();
var act;
var extens;
const v215 = {};
const v219 = {
    isExtensible() {
        let v217;
        try { v217 = act(); } catch (e) {}
        seen = v217;
        return extens;
    },
};
const v220 = new Proxy(v215, v219);
var typeTestingProxyTarget = v220;
const v223 = {
    getPrototypeOf() {
        return rval;
    },
};
const v224 = new Proxy(typeTestingProxyTarget, v223);
p = v224;
rval = null;
const v226 = () => {
    throw "fnord";
};
act = v226;
const v228 = () => {
    let v229;
    try { v229 = Object.getPrototypeOf(p); } catch (e) {}
    return v229;
};
v228();
rval = /abc/;
const v233 = () => {
    throw "fnord again";
};
act = v233;
const v235 = () => {
    let v236;
    try { v236 = Object.getPrototypeOf(p); } catch (e) {}
    return v236;
};
v235();
rval = Object.prototype;
const v240 = () => {
    throw "fnord";
};
act = v240;
const v242 = () => {
    let v243;
    try { v243 = Object.getPrototypeOf(p); } catch (e) {}
    return v243;
};
v242();
const v246 = {};
const v248 = {
    getPrototypeOf() {
        return rval;
    },
};
const v249 = new Proxy(v246, v248);
p = v249;
rval = Number.prototype;
Object.getPrototypeOf(p);
Number.prototype;
var targetProto;
const v257 = Object.preventExtensions(Object.create(null));
const v261 = {
    getPrototypeOf() {
        try { act2(); } catch (e) {}
        return targetProto;
    },
};
const v262 = new Proxy(v257, v261);
var targetWithProto = v262;
const v267 = {
    getPrototypeOf() {
        act1();
        return rval;
    },
};
const v268 = new Proxy(targetWithProto, v267);
p = v268;
rval = null;
targetProto = null;
var regex = /targetProto/;
const v273 = () => {
    return log.push("act1");
};
act1 = v273;
const v277 = () => {
    return log.push("act2");
};
act2 = v277;
log.length = 0;
Object.getPrototypeOf(p);
log.length;
log[0];
log[1];
const v290 = () => {
    return log.push("act1 again");
};
act1 = v290;
const v294 = () => {
    throw "target throw";
};
act2 = v294;
log.length = 0;
const v298 = () => {
    return Object.getPrototypeOf(p);
};
v298();
log.length;
log[0];
act2 = nop;
act1 = nop;
rval = /a/;
const v309 = () => {
    let v310;
    try { v310 = Object.getPrototypeOf(p); } catch (e) {}
    return v310;
};
v309();
rval = null;
targetProto = null;
Object.getPrototypeOf(p);
const v317 = new Number(55);
const v318 = Object.preventExtensions(v317);
const v321 = {
    getPrototypeOf() {
        return Number.prototype;
    },
};
const v322 = new Proxy(v318, v321);
p = v322;
Object.getPrototypeOf(p);
Number.prototype;
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
