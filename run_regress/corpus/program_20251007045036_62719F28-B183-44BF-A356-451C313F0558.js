var counter = 0;
function f2() {
    counter++;
}
var x = { toString: f2 };
var y = {};
for (let i9 = 0; i9 < 50; i9++) {
    let v15 = y[x];
    ++v15;
}
