var posInf = 1 / 0;
var negInf = -1 / 0;
var nan = 0 / 0;
(0).toExponential(4);
(-0).toExponential(4);
(0).toExponential();
(-0).toExponential();
(123.456).toExponential();
(123.456).toExponential(0);
(123.456).toExponential(null);
(123.456).toExponential(false);
(123.456).toExponential("foo");
(123.456).toExponential(nan);
(123.456).toExponential(1);
(123.456).toExponential(true);
(123.456).toExponential("1");
(123.456).toExponential(2);
(123.456).toExponential(2.9);
(123.456).toExponential(3);
(123.456).toExponential(5);
(123.456).toExponential(6);
(123.456).toExponential(20);
try {
    (123.456).toExponential(21);
} catch(e71) {
}
try {
    (123.456).toExponential(100);
} catch(e75) {
}
try {
    (123.456).toExponential(101);
} catch(e79) {
}
try {
    (123.456).toExponential(-1);
} catch(e84) {
}
try {
    (1234.567).toExponential(posInf);
} catch(e87) {
}
try {
    (1234.567).toExponential(negInf);
} catch(e90) {
}
posInf.toExponential();
negInf.toExponential();
nan.toExponential();
(0.01).toExponential();
(0.1).toExponential();
(0.9).toExponential();
(0.9999).toExponential();
(0.9999).toExponential(2);
