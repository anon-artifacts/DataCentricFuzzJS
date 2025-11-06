try {
} catch(e0) {
}
var size = 131072;
const v4 = new Float64Array(size);
var a = v4;
const v7 = new Float64Array(10);
var training = v7;
function store(a10, a11) {
    var offset = 536870912;
    for (let i15 = 0; i15 < 1; i15++) {
        a10[a11 + offset] = 204;
    }
}
store(training, -536870912);
store(training, -536870912 + 1);
store(training, -536870912);
store(training, -536870912 + 1);
for (let i41 = -536870912; i41 < (-536870912 + size); i41++) {
    store(a, i41);
}
