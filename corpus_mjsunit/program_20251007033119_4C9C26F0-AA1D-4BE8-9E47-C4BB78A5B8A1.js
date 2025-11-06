var originalAdder = Set.prototype.add;
var counter = 0;
function f6(a7) {
    counter++;
    return originalAdder.call(this, a7);
}
const t6 = Set.prototype;
t6.add = f6;
var values = [0,1,2,3,4,5,4,3,2,1,0];
const v25 = new Set(values);
var set = v25;
if (set.size !== 6) {
    throw "Error: bad set size " + set.size;
}
if (counter !== values.length) {
    throw "Error: bad counter " + counter;
}
function f37() {
    const v40 = new Error("adder called");
    throw v40;
}
const t21 = Set.prototype;
t21.add = f37;
const v42 = new Set();
var set = v42;
const v45 = new Set([]);
var set = v45;
var error = null;
try {
    const v51 = new Set([0]);
    var set = v51;
} catch(e53) {
    error = e53;
}
if (!error) {
    throw "Error: error not thrown";
}
if (String(error) !== "Error: adder called") {
    throw "Error: bad error " + String(error);
}
