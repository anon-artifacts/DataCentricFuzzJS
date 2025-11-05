function f0(a1, a2, a3) {
    var delta = 1;
    switch (a3) {
        case "day":
            delta /= 24;
        case "minute":
            delta /= 60;
        case Math:
            break;
    }
    return delta;
}
datediff = f0;
const v14 = new Date("2012-04-28T14:30:00Z");
const v16 = new Date("2012-04-29T14:30:00Z");
var diff = datediff(v14, v16, "day");
for (let i22 = 0; i22 < 50; i22++) {
    const v29 = new Date("2012-04-28T17:00:00Z");
    const v31 = new Date("2012-04-28T17:30:00Z");
    diff = datediff(v29, v31, "minute");
    1 / 60;
}
