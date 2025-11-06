function f0() {
}
var rtf;
{
    const t4 = Intl.RelativeTimeFormat;
    const v6 = new t4("en-US");
    rtf = v6;
    rtf.format(0, "second");
    rtf.format(-0, "second");
    rtf.format(-1, "second");
    rtf.format(1, "second");
    rtf.format(0, "minute");
    rtf.format(-0, "minute");
    rtf.format(-1, "minute");
    rtf.format(1, "minute");
    rtf.format(0, "hour");
    rtf.format(-0, "hour");
    rtf.format(-1, "hour");
    rtf.format(1, "hour");
    rtf.format(0, "day");
    rtf.format(-0, "day");
    rtf.format(-1, "day");
    rtf.format(1, "day");
    rtf.format(0, "week");
    rtf.format(-0, "week");
    rtf.format(-1, "week");
    rtf.format(1, "week");
    rtf.format(0, "month");
    rtf.format(-0, "month");
    rtf.format(-1, "month");
    rtf.format(1, "month");
    rtf.format(0, "year");
    rtf.format(-0, "year");
    rtf.format(-1, "year");
    rtf.format(1, "year");
}
{
    const v134 = Intl.RelativeTimeFormat;
    const v138 = new v134("en-US", { numeric: "auto" });
    rtf = v138;
    rtf.format(0, "second");
    rtf.format(-0, "second");
    rtf.format(-1, "second");
    rtf.format(1, "second");
    rtf.format(0, "minute");
    rtf.format(-0, "minute");
    rtf.format(-1, "minute");
    rtf.format(1, "minute");
    rtf.format(0, "hour");
    rtf.format(-0, "hour");
    rtf.format(-1, "hour");
    rtf.format(1, "hour");
    rtf.format(0, "day");
    rtf.format(-0, "day");
    rtf.format(-1, "day");
    rtf.format(1, "day");
    rtf.format(0, "week");
    rtf.format(-0, "week");
    rtf.format(-1, "week");
    rtf.format(1, "week");
    rtf.format(0, "month");
    rtf.format(-0, "month");
    rtf.format(-1, "month");
    rtf.format(1, "month");
    rtf.format(0, "year");
    rtf.format(-0, "year");
    rtf.format(-1, "year");
    rtf.format(1, "year");
}
{
    const t70 = Intl.RelativeTimeFormat;
    const v268 = new t70("en-US");
    rtf = v268;
    rtf.format(1, "seconds");
    rtf.format(1, "minutes");
    rtf.format(1, "hours");
    rtf.format(1, "days");
    rtf.format(1, "weeks");
    rtf.format(1, "months");
    rtf.format(1, "years");
}
const v298 = Intl.RelativeTimeFormat;
const v302 = new v298("de", { numeric: "auto" });
rtf = v302;
rtf.format(-1, "day");
rtf.format(1, "day");
const v312 = Intl.RelativeTimeFormat;
const v316 = new v312("ar", { numeric: "auto" });
rtf = v316;
rtf.format(-1, "day");
rtf.format(1, "day");
const t89 = Intl.RelativeTimeFormat;
const v328 = new t89("en-US");
rtf = v328;
const v330 = -Infinity;
const v335 = [0,2];
var weirdValueCases = [Infinity,v330,NaN,"word",v335,{}];
for (const v339 of weirdValueCases) {
    const v340 = () => {
        let v342;
        try { v342 = rtf.format(v339, "year"); } catch (e) {}
        return v342;
    };
    v340();
}
var weirdUnitCases = ["test","SECOND","sEcOnD",1,NaN,,null,{}];
for (const v354 of weirdUnitCases) {
    function f355() {
        const t108 = Intl.RelativeTimeFormat;
        const v358 = new t108("en-US");
        var rtf = v358;
        try { rtf.format(1, v354); } catch (e) {}
    }
    f355();
}
f0(0, 0, "ok");
