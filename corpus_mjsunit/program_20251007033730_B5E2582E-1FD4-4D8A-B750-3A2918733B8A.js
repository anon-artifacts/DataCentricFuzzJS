var arr = [1,2];
Object.defineProperty(arr, 65534, { value: 3, configurable: true, writable: true, enumerable: false });
arr[65535] = 4;
arr.shift();
var desc = Object.getOwnPropertyDescriptor(arr, 65534);
desc.value;
desc.enumerable;
