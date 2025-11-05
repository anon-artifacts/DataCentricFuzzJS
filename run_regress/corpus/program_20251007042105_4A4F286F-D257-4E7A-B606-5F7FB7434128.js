console.log("This test confirms an assertion in dateToDaysFrom1970() in wtf/DateMath.cpp passes. The function had a bug setting a number larger than INT_MAX to an int variable.");
const v7 = new Date(20000000, 0, 1);
var d = v7;
d.getTime();
Date.UTC(1970, 0, 1, 0, 0, 0, 0);
const v22 = new Date(-20000000, 0, 1);
(d = v22).getTime();
