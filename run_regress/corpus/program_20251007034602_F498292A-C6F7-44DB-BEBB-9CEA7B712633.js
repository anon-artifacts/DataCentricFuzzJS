var c = 0;
for (let i3 = 0; i3 < 5; i3++) {
    try {
        const v9 = [];
        Object.defineProperty(v9, "length", { configurable: true, enumerable: true, writable: true, value: 0 });
    } catch(e18) {
        e18 instanceof TypeError;
        c++;
    }
}
