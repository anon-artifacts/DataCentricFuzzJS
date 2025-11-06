console.log("Tests for ES6 class constructor return values");
var globalVariable = { name: "globalVariable" };
var globalSymbol = Symbol();
console.log("Base class");
class C11 {
    constructor() {
    }
}
class C13 {
    constructor() {
        return;
    }
}
class C15 {
    constructor() {
        return undefined;
    }
}
class C18 {
    constructor() {
        return this;
    }
}
class C20 {
    constructor() {
        return { a: 1 };
    }
}
class C24 {
    constructor() {
        return globalVariable;
    }
}
class C26 {
    constructor() {
        return "test";
    }
}
class C29 {
    constructor() {
        return 1;
    }
}
class C32 {
    constructor() {
        return null;
    }
}
class C35 {
    constructor() {
        return Symbol();
    }
}
class C38 {
    constructor() {
        throw "Thrown Exception String";
    }
}
const v41 = new C11();
v41 instanceof C11;
const v43 = new C13();
v43 instanceof C13;
const v45 = new C13();
v45 !== undefined;
const v48 = new C15();
v48 instanceof C15;
const v50 = new C15();
v50 !== undefined;
const v53 = new C18();
v53 instanceof C18;
const v55 = new C20();
v55 instanceof C20;
const v57 = new C20();
typeof v57 === "object";
const v61 = new C24();
v61 instanceof C20;
const v63 = new C24();
v63 === globalVariable;
const v65 = new C26();
v65 instanceof C26;
const v67 = new C26();
typeof v67 !== "string";
const v71 = new C29();
v71 instanceof C29;
const v73 = new C29();
typeof v73 !== "number";
const v77 = new C32();
v77 instanceof C32;
const v79 = new C32();
v79 !== null;
const v82 = new C35();
v82 instanceof C35;
const v84 = new C35();
v84 !== globalSymbol;
try {
    new C38();
} catch(e87) {
}
console.log("");
console.log("Function constructor (non-class)");
function FunctionNoReturn() {
}
function FunctionReturnImplicit() {
    return;
}
function FunctionReturnUndefined() {
    return undefined;
}
function FunctionReturnThis() {
    return this;
}
function FunctionReturnObject() {
    return { a: 1 };
}
function FunctionReturnObject2() {
    return globalVariable;
}
function FunctionReturnString() {
    return "test";
}
function FunctionReturnNumber() {
    return 1;
}
function FunctionReturnNull() {
    return null;
}
function FunctionReturnSymbol() {
    return Symbol();
}
function FunctionThrow() {
    throw "Thrown Exception String";
}
const v112 = new FunctionNoReturn();
v112 instanceof FunctionNoReturn;
const v114 = new FunctionReturnImplicit();
v114 instanceof FunctionReturnImplicit;
const v116 = new FunctionReturnImplicit();
v116 !== undefined;
const v119 = new FunctionReturnUndefined();
v119 instanceof FunctionReturnUndefined;
const v121 = new FunctionReturnUndefined();
v121 !== undefined;
const v124 = new FunctionReturnThis();
v124 instanceof FunctionReturnThis;
const v126 = new FunctionReturnObject();
v126 instanceof FunctionReturnObject;
const v128 = new FunctionReturnObject();
typeof v128 === "object";
const v132 = new FunctionReturnObject2();
v132 instanceof FunctionReturnObject;
const v134 = new FunctionReturnObject2();
v134 === globalVariable;
const v136 = new FunctionReturnString();
v136 instanceof FunctionReturnString;
const v138 = new FunctionReturnString();
typeof v138 !== "string";
const v142 = new FunctionReturnNumber();
v142 instanceof FunctionReturnNumber;
const v144 = new FunctionReturnNumber();
typeof v144 !== "number";
const v148 = new FunctionReturnNull();
v148 instanceof FunctionReturnNull;
const v150 = new FunctionReturnNull();
v150 !== null;
const v153 = new FunctionReturnSymbol();
v153 instanceof FunctionReturnSymbol;
const v155 = new FunctionReturnSymbol();
v155 !== globalSymbol;
try {
    new FunctionThrow();
} catch(e158) {
}
console.log("");
console.log("Derived class calling super()");
class C163 extends C11 {
    constructor() {
        super();
    }
}
class C165 extends C11 {
    constructor() {
        super();
        return;
    }
}
class C167 extends C11 {
    constructor() {
        super();
        return undefined;
    }
}
class C170 extends C11 {
    constructor() {
        super();
        return this;
    }
}
class C172 extends C11 {
    constructor() {
        super();
        return { a: 1 };
    }
}
class C176 extends C11 {
    constructor() {
        super();
        return globalVariable;
    }
}
class C178 extends C11 {
    constructor() {
        super();
        return "test";
    }
}
class C181 extends C11 {
    constructor() {
        super();
        return 1;
    }
}
class C184 extends C11 {
    constructor() {
        super();
        return null;
    }
}
class C187 extends C11 {
    constructor() {
        super();
        return globalSymbol;
    }
}
class C189 extends C11 {
    constructor() {
        super();
        throw "Thrown Exception String";
    }
}
const v192 = new C163();
v192 instanceof C163;
const v194 = new C165();
v194 instanceof C165;
const v196 = new C165();
v196 !== undefined;
const v199 = new C167();
v199 instanceof C167;
const v201 = new C167();
v201 !== undefined;
const v204 = new C170();
v204 instanceof C170;
const v206 = new C172();
v206 instanceof C172;
const v208 = new C172();
typeof v208 === "object";
const v212 = new C176();
v212 instanceof C176;
const v214 = new C176();
v214 === globalVariable;
try {
    new C178();
} catch(e217) {
}
try {
    new C181();
} catch(e219) {
}
try {
    new C184();
} catch(e221) {
}
try {
    new C187();
} catch(e223) {
}
try {
    new C189();
} catch(e225) {
}
console.log("");
console.log("Derived class not calling super()");
class C230 extends C11 {
    constructor() {
    }
}
class C232 extends C11 {
    constructor() {
        return;
    }
}
class C234 extends C11 {
    constructor() {
        return undefined;
    }
}
class C237 extends C11 {
    constructor() {
        return { a: 1 };
    }
}
class C241 extends C11 {
    constructor() {
        return globalVariable;
    }
}
class C243 extends C11 {
    constructor() {
        return this;
    }
}
class C245 extends C11 {
    constructor() {
        return "test";
    }
}
class C248 extends C11 {
    constructor() {
        return 1;
    }
}
class C251 extends C11 {
    constructor() {
        return null;
    }
}
class C254 extends C11 {
    constructor() {
        return globalSymbol;
    }
}
class C256 extends C11 {
    constructor() {
        throw "Thrown Exception String";
    }
}
try {
    new C230();
} catch(e260) {
}
try {
    new DerivedNoSuperReturnImplicit();
} catch(e263) {
}
try {
    new C234();
} catch(e265) {
}
try {
    new C243();
} catch(e267) {
}
try {
    new C237();
} catch(e269) {
}
try {
    new C241();
} catch(e271) {
}
try {
    new C245();
} catch(e273) {
}
try {
    new C248();
} catch(e275) {
}
try {
    new C251();
} catch(e277) {
}
try {
    new C254();
} catch(e279) {
}
try {
    new C256();
} catch(e281) {
}
console.log("");
console.log("Derived class with default constructor and base class returning different values");
class C286 extends C11 {
}
class C287 extends C13 {
}
class C288 extends C15 {
}
class C289 extends C18 {
}
class C290 extends C20 {
}
class C291 extends C24 {
}
class C292 extends C26 {
}
class C293 extends C29 {
}
class C294 extends C32 {
}
class C295 extends C35 {
}
class C296 extends C38 {
}
const v297 = new C286();
v297 instanceof C286;
const v299 = new C287();
v299 instanceof C287;
const v301 = new C288();
v301 instanceof C288;
const v303 = new C290();
v303 instanceof C290;
const v305 = new C290();
typeof v305 === "object";
const v309 = new C291();
v309 instanceof C291;
const v311 = new C291();
v311 === globalVariable;
const v313 = new C289();
v313 instanceof C289;
const v315 = new C292();
v315 instanceof C292;
const v317 = new C293();
v317 instanceof C293;
const v319 = new C294();
v319 instanceof C294;
const v321 = new C295();
v321 instanceof C295;
try {
    new C296();
} catch(e324) {
}
var successfullyParsed = true;
