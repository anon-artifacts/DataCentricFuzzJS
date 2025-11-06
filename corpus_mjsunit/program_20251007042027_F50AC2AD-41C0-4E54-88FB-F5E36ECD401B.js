const v5 = new Set([1,2,3]);
var set = v5;
var iterator = set.keys();
const v9 = () => {
    return { done: true };
};
const t6 = iterator.__proto__;
t6.next = v9;
[];
[...set];
[];
[...set.entries()];
[];
[...set.keys()];
[];
[...set.values()];
[];
[...iterator];
