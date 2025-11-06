function* none() {
    if (0) {
        yield 0;
    }
}
const v6 = new Map(none());
var m = v6;
m.size;
