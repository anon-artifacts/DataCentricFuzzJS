const long_key = 'key1234567890abcdefg';
const substr_key = long_key.substring(1, 15);

let arr = [];
externalizeString(substr_key);
console.log(arr[substr_key]);
//flags: --always-use-string-forwarding-table --expose-externalize-string