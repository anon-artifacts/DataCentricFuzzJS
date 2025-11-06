var err_str_1 = "apply was called on , which is a object and not a function";
var err_str_2 = "apply was called on Error, which is a object and not a function";
var reached = false;
const v7 = new Error();
var error = v7;
error.name = error;
try {
    Reflect.apply(error);
    reached = true;
} catch(e12) {
    e12.stack.indexOf(err_str_1) != -1;
} finally {
}
reached = false;
const v19 = new Error();
error = v19;
error.msg = error;
try {
    Reflect.apply(error);
    reached = true;
} catch(e23) {
    e23.stack.indexOf(err_str_2) != -1;
} finally {
}
reached = false;
const v30 = new Error();
error = v30;
error.name = error;
error.msg = error;
try {
    Reflect.apply(error);
    reached = true;
} catch(e34) {
    e34.stack.indexOf(err_str_1) != -1;
} finally {
}
