const v11 = new Map([[1,2],[2,3],[3,4]]);
var map = v11;
var iterator = map.keys();
const v15 = () => {
    return { done: true };
};
const t6 = iterator.__proto__;
t6.next = v15;
[];
[...map];
[];
[...map.entries()];
[];
[...map.keys()];
[];
[...map.values()];
[];
[...iterator];
