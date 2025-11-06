function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4294967297;
}
new F0();
new F0();
new F0();
[977798756,9223372036854775807,4294967295,-9007199254740992,5507,4294967296,-9007199254740990,9007199254740992];
const v7 = [0,4294967297,5,9,129,-14,65536,65537,-9007199254740990];
try { v7.pop(); } catch (e) {}
const v9 = [1073741824];
[58357,-1,-1];
const v11 = [-45315,1670066203,536870887,1073741823];
try { v11.slice(v7, v7); } catch (e) {}
[1157098576,1235134427];
function f(a15) {
    a15 & a15;
    function x() {
    }
    x.e = x;
    arguments[0] = arguments;
    arguments[0] = 42;
    return x;
}
const t24 = f(0);
t24();
let v23 = 42;
v23--;
function g(a26) {
    function x() {
    }
    const v29 = arguments[0];
    v29 - v29;
    x();
}
g.length;
const v34 = g(0);
v34 ?? v34;
var caught = false;
try {
    function h(a39) {
        function x() {
        }
    }
    try { h.bind(v9); } catch (e) {}
    h.blah.baz;
} catch(e44) {
    e44.h = e44;
    !true;
    caught = true;
}
