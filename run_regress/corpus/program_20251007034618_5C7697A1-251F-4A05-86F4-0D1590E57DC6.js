try {
    new isNaN();
} catch(e2) {
}
new Array();
new Boolean();
new Date();
new Number();
new Object();
new String();
try {
    const t11 = ([]).push;
    new t11(4);
} catch(e19) {
}
try {
    const t16 = ([1,2,3]).pop;
    new t16();
} catch(e26) {
}
try {
    const t21 = ("a,b,c").split;
    new t21(",");
} catch(e31) {
}
try {
    const t26 = Array.concat;
    new t26(3);
} catch(e35) {
}
