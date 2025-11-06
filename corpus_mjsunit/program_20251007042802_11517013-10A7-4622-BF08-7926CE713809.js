console.log("This tests for caller property in functions. Only functions that are called from inside of other functions and have a parent should have this property set. Tests return true when caller is found and false when the caller is null.");
function child() {
    return child.caller !== null;
}
function parent() {
    return child();
}
var childHasCallerWhenExecutingGlobalCode = child.caller !== null;
var childHasCallerWhenCalledWithoutParent = child();
var childHasCallerWhenCalledFromWithinParent = parent();
function nonStrictCallee() {
    return nonStrictCallee.caller;
}
function strictCallee() {
    'use strict';
    return strictCallee.caller;
}
function nonStrictCaller(a22) {
    return a22();
}
function strictCaller(a25) {
    'use strict';
    var result = a25();
    return result;
}
function strictTailCaller(a29) {
    'use strict';
    return a29();
}
nonStrictCaller(nonStrictCallee);
try {
    nonStrictCaller(strictCallee);
} catch(e33) {
}
try {
    strictCaller(nonStrictCallee);
} catch(e35) {
}
try {
    strictCaller(strictCallee);
} catch(e37) {
}
strictTailCaller(nonStrictCallee);
try {
    strictTailCaller(strictCallee);
} catch(e40) {
}
var boundNonStrictCallee = nonStrictCallee.bind();
var boundStrictCallee = strictCallee.bind();
nonStrictCaller(boundNonStrictCallee);
try {
    nonStrictCaller(boundStrictCallee);
} catch(e47) {
}
try {
    strictCaller(boundNonStrictCallee);
} catch(e49) {
}
try {
    strictCaller(boundStrictCallee);
} catch(e51) {
}
strictTailCaller(boundNonStrictCallee);
try {
    strictTailCaller(boundStrictCallee);
} catch(e54) {
}
function getFooGetter(a56) {
    return Object.getOwnPropertyDescriptor(a56, "foo").get;
}
function getFooSetter(a62) {
    return Object.getOwnPropertyDescriptor(a62, "foo").set;
}
const v78 = {
    get foo() {
        return getFooGetter(nonStrictAccessor).caller;
    },
    set foo(a72) {
        if (getFooSetter(nonStrictAccessor).caller !== a72) {
            throw false;
        }
    },
};
var nonStrictAccessor = v78;
const v91 = {
    get foo() {
        'use strict';
        return getFooGetter(strictAccessor).caller;
    },
    set foo(a85) {
        'use strict';
        if (getFooSetter(strictAccessor).caller !== a85) {
            throw false;
        }
    },
};
var strictAccessor = v91;
function nonStrictGetter(a94) {
    return a94.foo;
}
function nonStrictSetter(a97) {
    a97.foo = nonStrictSetter;
    return true;
}
function strictGetter(a100) {
    'use strict';
    return a100.foo;
}
function strictSetter(a103) {
    'use strict';
    a103.foo = nonStrictSetter;
    return true;
}
try {
    nonStrictGetter(nonStrictAccessor);
} catch(e106) {
}
try {
    nonStrictGetter(strictAccessor);
} catch(e108) {
}
try {
    strictGetter(nonStrictAccessor);
} catch(e110) {
}
try {
    strictSetter(nonStrictAccessor);
} catch(e112) {
}
try {
    strictGetter(strictAccessor);
} catch(e114) {
}
try {
    strictSetter(strictAccessor);
} catch(e116) {
}
