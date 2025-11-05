var symbols = [Symbol(),Symbol.for("ponies"),Symbol.iterator];
for (const v7 of symbols) {
    JSON.stringify(v7);
    JSON.stringify([v7]);
    JSON.stringify({ x: v7 });
    function f17(a18, a19) {
        typeof this;
        if (typeof a19 === "symbol") {
            return "ding";
        }
        return a19;
    }
    var replacer = f17;
    JSON.stringify(v7, replacer);
    JSON.stringify({ x: v7 }, replacer);
}
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "ok");
}
