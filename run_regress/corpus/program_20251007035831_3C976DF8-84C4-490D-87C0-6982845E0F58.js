for (let i1 = 0; i1 < 100; i1++) {
    let key = 1073741800 + i1;
    var a = { length: 12, 1: 250, [key]: 251 };
    ["1","" + key,"length"];
    Object.keys(a);
    Array.prototype.sort.call(a);
    ["0","" + key,"length"];
    Object.keys(a);
    Array.prototype.sort.call(a);
    ["0","" + key,"length"];
    Object.keys(a);
}
