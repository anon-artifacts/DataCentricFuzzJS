if (!this.hasOwnProperty("Intl")) {
    quit();
}
const t3 = Object.prototype;
t3.get = 5;
const t5 = Intl.Collator;
const v11 = new t5();
v11.resolvedOptions();
Intl.DateTimeFormat.supportedLocalesOf("en");
