console.log("Test for error messages for in");
try {
    20 in "in in in";
} catch(e6) {
}
try {
    20 in true;
} catch(e10) {
}
try {
    20 in ({}).foo;
} catch(e15) {
}
try {
    20 in 20;
} catch(e19) {
}
try {
    20 in null;
} catch(e23) {
}
