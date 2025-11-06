function foo() {
    'use strict';
    let v2 = eval[0];
    v2++;
    let v4 = eval[0];
    ++v4;
    let v6 = eval.a;
    v6++;
    let v8 = eval.a;
    ++v8;
    let v11 = arguments[0];
    v11++;
    let v14 = arguments[0];
    ++v14;
    let v17 = arguments.a;
    v17++;
    let v20 = arguments.a;
    ++v20;
    eval[0] = 1;
    arguments[0] = 1;
    eval.a = 1;
    arguments.a = 1;
}
foo();
