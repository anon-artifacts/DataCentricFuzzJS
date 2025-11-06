var log = "";
function Iter(a3, a4) {
    function next() {
        const v13 = {
            get done() {
                log += "d";
                return a4-- == 0;
            },
            get value() {
                log += "v";
                return a3;
            },
        };
        return v13;
    }
    function f14() {
        return this;
    }
    this[Symbol.iterator] = f14;
    this.next = next;
}
const v22 = new Iter(42, 5);
for (const v23 of v22) {
}
