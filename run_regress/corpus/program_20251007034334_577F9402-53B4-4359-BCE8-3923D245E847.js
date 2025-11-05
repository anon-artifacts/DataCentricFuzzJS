if (this.Intl) {
    var pr;
    var suffixes;
    function format(a7) {
        return ("" + a7) + suffixes[pr.select(a7)];
    }
    const t6 = Intl.PluralRules;
    const v16 = new t6("en-US");
    pr = v16;
    suffixes = { one: " day", other: " days" };
    format(0);
    format(0.5);
    format(1);
    format(1.5);
    format(2);
    const v35 = Intl.PluralRules;
    const v39 = new v35("en-US", { type: "ordinal" });
    pr = v39;
    suffixes = { one: "st", two: "nd", few: "rd", other: "th" };
    format(0);
    format(1);
    format(2);
    format(3);
    format(4);
    format(11);
    format(21);
    format(103);
    const t19 = Intl.PluralRules;
    const v71 = new t19("ar");
    pr = v71;
    suffixes = null;
    pr.select(0);
    pr.select(1);
    pr.select(2);
    pr.select(3);
    pr.select(11);
    pr.select(100);
    pr.select(1.5);
}
