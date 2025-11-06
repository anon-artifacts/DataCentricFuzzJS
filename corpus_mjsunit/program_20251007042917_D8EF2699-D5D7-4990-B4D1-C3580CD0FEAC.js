function arguments_with_length_getter(a1) {
    try { arguments.__defineGetter__("length", a1); } catch (e) {}
    return arguments;
}
var count = 0;
function increment_count_return() {
    count++;
    return "boom";
}
function increment_count_throw() {
    count++;
    throw "boom";
}
var a1 = [];
try { f(a1); } catch (e) {}
let v18;
try { v18 = arguments_with_length_getter(increment_count_return); } catch (e) {}
a1.__proto__ = v18;
const v19 = [];
try { v19.concat(a1); } catch (e) {}
var a2 = [];
try { f(a2); } catch (e) {}
let v25;
try { v25 = arguments_with_length_getter(increment_count_throw); } catch (e) {}
a2.__proto__ = v25;
const v26 = [];
try { v26.concat(a2); } catch (e) {}
let v29;
try { v29 = arguments_with_length_getter(increment_count_return); } catch (e) {}
var a3 = v29;
a3[Symbol?.isConcatSpreadable] = true;
const v34 = [];
try { v34.concat(a3); } catch (e) {}
let v37;
try { v37 = arguments_with_length_getter(increment_count_throw); } catch (e) {}
var a4 = v37;
a4[Symbol?.isConcatSpreadable] = true;
function f41() {
    const v42 = [];
    try { v42.concat(a4); } catch (e) {}
}
try { f41(); } catch (e) {}
var a5 = {};
let v48;
try { v48 = arguments_with_length_getter(increment_count_return); } catch (e) {}
a5.__proto__ = v48;
a5[Symbol?.isConcatSpreadable] = true;
const v51 = [];
try { v51.concat(a5); } catch (e) {}
var a6 = {};
let v56;
try { v56 = arguments_with_length_getter(increment_count_throw); } catch (e) {}
a6.__proto__ = v56;
a6[Symbol?.isConcatSpreadable] = true;
function f59() {
    const v60 = [];
    try { v60.concat(a6); } catch (e) {}
}
try { f59(); } catch (e) {}
