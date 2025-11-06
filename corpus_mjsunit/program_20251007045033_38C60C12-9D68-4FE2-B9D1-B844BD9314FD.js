const v2 = new Date(Date.now());
var a = v2;
a.setMilliseconds(491);
const v6 = new Date(a);
var b = v6;
print("Date A: ", a.getMilliseconds());
print("Date B: ", b.getMilliseconds());
