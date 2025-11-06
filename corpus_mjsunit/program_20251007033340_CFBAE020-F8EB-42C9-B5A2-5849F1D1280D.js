console.log("Test for error messages for instanceof");
try {
    "instanceof" instanceof "instanceof";
} catch(e6) {
}
try {
    20 instanceof "hello";
} catch(e10) {
}
try {
    20 instanceof {};
} catch(e14) {
}
try {
    20 instanceof ({}).foo;
} catch(e19) {
}
try {
    20 instanceof true;
} catch(e23) {
}
