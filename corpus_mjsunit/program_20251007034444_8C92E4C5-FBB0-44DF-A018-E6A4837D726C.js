for (let i1 = 0; i1 < 100; i1++) {
    Array.prototype.unshift(3.14);
}
const o31 = [1.1];
o31[37] = 2.2;
const o51 = o31.concat(false);
o51[0] = undefined;
o51.length;
o51.sort();
o51.length;
