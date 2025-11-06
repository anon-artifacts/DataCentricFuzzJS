var BUGNUMBER = 1093421;
var summary = ("new Intl.NumberFormat(..., { style: 'currency', currency: '...', " + "currencyDisplay: 'name' or 'code' }) should have behavior other than ") + "throwing";
print((BUGNUMBER + ": ") + summary);
const v18 = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
};
var usdCodeOptions = v18;
const t11 = Intl.NumberFormat;
const v23 = new t11("en-US", usdCodeOptions);
var usDollarsCode = v23;
const v26 = usDollarsCode.format(25);
/USD/.test(v26);
const v35 = {
    style: "currency",
    currency: "XQQ",
    currencyDisplay: "code",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
};
var xqqCodeOptions = v35;
const t24 = Intl.NumberFormat;
const v39 = new t24("en-US", xqqCodeOptions);
var xqqMoneyCode = v39;
const v42 = xqqMoneyCode.format(25);
/XQQ/.test(v42);
const v51 = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "name",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
};
var usdNameOptions = v51;
const t37 = Intl.NumberFormat;
const v55 = new t37("en-US", usdNameOptions);
var usDollarsName = v55;
usDollarsName.format(25);
const v65 = {
    style: "currency",
    currency: "XQQ",
    currencyDisplay: "name",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
};
var xqqNameOptions = v65;
const t49 = Intl.NumberFormat;
const v69 = new t49("en-US", xqqNameOptions);
var xqqMoneyName = v69;
const v72 = xqqMoneyName.format(25);
/XQQ/.test(v72);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
