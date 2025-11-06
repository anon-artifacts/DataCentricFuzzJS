function ceil(a1, a2) {
    return Math.ceil((a1 | 0) / (a2 | 0)) | 0;
}
function floor(a13, a14) {
    return Math.floor((a13 | 0) / (a14 | 0)) | 0;
}
function round(a25, a26) {
    return Math.round((a25 | 0) / (a26 | 0)) | 0;
}
function intdiv(a37, a38) {
    return ((a37 | 0) / (a38 | 0)) | 0;
}
ceil(5, 5);
ceil(4, 3);
ceil(5, 3);
ceil(-4, 3);
-1;
ceil(-5, 3);
-1;
floor(5, 5);
floor(4, 3);
floor(5, 3);
floor(-4, 3);
-2;
floor(-5, 3);
-2;
round(5, 5);
round(4, 3);
round(5, 3);
round(-4, 3);
-1;
round(-5, 3);
-2;
intdiv(5, 5);
intdiv(4, 3);
intdiv(5, 3);
intdiv(-4, 3);
-1;
intdiv(-5, 3);
-1;
