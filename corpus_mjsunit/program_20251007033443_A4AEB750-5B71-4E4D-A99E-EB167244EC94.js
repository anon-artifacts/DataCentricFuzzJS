function f0() {
}
var pr;
const t3 = Intl.PluralRules;
const v6 = new t3("en-us");
pr = v6;
pr.resolvedOptions().locale;
pr.resolvedOptions().type;
pr.resolvedOptions().pluralCategories.length;
const v17 = Intl.PluralRules;
const v21 = new v17("de", { type: "cardinal" });
pr = v21;
pr.resolvedOptions().pluralCategories.length;
const v26 = Intl.PluralRules;
const v30 = new v26("de", { type: "ordinal" });
pr = v30;
pr.resolvedOptions().pluralCategories.length;
f0(0, 0, "ok");
