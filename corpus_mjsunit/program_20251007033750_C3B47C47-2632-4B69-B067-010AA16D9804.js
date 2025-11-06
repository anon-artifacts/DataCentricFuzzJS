console.log("Tests to make sure we call forEach callback with right arguments");
const v4 = new Map();
var m = v4;
m.set("key", "value");
var called = false;
var actual = {};
var receiver = { receiver: true };
function f16(a17, a18, a19) {
    called = true;
    actual.value = a17;
    actual.key = a18;
    actual.map = a19;
    actual.receiver = this;
}
m.forEach(f16, receiver);
actual.value;
actual.key;
actual.map;
actual.receiver;
