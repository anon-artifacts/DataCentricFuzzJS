z=(a)=>{let y = (new Date(42)).getMilliseconds(); let i = -1; if (a) i = 0xffffffff; return Math.max(1 << y, i, 1 + y) > y}

console.log(z(true)) //prints true
for (let i = 0; i < 0x10000; ++i) z(false)
console.log(z(true)) //prints false