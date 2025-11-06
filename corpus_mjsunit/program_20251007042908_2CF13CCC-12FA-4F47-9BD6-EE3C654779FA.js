var arr = [1,2,3,4,5,6];
Object.defineProperty(arr, "length", { writable: false });
try {
    var removed = arr.splice(3, 3, 9, 9, 9, 9);
    const v26 = new Error(("splice didn't throw, returned [" + removed) + "]");
    throw v26;
} catch(e27) {
    e27 instanceof TypeError;
    (("should have thrown a TypeError, instead threw " + e27) + ", arr is ") + arr;
}
arr[0];
arr[1];
arr[2];
arr[3];
arr[4];
arr[5];
arr.length;
