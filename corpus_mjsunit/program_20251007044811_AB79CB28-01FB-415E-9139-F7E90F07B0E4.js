function f0(a1, a2, a3) {
    var delta = 1;
    switch (a3) {
        case "day":
            delta /= 24;
        case "hour":
            delta /= 60;
        case "minute":
            delta /= 60;
        case "second":
            delta /= 1000;
        case "millisecond":
            delta *= a2.getTime() - a1.getTime();
    }
    return Math.round(delta);
}
datediff = f0;
const v23 = new Date("2012-04-28T14:30:00Z");
const v25 = new Date("2012-04-29T14:30:00Z");
var diff = datediff(v23, v25, "day");
for (let i31 = 0; i31 < 50; i31++) {
    const v38 = new Date("2012-04-28T17:00:00Z");
    const v40 = new Date("2012-04-28T17:30:00Z");
    diff = datediff(v38, v40, "minute");
}
