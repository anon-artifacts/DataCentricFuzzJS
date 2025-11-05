const v5 = {
    length: 4,
    0: 42,
    2: 37,
    4158279680: undefined,
    4: 0,
};
var nonArray = v5;
Array.prototype.sort.call(nonArray);
