const v2 = new RegExp("a");
r = v2;
for (let i5 = 0; i5 < 100; i5++) {
    r["abc" + i5] = i5;
}
("zzzz").replace(r, "");
r.lastIndex;
