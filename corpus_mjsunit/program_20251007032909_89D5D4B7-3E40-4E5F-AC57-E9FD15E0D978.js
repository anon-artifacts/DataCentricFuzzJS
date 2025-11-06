let a;
let f2;
let args;
function setup(a7) {
    function foo() {
        return a7;
    }
    (a = [0]).unshift(0);
    for (const v19 of [4,4,4,4,4]) {
    }
    new Float64Array(a);
    function f22() {
    }
    f2 = f22;
    args = arguments;
    args.length = 0;
}
function forOfArray() {
    for (const v34 of [true,true,true,true,true,true,true]) {
    }
}
function forOfArgs() {
    for (const v36 of args) {
    }
}
function callEveryOnArgs() {
    for (i = 0; i < 1000; ++i) {
        const v45 = {};
        Array.prototype.every.call(args, f2, v45);
    }
}
setup();
forOfArray();
forOfArgs();
callEveryOnArgs();
