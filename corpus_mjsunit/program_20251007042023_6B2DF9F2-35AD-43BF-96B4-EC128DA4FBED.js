function f1() {
    const v7 = Math.floor(this._leftTime / 3600);
    const v9 = v7 / 24;
    const v11 = v7 % 24;
    const v12 = { s: v7, i: v11 };
    return v9;
}
const v13 = { _leftTime: 12345678, _divider: f1 };
for (let v14 = 0; v14 < 50; v14++) {
    v13._divider(f1, v13, v14);
}
