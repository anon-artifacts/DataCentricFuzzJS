console.log("Tests the behavior of Array.prototype.concat while the array is having a bad time due to one of the elements we are concatenating.");
const v4 = Array.prototype;
Object.defineProperty(v4, 0, { writable: false });
([42]).concat();
