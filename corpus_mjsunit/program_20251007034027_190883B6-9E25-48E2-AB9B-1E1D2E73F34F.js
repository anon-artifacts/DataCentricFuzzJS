var bools = [];
var ints = [];
var doubles = [];
for (let i7 = 0; i7 < 150; i7++) {
    bools.push(false);
    ints.push(0);
    doubles.push(0.5);
}
for (let i20 = 0; i20 < 150; i20++) {
    bools = bools.slice(1);
    ints = ints.slice(1);
    doubles = doubles.slice(1);
}
