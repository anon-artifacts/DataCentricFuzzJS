const v2 = {
    get hello() {
        return this;
    },
    a: 555,
};
for (let v3 = 0; v3 < 5; v3++) {
    v2.a = v3;
}
