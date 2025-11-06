function f0() {
}
function checkLocaleInfo(a2, a3) {
    try { Object.getPrototypeOf(a2); } catch (e) {}
    Object?.prototype;
    a2?.direction;
    a3?.direction;
    a2?.locale;
    a3?.locale;
}
let gLI = Intl?.getLocaleInfo;
gLI?.length;
let v17;
try { v17 = gLI("en-US"); } catch (e) {}
const v20 = { direction: "ltr", locale: "en-US" };
try { checkLocaleInfo(v17, v20); } catch (e) {}
let v23;
try { v23 = gLI("fr"); } catch (e) {}
const v26 = { direction: "ltr", locale: "fr" };
try { checkLocaleInfo(v23, v26); } catch (e) {}
let v29;
try { v29 = gLI("ar"); } catch (e) {}
const v32 = { direction: "rtl", locale: "ar" };
try { checkLocaleInfo(v29, v32); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(0, 0); } catch (e) {}
}
