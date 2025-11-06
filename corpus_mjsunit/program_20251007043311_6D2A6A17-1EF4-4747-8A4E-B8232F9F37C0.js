var hits = 0;
var lastObj = null;
var lastVal;
function setter(a7) {
    hits++;
    lastObj = this;
    lastVal = a7;
}
function Pack() {
    Object.defineProperty(this, "length", { set: setter });
}
Pack.of = Array.of;
var pack = Pack.of("wolves", "cards", "cigarettes", "lies");
function Bevy() {
}
const v26 = Bevy.prototype;
Object.defineProperty(v26, "length", { set: setter });
Bevy.of = Array.of;
var bevy = Bevy.of("quail");
