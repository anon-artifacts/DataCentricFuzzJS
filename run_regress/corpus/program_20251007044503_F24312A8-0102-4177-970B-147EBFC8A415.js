function write(a1) {
    print(a1 + "");
}
var count = 0;
var total = 0;
var x = null;
try {
    write(x.y);
} catch(e14) {
    write((count++ + " ") + e14.message);
}
total++;
try {
    x.y = 5;
} catch(e23) {
    write((count++ + " ") + e23.message);
}
total++;
try {
    delete x.y;
} catch(e32) {
    write((count++ + " ") + e32.message);
}
total++;
try {
    write(x[6]);
} catch(e42) {
    write((count++ + " ") + e42.message);
}
total++;
try {
    x[6] = 7;
} catch(e51) {
    write((count++ + " ") + e51.message);
}
total++;
try {
    delete x[6];
} catch(e61) {
    write((count++ + " ") + e61.message);
}
total++;
x = undefined;
try {
    write(x.y);
} catch(e72) {
    write((count++ + " ") + e72.message);
}
total++;
try {
    x.y = 5;
} catch(e81) {
    write((count++ + " ") + e81.message);
}
total++;
try {
    delete x.y;
} catch(e90) {
    write((count++ + " ") + e90.message);
}
total++;
try {
    write(x[6]);
} catch(e100) {
    write((count++ + " ") + e100.message);
}
total++;
try {
    x[6] = 7;
} catch(e109) {
    write((count++ + " ") + e109.message);
}
total++;
try {
    delete x[6];
} catch(e119) {
    write((count++ + " ") + e119.message);
}
total++;
var a = [null];
try {
    write(a[0].y);
} catch(e133) {
    write((count++ + " ") + e133.message);
}
total++;
try {
    const t87 = a[0];
    t87.y = 5;
} catch(e143) {
    write((count++ + " ") + e143.message);
}
total++;
try {
    const t94 = a[0];
    delete t94.y;
} catch(e153) {
    write((count++ + " ") + e153.message);
}
total++;
try {
    write(a[0][6]);
} catch(e164) {
    write((count++ + " ") + e164.message);
}
total++;
try {
    const t107 = a[0];
    t107[6] = 7;
} catch(e174) {
    write((count++ + " ") + e174.message);
}
total++;
try {
    const t114 = a[0];
    delete t114[6];
} catch(e185) {
    write((count++ + " ") + e185.message);
}
total++;
a = [,];
try {
    write(a[0].y);
} catch(e198) {
    write((count++ + " ") + e198.message);
}
total++;
try {
    const t128 = a[0];
    t128.y = 5;
} catch(e208) {
    write((count++ + " ") + e208.message);
}
total++;
try {
    const t135 = a[0];
    delete t135.y;
} catch(e218) {
    write((count++ + " ") + e218.message);
}
total++;
try {
    write(a[0][6]);
} catch(e229) {
    write((count++ + " ") + e229.message);
}
total++;
try {
    const t148 = a[0];
    t148[6] = 7;
} catch(e239) {
    write((count++ + " ") + e239.message);
}
total++;
try {
    const t155 = a[0];
    delete t155[6];
} catch(e250) {
    write((count++ + " ") + e250.message);
}
total++;
var o = { z: null };
try {
    write(o.z.y);
} catch(e264) {
    write((count++ + " ") + e264.message);
}
total++;
try {
    const t169 = o.z;
    t169.y = 5;
} catch(e274) {
    write((count++ + " ") + e274.message);
}
total++;
try {
    const t176 = o.z;
    delete t176.y;
} catch(e284) {
    write((count++ + " ") + e284.message);
}
total++;
try {
    write(o.z[6]);
} catch(e295) {
    write((count++ + " ") + e295.message);
}
total++;
try {
    const t189 = o.z;
    t189[6] = 7;
} catch(e305) {
    write((count++ + " ") + e305.message);
}
total++;
try {
    const t196 = o.z;
    delete t196[6];
} catch(e316) {
    write((count++ + " ") + e316.message);
}
total++;
o = { z: undefined };
try {
    write(o.z.y);
} catch(e329) {
    write((count++ + " ") + e329.message);
}
total++;
try {
    const t210 = o.z;
    t210.y = 5;
} catch(e339) {
    write((count++ + " ") + e339.message);
}
total++;
try {
    const t217 = o.z;
    delete t217.y;
} catch(e349) {
    write((count++ + " ") + e349.message);
}
total++;
try {
    write(o.z[6]);
} catch(e360) {
    write((count++ + " ") + e360.message);
}
total++;
try {
    const t230 = o.z;
    t230[6] = 7;
} catch(e370) {
    write((count++ + " ") + e370.message);
}
total++;
try {
    const t237 = o.z;
    delete t237[6];
} catch(e381) {
    write((count++ + " ") + e381.message);
}
total++;
write((("count: " + count) + " total: ") + total);
