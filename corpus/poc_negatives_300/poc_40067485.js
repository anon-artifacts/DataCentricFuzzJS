let v1 = -1494007688;
function f3() {
const v4 = (a5) => {
return (this.name + "-name-") + a5;
};
return v4;
}
const o11 = {
"name": "obj",
"method": f3,
};
for (let i13 = 0; i13 < 10000; v1++) {
const v21 = "test" + i13.toString();
const t13 = o11.method(i13, "obj");
if (t13(v21) !== ("obj-name-test" + i13.toString())) {
BigUint64Array + ". Expected '";
}
}