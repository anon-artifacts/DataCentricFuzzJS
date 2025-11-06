const v5 = {
    length: 4,
    0: 42,
    2: 37,
    3: undefined,
    4: 0,
};
var nonArray = v5;
Array.prototype.sort.call(nonArray);
nonArray.length;
nonArray[0];
nonArray[1];
2 in nonArray;
nonArray[2];
3 in nonArray;
nonArray[4];
