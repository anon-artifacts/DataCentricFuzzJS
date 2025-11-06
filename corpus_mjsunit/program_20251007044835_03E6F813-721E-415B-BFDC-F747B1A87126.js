var arr = [1];
Object.defineProperty(arr, 1, { value: undefined, configurable: false });
for (let i10 = 0; i10 < 9; i10++) {
    arr.length = 1;
}
