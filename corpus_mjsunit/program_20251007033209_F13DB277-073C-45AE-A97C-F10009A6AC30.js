var originalAdder = Map.prototype.set;
var counter = 0;
function f6(a7, a8) {
    counter++;
    return originalAdder.call(this, a7, a8);
}
const t6 = Map.prototype;
t6.set = f6;
var values = [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[4,4],[3,3],[2,2],[1,1],[0,0]];
const v48 = new Map(values);
var map = v48;
if (map.size !== 6) {
    throw "Error: bad map size " + map.size;
}
if (counter !== values.length) {
    throw "Error: bad counter " + counter;
}
function f60() {
    const v63 = new Error("adder called");
    throw v63;
}
const t21 = Map.prototype;
t21.set = f60;
const v65 = new Map();
var map = v65;
const v68 = new Map([]);
var map = v68;
var error = null;
try {
    const v76 = new Map([[0,0]]);
    var map = v76;
} catch(e78) {
    error = e78;
}
if (!error) {
    throw "Error: error not thrown";
}
if (String(error) !== "Error: adder called") {
    throw "Error: bad error " + String(error);
}
