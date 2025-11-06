console.log("Test for correct handling of exceptions from instanceof and 'new' expressions");
try {
    const t2 = ({}).undefined;
    new t2();
} catch(e6) {
}
try {
    1 instanceof ({}).undefined;
} catch(e11) {
}
