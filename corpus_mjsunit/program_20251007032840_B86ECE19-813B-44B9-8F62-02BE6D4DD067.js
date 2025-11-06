function f0() {
    'use strict';
    undeclared = 7;
}
var obj = { valueOf: f0 };
try {
    "" + obj;
} catch(e9) {
}
try {
    "" + obj;
} catch(e14) {
}
"undeclared" in this;
