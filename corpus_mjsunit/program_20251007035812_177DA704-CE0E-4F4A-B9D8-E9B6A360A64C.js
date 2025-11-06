var error;
try {
    reference_error();
} catch(e4) {
    error = e4;
}
toString = error.toString;
error.__proto__ = [];
toString.call(error);
