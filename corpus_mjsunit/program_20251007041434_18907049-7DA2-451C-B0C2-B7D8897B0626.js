function f1(a1) {
    return Math.round(a1);
}
f1(3.3);
f1(-2.842170943040401e-14);
-0;
function f2(a13) {
    return Math.round(a13);
}
f2(3.3);
f2(-1.3);
-1;
f2(-1.8);
-2;
f2(-0.9);
-1;
f2(-0.6);
-1;
f2(-0.4);
-0;
function f3(a45) {
    return Math.round(a45);
}
f3(0.1);
f3(-0.5);
-0;
function f4(a57) {
    return Math.round(a57);
}
f4(0.1);
f4(-0);
-0;
function f5(a69) {
    return Math.round(a69);
}
f5(2.9);
f5(NaN);
