function strict() {
    'use strict';
    return this;
}
function lenient() {
    return this;
}
var obj = {};
const t8 = strict.bind(true);
t8();
const t9 = strict.bind(42);
t9();
const t11 = strict.bind("");
t11();
const t13 = strict.bind(null);
t13();
const t15 = strict.bind(undefined);
t15();
const t17 = strict.bind(obj);
t17();
const t19 = lenient.bind(true);
t19() instanceof Boolean;
const t21 = lenient.bind(42);
t21() instanceof Number;
const t23 = lenient.bind("");
t23() instanceof String;
const t25 = lenient.bind(null);
t25();
const t27 = lenient.bind(undefined);
t27();
const t29 = lenient.bind(obj);
t29();
