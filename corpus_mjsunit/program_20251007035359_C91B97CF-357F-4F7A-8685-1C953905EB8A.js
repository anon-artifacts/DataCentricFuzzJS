function testEthiopicAmeteAlem() {
    var locale = "am-ET-u-nu-latn";
    var opts = { timeZone: "Africa/Addis_Ababa" };
    const t3 = Intl.DateTimeFormat;
    const v9 = new t3(`${locale}-ca-ethiopic-amete-alem`, opts);
    var dtfEthiopicAmeteAlem = v9;
    const t6 = Intl.DateTimeFormat;
    const v13 = new t6(`${locale}-ca-ethioaa`, opts);
    var dtfEthioaa = v13;
    const t9 = Intl.DateTimeFormat;
    const v17 = new t9(`${locale}-ca-ethiopic`, opts);
    var dtfEthiopic = v17;
    const v25 = new Date(2016, 1 - 1, 1);
    var date = v25;
    dtfEthiopicAmeteAlem.format(date);
    dtfEthioaa.format(date);
    dtfEthiopicAmeteAlem.format(date) === dtfEthiopic.format(date);
}
function testIslamicCivil() {
    var locale = "ar-SA-u-nu-latn";
    var opts = { timeZone: "Asia/Riyadh" };
    const t21 = Intl.DateTimeFormat;
    const v42 = new t21(`${locale}-ca-islamic-civil`, opts);
    var dtfIslamicCivil = v42;
    const t24 = Intl.DateTimeFormat;
    const v46 = new t24(`${locale}-ca-islamicc`, opts);
    var dtfIslamicc = v46;
    const t27 = Intl.DateTimeFormat;
    const v50 = new t27(`${locale}-ca-islamic`, opts);
    var dtfIslamic = v50;
    const v58 = new Date(2016, 1 - 1, 1);
    var date = v58;
    dtfIslamicCivil.format(date);
    dtfIslamicc.format(date);
    dtfIslamicCivil.format(date) === dtfIslamic.format(date);
}
testEthiopicAmeteAlem();
testIslamicCivil();
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "ok");
}
