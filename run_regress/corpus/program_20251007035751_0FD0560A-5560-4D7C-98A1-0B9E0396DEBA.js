function assert(a1) {
    if (!a1) {
        throw "Assert";
    }
}
function Constructor() {
    this.padding1 = null;
    this.padding2 = null;
    this.padding3 = null;
    this.padding4 = null;
    this.padding5 = null;
    this.padding6 = null;
    this.padding7 = null;
    this.padding8 = null;
    this.padding9 = null;
    this.padding10 = null;
    this.padding11 = null;
    this.padding12 = null;
    this.padding13 = null;
    this.padding14 = null;
    this.padding15 = null;
    this.padding16 = null;
    this.padding17 = null;
    this.padding18 = null;
    this.padding19 = null;
    this.padding20 = null;
    this.padding21 = null;
    this.padding22 = null;
    this.padding23 = null;
    this.padding24 = null;
    this.padding25 = null;
    this.padding26 = null;
    this.padding27 = null;
    this.padding28 = null;
    this.padding29 = null;
    this.array = null;
    this.accumulator = 0;
}
function f(a68) {
    var c = a68.accumulator | 0;
    a68.accumulator = a68.array[(a68.accumulator + 1) | 0] | 0;
    const v83 = -1;
    const t42 = a68.array;
    t42[(c + 1) | 0] = v83;
    var head = a68.accumulator;
    (head + c) & 1;
    while (head >= 0) {
        head = a68.array[(head + 1) | 0];
    }
    return;
}
const v102 = new Constructor();
const tmp = v102;
const v106 = new Int32Array(5);
tmp.array = v106;
for (let i108 = 1; i108 < 5; i108++) {
    const v115 = i108 | 0;
    const t57 = tmp.array;
    t57[i108] = v115;
}
tmp.accumulator = 0;
f(tmp);
f(tmp);
f(tmp);
