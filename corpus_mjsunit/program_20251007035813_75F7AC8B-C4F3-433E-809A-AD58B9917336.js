if (this.Intl) {
    const v3 = {};
    const v5 = new Proxy(v3, {});
    Intl.NumberFormat.call(v5);
    Intl.NumberFormat;
    const v10 = () => {
        const v11 = {};
        const v13 = new Proxy(v11, {});
        const v16 = Intl.DateTimeFormat.prototype.formatToParts;
        let v17;
        try { v17 = v16.call(v13); } catch (e) {}
        return v17;
    };
    v10();
}
