var BUGNUMBER = 1287521;
var summary = "String.prototype.split should call ToUint32(limit) before ToString(separator).";
print((BUGNUMBER + ": ") + summary);
var log = [];
const v15 = {
    toString() {
        log.push("separator-tostring");
        return "b";
    },
};
const v20 = {
    valueOf() {
        log.push("limit-valueOf");
        return 0;
    },
};
("abba").split(v15, v20);
log.join(",");
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
