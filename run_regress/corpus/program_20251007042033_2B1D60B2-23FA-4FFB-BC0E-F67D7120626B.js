function shouldThrow(a1, a2) {
    var errorThrown = false;
    var error = null;
    try {
        a1();
    } catch(e8) {
        errorThrown = true;
        error = e8;
    }
}
class C10 {
    constructor() {
    }
    method() {
    }
    get getter() {
        return 20;
    }
    set setter(a16) {
    }
    static method() {
    }
    static get getter() {
        return 20;
    }
    static set setter(a21) {
        return 20;
    }
}
const v23 = new C10();
var test = v23;
const t31 = test.constructor;
const v26 = new t31();
var test2 = v26;
const v28 = () => {
    const t35 = test.method;
    new t35();
};
shouldThrow(v28, `TypeError: function is not a constructor (evaluating 'new test.method()')`);
const v33 = () => {
    var descriptor = Object.getOwnPropertyDescriptor(test.__proto__, "getter");
    const t41 = descriptor.get;
    new t41();
};
shouldThrow(v33, `TypeError: function is not a constructor (evaluating 'new descriptor.get()')`);
const v43 = () => {
    var descriptor = Object.getOwnPropertyDescriptor(test.__proto__, "setter");
    const t47 = descriptor.set;
    new t47();
};
shouldThrow(v43, `TypeError: function is not a constructor (evaluating 'new descriptor.set()')`);
const v53 = () => {
    const t52 = C10.method;
    new t52();
};
shouldThrow(v53, `TypeError: function is not a constructor (evaluating 'new ClassTest.method()')`);
const v58 = () => {
    var descriptor = Object.getOwnPropertyDescriptor(C10, "getter");
    const t58 = descriptor.get;
    new t58();
};
shouldThrow(v58, `TypeError: function is not a constructor (evaluating 'new descriptor.get()')`);
const v67 = () => {
    var descriptor = Object.getOwnPropertyDescriptor(C10, "setter");
    const t64 = descriptor.set;
    new t64();
};
shouldThrow(v67, `TypeError: function is not a constructor (evaluating 'new descriptor.set()')`);
function f76() {
}
const v83 = {
    method() {
    },
    get getter() {
        return 20;
    },
    set setter(a81) {
    },
    normal: f76,
    constructor() {
    },
};
var test = v83;
const v85 = () => {
    const t84 = test.method;
    new t84();
};
shouldThrow(v85, `TypeError: function is not a constructor (evaluating 'new test.method()')`);
const v90 = () => {
    const t89 = test.constructor;
    new t89();
};
shouldThrow(v90, `TypeError: function is not a constructor (evaluating 'new test.constructor()')`);
const v95 = () => {
    var descriptor = Object.getOwnPropertyDescriptor(test, "getter");
    const t95 = descriptor.get;
    new t95();
};
shouldThrow(v95, `TypeError: function is not a constructor (evaluating 'new descriptor.get()')`);
const v104 = () => {
    var descriptor = Object.getOwnPropertyDescriptor(test, "setter");
    const t101 = descriptor.set;
    new t101();
};
shouldThrow(v104, `TypeError: function is not a constructor (evaluating 'new descriptor.set()')`);
const t104 = test.normal;
new t104();
const v115 = () => {
    const v116 = () => {
    };
    var arrow = v116;
    new arrow();
};
shouldThrow(v115, `TypeError: function is not a constructor (evaluating 'new arrow()')`);
