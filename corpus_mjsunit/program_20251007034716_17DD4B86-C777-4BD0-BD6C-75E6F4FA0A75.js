class C1 {
    constructor(a3) {
        try { this.m(a3, C1, this); } catch (e) {}
    }
    [1073741825];
}
new C1();
const v6 = [-8];
const v7 = [1000,144250018,-8,-268435456,-4294967297,-1024,256,4294967295];
const t7 = this?.TypeError;
t7();
const v11 = this.Intl;
try { v11.supportedValuesOf(v7); } catch (e) {}
const v14 = Intl.DateTimeFormat;
const v18 = v14("en-US", { timeZone: "Asia/Katmandu" });
const t15 = v18.constructor;
t15();
try { v18.formatRange(v6, v18); } catch (e) {}
