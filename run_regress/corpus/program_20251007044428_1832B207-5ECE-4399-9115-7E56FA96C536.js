function get_thrower() {
    'use strict';
    return Object.getOwnPropertyDescriptor(arguments, "callee").get;
}
const v6 = get_thrower();
function f7(a8) {
    'use asm';
    function fun() {
        switch (a8) {
        }
    }
    return { fun: fun };
}
var f = f7(v6).fun;
f();
