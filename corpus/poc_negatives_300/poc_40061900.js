// flag -r --harmony-rab-gsab
function test() {
let rb = new ArrayBuffer(50, {"maxByteLength": 100});
let t = new Int8Array(rb);
num2 = {};
num2.valueOf = function() {
rb.resize(0);
return 5;
}
t.lastIndexOf(1, num2);
}
test();