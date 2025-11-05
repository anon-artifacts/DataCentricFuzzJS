if (this.Intl) {
    const t1 = Intl.NumberFormat;
    const v4 = new t1();
    v5 = v4;
    const t3 = Intl.DateTimeFormat;
    const v7 = new t3();
    v9 = v7;
    v52 = v9[v9];
    var v55 = {};
    const v15 = () => {
        let v19;
        try { v19 = Reflect.apply(v52, v5, v55); } catch (e) {}
        return v19;
    };
    v15();
}
