var BUGNUMBER = 637643;
var summary = "new Int8Array([1, 2, 3]).subarray(1).subarray(1)[0] === 3";
print((BUGNUMBER + ": ") + summary);
const v14 = new Int8Array([1,2,3]);
var ta = v14;
ta.length;
ta[0];
ta[1];
ta[2];
var sa1 = ta.subarray(1);
sa1.length;
sa1[0];
sa1[1];
var sa2 = sa1.subarray(1);
sa2.length;
sa2[0];
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
